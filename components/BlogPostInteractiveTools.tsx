"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Share2, 
  Copy, 
  Check, 
  Printer, 
  Bookmark, 
  ExternalLink, 
  MessageCircle, 
  Type, 
  ArrowUp, 
  BookmarkCheck, 
  Send, 
  Calculator,
  Home
} from "lucide-react";

interface BlogPostInteractiveToolsProps {
  slug: string;
  title: string;
  universityName: string;
  summary?: string;
}

export function BlogPostInteractiveTools({ 
  slug, 
  title, 
  universityName
}: BlogPostInteractiveToolsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem("admission_hub_saved_guides") || "[]");
        return saved.includes(slug);
      } catch {
        return false;
      }
    }
    return false;
  });
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [showToast, setShowToast] = useState<string | null>(null);

  // Check scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply font size to main content body
  useEffect(() => {
    const mainEl = document.getElementById("blog-content-container");
    if (mainEl) {
      mainEl.classList.remove("blog-text-sm", "blog-text-base", "blog-text-lg");
      mainEl.classList.add(`blog-text-${fontSize}`);
    }
  }, [fontSize]);

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 3000);
  };

  const getPostUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `/blog/${slug}`;
  };

  const handleCopyLink = async () => {
    const url = getPostUrl();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        triggerToast("গাইডের লিঙ্ক সফলভাবে কপি হয়েছে!");
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  const handleNativeShare = async () => {
    const url = getPostUrl();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Admission Hub`,
          text: `${universityName} ভর্তি পরীক্ষা ২০২৫-২০২৬ পূর্ণাঙ্গ গাইডলাইন ও সার্কুলার তথ্য`,
          url: url,
        });
      } catch {
        // User dismissed
      }
    } else {
      handleCopyLink();
    }
  };

  const handleWhatsAppShare = () => {
    const url = encodeURIComponent(getPostUrl());
    const text = encodeURIComponent(`*${title}*\n${universityName} ভর্তি নির্দেশিকা ও তথ্য দেখুন:\n`);
    window.open(`https://api.whatsapp.com/send?text=${text}${url}`, "_blank", "noopener,noreferrer");
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(getPostUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
  };

  const handleTelegramShare = () => {
    const url = encodeURIComponent(getPostUrl());
    const text = encodeURIComponent(`${title} - ${universityName} ভর্তি নির্দেশিকা`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleBookmarkToggle = () => {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem("admission_hub_saved_guides") || "[]");
      let nextSaved: string[];
      if (saved.includes(slug)) {
        nextSaved = saved.filter(s => s !== slug);
        setIsBookmarked(false);
        triggerToast("বুকমার্ক থেকে সরানো হয়েছে");
      } else {
        nextSaved = [...saved, slug];
        setIsBookmarked(true);
        triggerToast("গাইডটি ফেভারিটে সেভ করা হয়েছে!");
      }
      localStorage.setItem("admission_hub_saved_guides", JSON.stringify(nextSaved));
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Global Fixed Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-xs">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex items-center gap-2 px-4 py-3 bg-zinc-900/95 dark:bg-white/95 text-white dark:text-zinc-900 rounded-2xl shadow-2xl border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-200">
          <Check size={16} className="text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{showToast}</span>
        </div>
      )}

      {/* 3. Reading Toolbar inside Header / Card Top */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15 print:hidden">
        {/* Left Side: Home Quick Link + Font Size & Reading Control Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Homepage Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md shadow-emerald-900/30 transition-all active:scale-95 border border-emerald-300/40"
            title="হোমপেজে ফিরে যান"
          >
            <Home size={14} className="shrink-0" />
            <span>হোম</span>
          </Link>

          <div className="flex items-center gap-1.5 bg-black/20 dark:bg-black/40 backdrop-blur-md p-1 rounded-2xl border border-white/15">
            <span className="text-[11px] font-semibold text-white/80 px-2 flex items-center gap-1">
              <Type size={13} />
              <span className="hidden sm:inline">ফন্ট:</span>
            </span>
            <button
              onClick={() => setFontSize("sm")}
              title="ছোট ফন্ট (Small)"
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                fontSize === "sm"
                  ? "bg-white text-zinc-900 shadow-sm scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize("base")}
              title="স্বাভাবিক ফন্ট (Default)"
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                fontSize === "base"
                  ? "bg-white text-zinc-900 shadow-sm scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize("lg")}
              title="বড় ফন্ট (Large)"
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                fontSize === "lg"
                  ? "bg-white text-zinc-900 shadow-sm scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              A+
            </button>
          </div>
        </div>

        {/* Right Side: Multi-Action Interactive Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={handleBookmarkToggle}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm border backdrop-blur-md ${
              isBookmarked 
                ? "bg-amber-400 text-zinc-950 border-amber-300 shadow-amber-400/20" 
                : "bg-white/15 hover:bg-white/25 text-white border-white/20"
            }`}
            title={isBookmarked ? "ফেভারিট থেকে সরান" : "বুকমার্ক করে রাখুন"}
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck size={15} className="text-zinc-950 fill-zinc-950" />
                <span>সংরক্ষিত</span>
              </>
            ) : (
              <>
                <Bookmark size={15} />
                <span>বুকমার্ক</span>
              </>
            )}
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
            title="লিংক কপি করুন"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-300" />
                <span className="text-emerald-300 font-bold">লিংক কপিড</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>লিংক কপি</span>
              </>
            )}
          </button>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/40 shadow-sm shadow-emerald-700/30 transition-all active:scale-95"
            title="WhatsApp এ শেয়ার করুন"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Facebook Share Button */}
          <button
            onClick={handleFacebookShare}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/40 shadow-sm shadow-blue-700/30 transition-all active:scale-95"
            title="Facebook এ শেয়ার করুন"
          >
            <ExternalLink size={14} />
            <span>Facebook</span>
          </button>

          {/* Telegram Share Button */}
          <button
            onClick={handleTelegramShare}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white border border-sky-300/40 shadow-sm shadow-sky-600/30 transition-all active:scale-95"
            title="Telegram এ শেয়ার করুন"
          >
            <Send size={14} />
            <span>Telegram</span>
          </button>

          {/* Native Share Menu */}
          <button
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
            title="অন্যান্য মাধ্যমে শেয়ার করুন"
          >
            <Share2 size={14} />
            <span className="hidden sm:inline">শেয়ার</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
            title="গাইডলাইন প্রিন্ট বা PDF ডাউনলোড করুন"
          >
            <Printer size={14} />
            <span>প্রিন্ট / PDF</span>
          </button>
        </div>
      </div>

      {/* 4. Mobile Sticky Bottom Action Dock (Pristine Touch UX for Mobile) */}
      <aside aria-label="দ্রুত নেভিগেশন ও শেয়ার" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#121214]/95 backdrop-blur-lg border-t border-zinc-200 dark:border-white/10 px-2 py-2 flex items-center justify-around shadow-2xl print:hidden">
        {/* Direct Link to Homepage */}
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 text-emerald-700 dark:text-emerald-400 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shadow-xs border border-emerald-200/60 dark:border-emerald-800/60">
            <Home size={16} />
          </div>
          <span className="text-[10px] font-black">হোম</span>
        </Link>

        {/* Jump to Official Links */}
        <button
          onClick={() => scrollToSection("official-links-section")}
          className="flex flex-col items-center gap-0.5 text-zinc-700 dark:text-zinc-300 active:text-emerald-600 dark:active:text-emerald-400"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center">
            <ExternalLink size={16} />
          </div>
          <span className="text-[10px] font-bold">আবেদন লিংক</span>
        </button>

        {/* Jump to GPA Calculator */}
        <button
          onClick={() => scrollToSection("gpa-calculator-section")}
          className="flex flex-col items-center gap-0.5 text-zinc-700 dark:text-zinc-300 active:text-indigo-600 dark:active:text-indigo-400"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
            <Calculator size={16} />
          </div>
          <span className="text-[10px] font-bold">জিপিএ চেক</span>
        </button>

        {/* Quick Share */}
        <button
          onClick={handleNativeShare}
          className="flex flex-col items-center gap-0.5 text-zinc-700 dark:text-zinc-300 active:text-sky-600 dark:active:text-sky-400"
        >
          <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 flex items-center justify-center">
            <Share2 size={16} />
          </div>
          <span className="text-[10px] font-bold">শেয়ার</span>
        </button>

        {/* Bookmark */}
        <button
          onClick={handleBookmarkToggle}
          className="flex flex-col items-center gap-0.5 text-zinc-700 dark:text-zinc-300 active:text-amber-600 dark:active:text-amber-400"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isBookmarked 
              ? "bg-amber-400 text-zinc-950 font-bold" 
              : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
          }`}>
            <Bookmark size={16} className={isBookmarked ? "fill-zinc-950" : ""} />
          </div>
          <span className="text-[10px] font-bold">{isBookmarked ? "সেভড" : "বুকমার্ক"}</span>
        </button>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-0.5 text-zinc-700 dark:text-zinc-300 active:text-zinc-900"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 flex items-center justify-center">
            <ArrowUp size={16} />
          </div>
          <span className="text-[10px] font-bold">শীর্ষে</span>
        </button>
      </aside>
    </>
  );
}
