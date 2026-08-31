"use client";

import { useState } from "react";
import { 
  Share2, 
  Copy, 
  Check, 
  Printer, 
  Bookmark, 
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from "lucide-react";

interface BlogPostClientActionsProps {
  slug: string;
  title: string;
  universityName: string;
}

export function BlogPostClientActions({ slug, title, universityName }: BlogPostClientActionsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

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
        // User dismissed or share failed
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

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleSaveToggle = () => {
    setSaved(!saved);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden">
      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/15 dark:bg-black/30 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
        title="লিংক কপি করুন"
      >
        {copied ? (
          <>
            <Check size={15} className="text-emerald-300" />
            <span className="text-emerald-300 font-bold">লিংক কপি হয়েছে!</span>
          </>
        ) : (
          <>
            <Copy size={15} />
            <span>লিংক কপি</span>
          </>
        )}
      </button>

      {/* Share Menu / Native Share */}
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/15 dark:bg-black/30 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
        title="শেয়ার করুন"
      >
        <Share2 size={15} />
        <span>শেয়ার</span>
      </button>

      {/* WhatsApp Quick Share */}
      <button
        onClick={handleWhatsAppShare}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600/80 hover:bg-emerald-600 text-white border border-emerald-400/30 backdrop-blur-md transition-all active:scale-95 shadow-sm"
        title="হোয়াটসঅ্যাপে শেয়ার করুন"
      >
        <MessageCircle size={15} />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      {/* Facebook Quick Share */}
      <button
        onClick={handleFacebookShare}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-400/30 backdrop-blur-md transition-all active:scale-95 shadow-sm"
        title="ফেসবুকে শেয়ার করুন"
      >
        <ExternalLink size={15} />
        <span className="hidden sm:inline">Facebook</span>
      </button>

      {/* Print Guide Button */}
      <button
        onClick={handlePrint}
        className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/15 dark:bg-black/30 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
        title="গাইড প্রিন্ট বা PDF সেভ করুন"
      >
        <Printer size={15} />
        <span>প্রিন্ট / PDF</span>
      </button>
    </div>
  );
}
