"use client";

import { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Search, 
  ThumbsUp,
  ThumbsDown,
  Layers
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogInteractiveFaqProps {
  faqs: FAQItem[];
  universityName: string;
}

export function BlogInteractiveFaq({ faqs, universityName }: BlogInteractiveFaqProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open first FAQ by default
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<number, boolean>>({});

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleExpandAll = () => {
    setOpenIndexes(faqs.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndexes([]);
  };

  const handleCopy = async (faq: FAQItem, index: number) => {
    const text = `❓ প্রশ্ন: ${faq.question}\n💡 উত্তর: ${faq.answer}\n(Admission Hub - ${universityName} গাইড)`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2500);
      } catch {
        // Fallback
      }
    }
  };

  const handleFeedback = (index: number, isHelpful: boolean) => {
    setHelpfulFeedback((prev) => ({ ...prev, [index]: isHelpful }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  return (
    <div id="faq-section" className="space-y-4">
      {/* Controls Bar: Search & Expand/Collapse */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
        {/* Search inside FAQ */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="প্রশ্ন খুঁজুন..."
            className="w-full pl-9 pr-3 py-2 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
        </div>

        {/* Expand / Collapse All Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleExpandAll}
            className="px-3 py-2 text-xs font-bold bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
          >
            সবগুলো খুলুন
          </button>
          <button
            onClick={handleCollapseAll}
            className="px-3 py-2 text-xs font-bold bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
          >
            সবগুলো বন্ধ করুন
          </button>
        </div>
      </div>

      {/* FAQs List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-dashed border-zinc-200 dark:border-white/10">
            <p className="text-xs text-zinc-500">কোনো প্রশ্নোত্তর পাওয়া যায়নি। অন্য শব্দ দিয়ে সার্চ করুন।</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            const isCopied = copiedIndex === idx;
            const feedback = helpfulFeedback[idx];

            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "bg-white dark:bg-[#1f1f23] border-primary-300 dark:border-primary-700/60 shadow-md"
                    : "bg-zinc-50/70 dark:bg-white/5 border-zinc-200/80 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20"
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-black ${
                      isOpen
                        ? "bg-primary-600 text-white"
                        : "bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
                    }`}>
                      ?
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-500 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-white/5 animate-in fade-in duration-150">
                    <div className="bg-zinc-50 dark:bg-white/5 p-4 rounded-xl border border-zinc-200/60 dark:border-white/5 my-2">
                      {faq.answer}
                    </div>

                    {/* Interactive Action Bar inside FAQ */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-2 border-t border-zinc-100 dark:border-white/5 text-xs">
                      {/* Feedback buttons */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-zinc-500">উত্তরটি কি সাহায্য করেছে?</span>
                        <button
                          onClick={() => handleFeedback(idx, true)}
                          className={`p-1.5 rounded-lg border flex items-center gap-1 transition-all ${
                            feedback === true
                              ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 border-emerald-300"
                              : "bg-white dark:bg-white/5 text-zinc-500 border-zinc-200 dark:border-white/10 hover:text-zinc-800"
                          }`}
                          title="হ্যাঁ, তথ্যবহুল"
                        >
                          <ThumbsUp size={13} />
                          {feedback === true && <span className="text-[10px] font-bold">ধন্যবাদ!</span>}
                        </button>
                        <button
                          onClick={() => handleFeedback(idx, false)}
                          className={`p-1.5 rounded-lg border transition-all ${
                            feedback === false
                              ? "bg-rose-100 dark:bg-rose-950/60 text-rose-700 border-rose-300"
                              : "bg-white dark:bg-white/5 text-zinc-500 border-zinc-200 dark:border-white/10 hover:text-zinc-800"
                          }`}
                          title="না"
                        >
                          <ThumbsDown size={13} />
                        </button>
                      </div>

                      {/* Copy Answer button */}
                      <button
                        onClick={() => handleCopy(faq, idx)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-primary-600 hover:border-primary-300 transition-all active:scale-95"
                      >
                        {isCopied ? (
                          <>
                            <Check size={13} className="text-emerald-500" />
                            <span className="text-emerald-600 font-bold">কপি হয়েছে!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>উত্তর কপি করুন</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
