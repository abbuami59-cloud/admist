'use client';

import { useState, useEffect, useRef } from 'react';
import { ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export function AdBlockDetector() {
  // TODO: AdBlock detector is temporarily disabled because ads are currently disabled.
  // Remove the `return null;` below to re-enable the detector.
  return null;

  const [isAdBlockerActive, setIsAdBlockerActive] = useState(false);
  const detectionCount = useRef(0);

  useEffect(() => {
    let isMounted = true;
    let checkInterval: NodeJS.Timeout;

    const detectAdBlocker = async () => {
      let isBlocked = false;

      // 1. DOM Bait Detection
      const bait = document.createElement('div');
      bait.innerHTML = '&nbsp;';
      bait.className = 'adsbox ad-placement doubleclick ad-banner sponsor adsbygoogle';
      bait.setAttribute('aria-hidden', 'true');
      bait.style.display = 'block';
      bait.style.position = 'absolute';
      bait.style.top = '-9999px';
      bait.style.left = '-9999px';
      bait.style.height = '10px';
      bait.style.width = '10px';
      document.body.appendChild(bait);

      // We need to wait a tiny bit for the browser extension to parse and hide the DOM element
      await new Promise((resolve) => setTimeout(resolve, 50));

      const styles = window.getComputedStyle(bait);
      if (
        bait.offsetHeight === 0 ||
        bait.offsetWidth === 0 ||
        styles.display === 'none' ||
        styles.visibility === 'hidden'
      ) {
        isBlocked = true;
      }

      if (document.body.contains(bait)) {
        document.body.removeChild(bait);
      }

      // 2. Script URL Detection (Brave Shields / strict blockers usually block this URL completely)
      if (!isBlocked) {
        try {
          await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-store',
          });
        } catch (error) {
          isBlocked = true;
        }
      }

      if (isBlocked && isMounted) {
        setIsAdBlockerActive(true);
        // Disable scrolling on body to lock the user in the modal
        document.body.style.overflow = 'hidden';
      }
    };

    // Run the detection slightly after page hydration
    const initialTimer = setTimeout(() => {
      detectAdBlocker();
      
      // Setup a periodic check in case they toggle it on later
      checkInterval = setInterval(() => {
        if (detectionCount.current < 5) {
          detectAdBlocker();
          detectionCount.current += 1;
        } else {
          clearInterval(checkInterval);
        }
      }, 2000);
    }, 800);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearInterval(checkInterval);
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, []);

  if (!isAdBlockerActive) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-zinc-100/95 dark:bg-zinc-950/95 backdrop-blur-md px-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-500 ring-8 ring-red-50 dark:ring-red-500/10">
          <ShieldAlert className="h-10 w-10" />
        </div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          অ্যাড ব্লকার সনাক্ত হয়েছে!
        </h2>
        <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          আমাদের ওয়েবসাইটটি বিনামূল্যে চালু রাখার জন্য আমরা বিজ্ঞাপনের উপর নির্ভরশীল। অনুগ্রহ করে এই ওয়েবসাইটের জন্য আপনার <strong>Ad Blocker</strong> বা <strong>Brave Shields</strong> বন্ধ করুন এবং পেজটি রিলোড করুন।
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 active:scale-[0.98] shadow-lg shadow-red-600/20 cursor-pointer"
        >
          আমি অ্যাড ব্লকার বন্ধ করেছি, রিলোড করুন
        </button>
      </motion.div>
    </div>
  );
}
