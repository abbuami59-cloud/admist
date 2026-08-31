"use client";

import { useState, useEffect } from "react";
import { 
  AlertTriangle, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2,
  Lock,
  Globe
} from "lucide-react";

interface SmartWebViewProps {
  src: string;
  title: string;
  externalUrl?: string;
  defaultHeight?: number; // e.g., 900
  allowFullscreen?: boolean;
  hideExternalLink?: boolean;
}

export function SmartWebView({
  src,
  title,
  externalUrl,
  defaultHeight = 900,
  allowFullscreen = true,
  hideExternalLink = false,
}: SmartWebViewProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  // Height state: Starts spacious (950px on desktop or 85vh) and can expand or toggle
  const [viewHeight, setViewHeight] = useState<number>(defaultHeight);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setRetryKey((prev) => prev + 1);
  };

  const targetUrl = externalUrl || src;

  return (
    <div 
      className={`relative w-full flex flex-col transition-all duration-300 ${
        isFullscreen 
          ? "fixed inset-0 z-50 bg-white dark:bg-[#121214] p-2 sm:p-4 h-screen" 
          : "rounded-b-2xl overflow-hidden"
      }`}
      style={{
        height: isFullscreen ? "100vh" : `${viewHeight}px`,
        minHeight: isFullscreen ? "100vh" : "750px",
      }}
    >
      {/* Top Quick Action Bar for Web View Control */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 select-none">
        <div className="flex items-center gap-2 truncate max-w-[70%]">
          <Globe size={13} className="text-primary-600 dark:text-primary-400 shrink-0" />
          <span className="truncate font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
            {!hideExternalLink && targetUrl ? new URL(targetUrl.startsWith("http") ? targetUrl : `https://${targetUrl}`).hostname : "ওয়েব ভিউ"}
          </span>
          {isLoading && (
            <span className="inline-flex items-center gap-1 text-[11px] text-primary-600 dark:text-primary-400 animate-pulse font-medium">
              <RefreshCw size={11} className="animate-spin" />
              <span>লোড হচ্ছে...</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Height adjustment presets */}
          {!hideExternalLink && !isFullscreen && (
            <div className="hidden sm:flex items-center gap-1 bg-zinc-200 dark:bg-white/10 rounded-lg p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setViewHeight(750)}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  viewHeight === 750 ? "bg-white dark:bg-zinc-800 font-bold shadow-xs text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                ডিফল্ট
              </button>
              <button
                type="button"
                onClick={() => setViewHeight(1100)}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  viewHeight === 1100 ? "bg-white dark:bg-zinc-800 font-bold shadow-xs text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                বড় ভিউ
              </button>
              <button
                type="button"
                onClick={() => setViewHeight(1500)}
                className={`px-2 py-0.5 rounded-md transition-colors ${
                  viewHeight === 1500 ? "bg-white dark:bg-zinc-800 font-bold shadow-xs text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                পূর্ণ দৈর্ঘ্য
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          {allowFullscreen && (
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-300 transition-colors"
              title={isFullscreen ? "ফুলস্ক্রিন বন্ধ করুন" : "ফুলস্ক্রিন ভিউ"}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          )}

          {/* Direct External Link */}
          {!hideExternalLink && targetUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/60 hover:bg-primary-100 dark:hover:bg-primary-900/50 rounded-lg border border-primary-200/60 dark:border-primary-800/40 transition-colors"
            >
              <ExternalLink size={12} />
              <span>ওপেন</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-zinc-900/70 relative">
        {src && !hasError ? (
          <>
            {hideExternalLink && (
              /* Invisible overlay over top-right corner to suppress Google Drive pop-out button */
              <div 
                className="absolute top-0 right-0 w-16 h-14 z-20 pointer-events-auto bg-transparent select-none" 
                aria-hidden="true"
              />
            )}
            <iframe
              key={retryKey}
              src={src}
              className="w-full h-full border-0 absolute inset-0 z-10 bg-white"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals"
              title={title}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </>
        ) : (
          /* When URL is broken or down */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 text-center bg-zinc-50 dark:bg-[#18181b] z-20 absolute inset-0">
            <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 border border-rose-200 dark:border-rose-800/30">
              <AlertTriangle size={32} />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
              ইউআরএলটি (URL) এখন বন্ধ বা লোড করা যাচ্ছে না
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-5 leading-relaxed">
              সংশ্লিষ্ট পোর্টালের সার্ভার সাময়িকভাবে ডাউন থাকতে পারে অথবা ফ্রেম সুরক্ষা (X-Frame-Options) এর কারণে সরাসরি ওয়েবভিউতে দেখানো সম্ভব হচ্ছে না।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 bg-zinc-200 dark:bg-white/10 hover:bg-zinc-300 dark:hover:bg-white/20 rounded-xl active:scale-95 transition-all"
              >
                <RefreshCw size={15} />
                <span>পুনরায় চেষ্টা করুন</span>
              </button>

              {!hideExternalLink && targetUrl && (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-primary-600 hover:bg-primary-500 rounded-xl shadow-md shadow-primary-600/20 active:scale-95 transition-all"
                >
                  <ExternalLink size={15} />
                  <span>অফিসিয়াল সাইটে সরাসরি যান</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
