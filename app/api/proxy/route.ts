import { NextResponse } from 'next/server';
import { DEFAULT_DATASETS } from '@/lib/default-datasets';

export const revalidate = 3600;

interface ServerCacheEntry {
  data: any[];
  timestamp: number;
}

// Server-side cache store with 1-hour TTL
const serverCache = new Map<string, ServerCacheEntry>();
const SERVER_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const isForceRefresh = searchParams.get('refresh') === '1' || searchParams.get('force') === 'true';

  const validTypes = ['timeline', 'info', 'apply', 'admit', 'result'];
  if (!type || !validTypes.includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const now = Date.now();
  const cachedEntry = serverCache.get(type);

  // Return server cached data if available and not explicitly forced to refresh
  if (!isForceRefresh && cachedEntry && (now - cachedEntry.timestamp < SERVER_CACHE_TTL_MS)) {
    return NextResponse.json(cachedEntry.data, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
        'X-Cache-Status': 'HIT',
      },
    });
  }

  const targetUrl = `https://admission-calendar.com/api/get_${type}.php?t=${now}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(targetUrl, {
      headers: {
        'Referer': 'https://admission-calendar.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      cache: 'default',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        // Save to server cache
        serverCache.set(type, { data, timestamp: now });

        return NextResponse.json(data, {
          headers: {
            'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
            'X-Cache-Status': 'MISS',
          },
        });
      }
    }

    // If upstream returns empty array or invalid response, return cached or fallback
    const fallback = (cachedEntry && cachedEntry.data) || DEFAULT_DATASETS[type] || [];
    return NextResponse.json(fallback, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (_error: any) {
    // If upstream fails or times out, safely return our server cached data or default dataset
    const fallback = (cachedEntry && cachedEntry.data) || DEFAULT_DATASETS[type] || [];
    return NextResponse.json(fallback, {
      headers: {
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=3600',
      },
    });
  }
}

