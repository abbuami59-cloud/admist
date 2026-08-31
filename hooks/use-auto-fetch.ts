"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { DEFAULT_DATASETS } from "@/lib/default-datasets";

const CACHE_PREFIX = "admission_cache_v3_";
// 1 Hour Browser Cache TTL to prevent frequent server requests
const CACHE_TTL_MS = 60 * 60 * 1000;

interface CachePayload<T> {
  data: T[];
  timestamp: number;
  hash: string;
}

// Global in-memory cache across component mounts / page navigations
const memoryCache = new Map<string, CachePayload<any>>();

// Simple deterministic hash for data comparison
function hashData(obj: any): string {
  try {
    return JSON.stringify(obj);
  } catch {
    return String(Date.now());
  }
}

// Check if cached data is still fresh (under 1 hour)
function isFresh(timestamp: number | null): boolean {
  if (!timestamp) return false;
  return Date.now() - timestamp < CACHE_TTL_MS;
}

function getInitialCache<T>(type: string, initialData?: T[]): {
  data: T[];
  timestamp: number | null;
  isCached: boolean;
  hash: string;
} {
  // 0. Use Initial Server-Side Data if provided
  if (initialData && Array.isArray(initialData) && initialData.length > 0) {
    return {
      data: initialData,
      timestamp: Date.now(),
      isCached: true,
      hash: hashData(initialData),
    };
  }

  // 1. Check in-memory cache
  const mem = memoryCache.get(type);
  if (mem && Array.isArray(mem.data) && mem.data.length > 0) {
    return {
      data: mem.data,
      timestamp: mem.timestamp,
      isCached: true,
      hash: mem.hash,
    };
  }

  // 2. Check localStorage
  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(`${CACHE_PREFIX}${type}`);
      if (cached) {
        const parsed: CachePayload<T> = JSON.parse(cached);
        if (Array.isArray(parsed.data) && parsed.data.length > 0) {
          memoryCache.set(type, parsed);
          return {
            data: parsed.data,
            timestamp: parsed.timestamp,
            isCached: true,
            hash: parsed.hash,
          };
        }
      }
    } catch {
      // Ignore
    }
  }

  // 3. Fallback to bundled dataset
  const fallback = (DEFAULT_DATASETS[type] as T[]) || [];
  return {
    data: fallback,
    timestamp: null,
    isCached: false,
    hash: hashData(fallback),
  };
}

export function useAutoFetch<T>(type: string, initialData?: T[]) {
  // React state synchronized with cache
  const [prevType, setPrevType] = useState<string>(type);
  const [state, setState] = useState(() => getInitialCache<T>(type, initialData));

  // Adjust state during render when `type` prop changes
  if (prevType !== type) {
    setPrevType(type);
    setState(getInitialCache<T>(type, initialData));
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [justUpdated, setJustUpdated] = useState<boolean>(false);

  const activeHashRef = useRef<string>(state.hash);
  const isFetchingRef = useRef<boolean>(false);

  // Keep activeHashRef aligned when state changes
  useEffect(() => {
    activeHashRef.current = state.hash;
  }, [state.hash]);

  // Network fetch handler: saves to cache and only updates state when new data arrives
  const fetchData = useCallback(async (isManual = false) => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;

    if (isManual) {
      setIsRefreshing(true);
    }

    try {
      // If manual refresh, send refresh=1 to bypass server cache
      const url = isManual ? `/api/proxy?type=${type}&refresh=1` : `/api/proxy?type=${type}`;
      const res = await fetch(url, {
        cache: isManual ? "no-store" : "default",
      });

      if (!res.ok) {
        throw new Error(`সার্ভার থেকে ডেটা পাওয়া যায়নি (${res.status})`);
      }

      const result: T[] = await res.json();

      if (Array.isArray(result) && result.length > 0) {
        const newHash = hashData(result);
        const hasChanged = newHash !== activeHashRef.current;
        const now = Date.now();

        // Save fresh data to Memory Cache & LocalStorage
        const cachePayload: CachePayload<T> = {
          data: result,
          timestamp: now,
          hash: newHash,
        };
        memoryCache.set(type, cachePayload);

        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(`${CACHE_PREFIX}${type}`, JSON.stringify(cachePayload));
          } catch (storageErr) {
            console.warn("Browser cache save error:", storageErr);
          }
        }

        if (hasChanged) {
          // New information arrived! Update UI and notify user
          setState({
            data: result,
            timestamp: now,
            isCached: true,
            hash: newHash,
          });
          setJustUpdated(true);

          setTimeout(() => {
            setJustUpdated(false);
          }, 4000);
        } else {
          // Data is identical, just update timestamp
          setState((prev) => ({
            ...prev,
            timestamp: now,
            isCached: true,
          }));
        }

        setError(null);
      }
    } catch (err: any) {
      console.warn("Fetch error (showing cached data):", err);
      if (state.data.length === 0) {
        setError(err.message || "ডেটা লোড করতে সমস্যা হয়েছে");
      }
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [type, state.data.length]);

  // Cache-first check on mount:
  // ONLY fetch from network if there is NO valid cached data or cache has expired (> 1 hour)
  useEffect(() => {
    let isMounted = true;
    const current = getInitialCache<T>(type, initialData);
    if (isFresh(current.timestamp)) {
      return;
    }

    const runFetch = async () => {
      if (!isMounted) return;
      await fetchData(false);
    };

    runFetch();

    return () => {
      isMounted = false;
    };
  }, [type, fetchData, initialData]);

  // Explicit user manual refresh
  const refresh = useCallback(() => {
    return fetchData(true);
  }, [fetchData]);

  return {
    data: state.data,
    loading,
    isRefreshing,
    error,
    isCached: state.isCached,
    lastUpdated: state.timestamp,
    justUpdated,
    refresh,
  };
}
