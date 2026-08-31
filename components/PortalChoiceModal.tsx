"use client";

import { useEffect } from "react";
import Link from "next/link";
import { 
  X, 
  ExternalLink, 
  Globe, 
  Download, 
  Award, 
  ChevronRight 
} from "lucide-react";

export interface PortalChoiceModalData {
  isOpen: boolean;
  type: "admit" | "result";
  university: string;
  internalHref: string;
  externalHref: string;
}

interface PortalChoiceModalProps {
  data: PortalChoiceModalData | null;
  onClose: () => void;
}

export function PortalChoiceModal({ data, onClose }: PortalChoiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (data?.isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data?.isOpen, onClose]);

  if (!data || !data.isOpen) return null;

  const isAdmit = data.type === "admit";
  const portalLabel = isAdmit ? "এডমিট কার্ড ডাউনলোড" : "ভর্তি পরীক্ষার ফলাফল";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative w-full max-w-md bg-white dark:bg-[#18181b] rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl p-5 sm:p-6 space-y-4 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Close Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl shrink-0 ${
              isAdmit 
                ? "bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400" 
                : "bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400"
            }`}>
              {isAdmit ? <Download size={22} /> : <Award size={22} />}
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                {portalLabel}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 truncate leading-snug">
                {data.university}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            aria-label="বন্ধ করুন"
          >
            <X size={18} />
          </button>
        </div>

        {/* Prompt Question */}
        <div className="bg-zinc-50 dark:bg-white/5 p-3.5 rounded-2xl border border-zinc-100 dark:border-white/5">
          <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
            আপনি কি এই পোর্টালটি আমাদের ওয়েবসাইটে দেখতে চান, নাকি বিশ্ববিদ্যালয়ের অফিশিয়াল সাইটে নতুন ট্যাবে যেতে চান?
          </p>
        </div>

        {/* The Two Choices */}
        <div className="space-y-2.5 pt-1">
          {/* Option 1: In-Website (Our Site Web View) */}
          <Link
            href={data.internalHref}
            onClick={onClose}
            className="w-full group p-4 rounded-2xl border-2 border-primary-500/30 dark:border-primary-500/40 bg-primary-50/50 dark:bg-primary-950/30 hover:bg-primary-100/60 dark:hover:bg-primary-900/40 hover:border-primary-600 dark:hover:border-primary-400 transition-all flex items-center justify-between gap-3 text-left active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-primary-600/20 group-hover:scale-105 transition-transform">
                <Globe size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  আমাদের ওয়েবসাইটেই ওপেন করুন
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  ওয়েবসাইটের ভেতরেই ওয়েবভিউতে সহজে দেখুন
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>

          {/* Option 2: New Tab (Official Website) */}
          <a
            href={data.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full group p-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-zinc-50 dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all flex items-center justify-between gap-3 text-left active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ExternalLink size={19} />
              </div>
              <div className="min-w-0">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  নতুন ট্যাবে যান (অফিশিয়াল ওয়েবসাইট)
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  সরাসরি বিশ্ববিদ্যালয়ের মূল সার্ভারে প্রবেশ করুন
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-zinc-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>

        {/* Cancel Button */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors py-1 px-3 rounded-lg"
          >
            বাতিল করুন
          </button>
        </div>
      </div>
    </div>
  );
}
