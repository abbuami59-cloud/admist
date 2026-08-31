"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  ArrowRight,
  TrendingUp,
  Info
} from "lucide-react";

interface BlogGpaCalculatorProps {
  universityName: string;
  unitCode?: string;
  minimumGpaText?: string;
  isSecondTimeAllowed?: boolean;
}

export function BlogGpaCalculator({ 
  universityName, 
  unitCode, 
  minimumGpaText,
  isSecondTimeAllowed 
}: BlogGpaCalculatorProps) {
  const [sscGpa, setSscGpa] = useState<string>("4.50");
  const [hscGpa, setHscGpa] = useState<string>("4.80");
  const [hasPassedSsc, setHasPassedSsc] = useState<boolean>(true);

  // Quick preset buttons
  const presets = [
    { label: "গোল্ডেন A+", ssc: "5.00", hsc: "5.00" },
    { label: "রেগুলার A+", ssc: "4.80", hsc: "4.90" },
    { label: "A গ্রেড (4.50)", ssc: "4.50", hsc: "4.50" },
    { label: "A- গ্রেড (4.00)", ssc: "4.00", hsc: "4.00" },
  ];

  const sscNum = Math.min(5.0, Math.max(0, parseFloat(sscGpa) || 0));
  const hscNum = Math.min(5.0, Math.max(0, parseFloat(hscGpa) || 0));
  const totalGpa = (sscNum + hscNum);

  // Common admission GPA score formula (e.g. SSC × 10 + HSC × 10 = 100 or SSC×12 + HSC×12)
  const gpaScore100 = (sscNum * 10) + (hscNum * 10);
  const gpaScore50 = (sscNum * 5) + (hscNum * 5);
  const gpaScore20 = (sscNum * 2) + (hscNum * 2);

  // Parse basic required GPA heuristic
  const isLikelyEligible = totalGpa >= 7.0 && sscNum >= 3.0 && hscNum >= 3.0;

  const handleReset = () => {
    setSscGpa("");
    setHscGpa("");
  };

  return (
    <div id="gpa-calculator-section" className="my-6 p-5 sm:p-7 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-indigo-950/30 dark:via-[#18181b] dark:to-purple-950/20 border-2 border-indigo-200/80 dark:border-indigo-800/50 rounded-3xl shadow-md overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-1.5">
            <Calculator size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span>ইন্টারেক্টিভ যোগ্যতা ও জিপিএ ক্যালকুলেটর</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {universityName} {unitCode ? `(${unitCode})` : ""} জিপিএ স্কোর ও যোগ্যতা যাচাই
          </h3>
          {minimumGpaText && (
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
              নূন্যতম যোগ্যতা শর্ত: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{minimumGpaText}</span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 transition-all shadow-xs"
          >
            <RotateCcw size={13} />
            <span>রিসেট</span>
          </button>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mr-1">কুইক সিলেক্ট:</span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => { setSscGpa(p.ssc); setHscGpa(p.hsc); }}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-white/10 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all active:scale-95 shadow-xs"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* SSC GPA Input */}
        <div className="p-4 bg-white dark:bg-[#202024] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xs">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              SSC বা সমমান GPA
            </label>
            <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
              সর্বোচ্চ: ৫.০০
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            min="0"
            max="5"
            value={sscGpa}
            onChange={(e) => setSscGpa(e.target.value)}
            placeholder="e.g. 5.00"
            className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl text-base font-bold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
          />
          <div className="flex items-center gap-1.5 mt-2">
            {[5.00, 4.80, 4.50, 4.00].map((val) => (
              <button
                key={val}
                onClick={() => setSscGpa(val.toFixed(2))}
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
              >
                {val.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        {/* HSC GPA Input */}
        <div className="p-4 bg-white dark:bg-[#202024] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xs">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              HSC বা সমমান GPA
            </label>
            <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
              সর্বোচ্চ: ৫.০০
            </span>
          </div>
          <input
            type="number"
            step="0.01"
            min="0"
            max="5"
            value={hscGpa}
            onChange={(e) => setHscGpa(e.target.value)}
            placeholder="e.g. 5.00"
            className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl text-base font-bold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
          />
          <div className="flex items-center gap-1.5 mt-2">
            {[5.00, 4.80, 4.50, 4.00].map((val) => (
              <button
                key={val}
                onClick={() => setHscGpa(val.toFixed(2))}
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
              >
                {val.toFixed(2)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white/80 dark:bg-black/40 rounded-2xl border border-indigo-100 dark:border-indigo-950 shadow-inner mb-5">
        <div className="text-center p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-0.5">মোট সম্মিলিত GPA</span>
          <span className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">
            {totalGpa > 0 ? totalGpa.toFixed(2) : "০.০০"} <span className="text-xs font-normal text-zinc-500">/ ১০.০০</span>
          </span>
        </div>

        <div className="text-center p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-0.5">জিপিএ মার্কস (১০০ নম্বরে)</span>
          <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">
            {gpaScore100 > 0 ? gpaScore100.toFixed(2) : "০.০০"} <span className="text-xs font-normal text-zinc-500">/ ১০০</span>
          </span>
        </div>

        <div className="text-center p-3 rounded-xl bg-teal-50/60 dark:bg-teal-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-0.5">জিপিএ মার্কস (২০ নম্বরে)</span>
          <span className="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">
            {gpaScore20 > 0 ? gpaScore20.toFixed(2) : "০.০০"} <span className="text-xs font-normal text-zinc-500">/ ২০</span>
          </span>
        </div>
      </div>

      {/* Eligibility Status Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <h4 className="font-extrabold text-emerald-900 dark:text-emerald-200 text-sm sm:text-base">
              {isLikelyEligible ? "আপনি সাধারণ জিপিএ শর্তানুযায়ী আবেদনের যোগ্য!" : "জিপিএ তথ্য যাচাই করুন"}
            </h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              {isSecondTimeAllowed ? "✓ দ্বিতীয় বার (2nd Time) পরীক্ষা দেওয়ার সুযোগ রয়েছে।" : "⚠️ এটি শুধুমাত্র ফার্স্ট টাইমারদের জন্য উন্মুক্ত।"}
            </p>
          </div>
        </div>

        <Link
          href="/tools/calculator"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95 shrink-0"
        >
          <span>পূর্ণাঙ্গ জিপিএ ক্যালকুলেটর</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
