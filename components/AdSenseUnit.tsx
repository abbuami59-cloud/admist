'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseUnitProps {
  client?: string;
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layoutKey?: string;
  layout?: string;
  responsive?: boolean;
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdSenseUnit({
  client = 'ca-pub-7608093638667157',
  slot,
  format = 'auto',
  layoutKey,
  layout,
  responsive = true,
  className = '',
  label = 'বিজ্ঞাপন',
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pathname = usePathname();
  const isPushed = useRef(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const pushAd = () => {
      if (typeof window === 'undefined') return;

      try {
        if (adRef.current && !isPushed.current) {
          // Check if ad element is already filled by AdSense
          const isFilled = adRef.current.getAttribute('data-ad-status') === 'filled' ||
                           adRef.current.innerHTML.trim().length > 0;
          
          if (!isFilled) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isPushed.current = true;
          }
        }
      } catch (err) {
        // TagError or already filled instances are caught gracefully
        console.debug('AdSense unit push note:', err);
      }
    };

    // Allow DOM to settle and AdSense script to be ready
    timeoutId = setTimeout(pushAd, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, slot]);

  // TODO: Ads are temporarily disabled to improve initial visitor retention.
  return null;

  return (
    <div
      className={`my-6 w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 p-3 sm:p-4 text-center transition-all ${className}`}
      id={`ad-container-${slot || 'auto'}`}
    >
      {label && (
        <div className="mb-2 flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/70 mr-1" />
          <span>{label}</span>
        </div>
      )}
      
      <div className="w-full flex items-center justify-center min-h-[90px] sm:min-h-[100px] max-w-full overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client={client}
          {...(slot ? { 'data-ad-slot': slot } : {})}
          data-ad-format={format}
          {...(responsive ? { 'data-full-width-responsive': 'true' } : {})}
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
          {...(layout ? { 'data-ad-layout': layout } : {})}
        />
      </div>
    </div>
  );
}
