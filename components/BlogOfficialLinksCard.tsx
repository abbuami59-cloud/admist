"use client";

import { useState } from "react";
import { 
  ExternalLink, 
  FileDown, 
  Copy, 
  Check, 
  Globe, 
  CalendarPlus, 
  HelpCircle,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

interface ImportantLink {
  label: string;
  url: string;
  badge?: string;
}

interface BlogOfficialLinksCardProps {
  links: ImportantLink[];
  universityName: string;
  unitCode?: string;
}

export function BlogOfficialLinksCard({ links, universityName, unitCode }: BlogOfficialLinksCardProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [reminderAdded, setReminderAdded] = useState<number | null>(null);

  const handleCopy = async (url: string, index: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2500);
      } catch {
        // Fallback
      }
    }
  };

  const handleSetReminder = (label: string, url: string, index: number) => {
    const title = encodeURIComponent(`${universityName} (${unitCode || 'ভর্তি'}) আবেদন / সার্কুলার`);
    const details = encodeURIComponent(`অফিসিয়াল ভর্তি পোর্টাল লিংক: ${url}\n\nAdmission Hub থেকে সংরক্ষিত।`);
    
    // Google Calendar template link
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
    window.open(calUrl, "_blank", "noopener,noreferrer");
    
    setReminderAdded(index);
    setTimeout(() => setReminderAdded(null), 3000);
  };

  return (
    <div id="official-links-section" className="space-y-4">
      {links.map((link, idx) => {
        const isCopied = copiedIndex === idx;
        const isReminded = reminderAdded === idx;

        // Determine link archetype colors for visual vibrance
        const isApplicationLink = link.label.includes("আবেদন") || link.label.includes("Apply") || link.label.includes("পোর্টাল");
        const isNoticeLink = link.label.includes("সার্কুলার") || link.label.includes("বিজ্ঞপ্তি") || link.label.includes("Notice");
        
        return (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600/40 flex flex-col justify-between gap-4"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/70 text-primary-700 dark:text-primary-300 flex items-center justify-center shrink-0 shadow-xs">
                  {isApplicationLink ? <Globe size={20} /> : <FileDown size={20} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {link.label}
                    </h3>
                    {link.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono break-all line-clamp-1 mt-0.5">
                    {link.url}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg self-start sm:self-auto border border-emerald-200/60 dark:border-emerald-900/40">
                <ShieldCheck size={13} />
                <span>যাচাইকৃত অফিসিয়াল লিংক</span>
              </div>
            </div>

            {/* Rich 3-Button / 4-Button Interactive Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-zinc-200/60 dark:border-white/5">
              {/* Button 1: Primary Action (Open Link) */}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/30 transition-all text-center"
              >
                <span>{isApplicationLink ? "অনলাইন আবেদন লিংক" : "ওয়েবসাইট ভিজিট করুন"}</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Button 2: Secondary Action (Set Reminder / Circular View) */}
              <button
                onClick={() => handleSetReminder(link.label, link.url, idx)}
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95 text-center ${
                  isReminded
                    ? "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800"
                    : "bg-white dark:bg-[#202024] text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-white/10 hover:border-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/20"
                }`}
                title="গুগল ক্যালেন্ডারে রিমাইন্ডার সেট করুন"
              >
                <CalendarPlus size={15} className="text-amber-500" />
                <span>{isReminded ? "রিমাইন্ডার খোলা হয়েছে!" : "ক্যালেন্ডার রিমাইন্ডার"}</span>
              </button>

              {/* Button 3: Tertiary Action (Copy URL) */}
              <button
                onClick={() => handleCopy(link.url, idx)}
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all active:scale-95 text-center ${
                  isCopied
                    ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
                    : "bg-white dark:bg-[#202024] text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5"
                }`}
                title="ওয়েবসাইট লিংক কপি করুন"
              >
                {isCopied ? (
                  <>
                    <Check size={15} className="text-emerald-600 dark:text-emerald-400" />
                    <span>লিংক কপি হয়েছে!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-zinc-500" />
                    <span>লিংক কপি করুন</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
