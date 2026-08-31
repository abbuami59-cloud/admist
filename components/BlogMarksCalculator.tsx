"use client";

import { useState } from "react";
import { 
  Percent, 
  Check, 
  X, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  TrendingUp, 
  AlertTriangle
} from "lucide-react";

interface BlogMarksCalculatorProps {
  totalMarks?: number;
  passMarks?: string;
  negativeMarking?: string;
}

export function BlogMarksCalculator({
  totalMarks = 100,
  passMarks = "৪০",
  negativeMarking = "০.২৫"
}: BlogMarksCalculatorProps) {
  const [totalQuestions, setTotalQuestions] = useState<number>(100);
  const [correctAnswers, setCorrectAnswers] = useState<number>(75);
  const [wrongAnswers, setWrongAnswers] = useState<number>(12);
  const penaltyRate = 0.25;

  const unanswered = Math.max(0, totalQuestions - correctAnswers - wrongAnswers);
  const penalty = wrongAnswers * penaltyRate;
  const netScore = Math.max(0, correctAnswers - penalty);
  const accuracy = (correctAnswers + wrongAnswers) > 0 
    ? ((correctAnswers / (correctAnswers + wrongAnswers)) * 100).toFixed(1) 
    : "0";

  const passMarkNumber = parseFloat(passMarks.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d).toString())) || 40;
  const isPassed = netScore >= passMarkNumber;

  const handlePreset = (correct: number, wrong: number) => {
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);
  };

  const handleReset = () => {
    setCorrectAnswers(70);
    setWrongAnswers(15);
  };

  return (
    <div className="my-6 p-5 sm:p-7 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/50 dark:from-teal-950/30 dark:via-[#18181b] dark:to-emerald-950/20 border-2 border-teal-200/80 dark:border-teal-800/50 rounded-3xl shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-bold mb-1.5">
            <Percent size={14} className="text-teal-600 dark:text-teal-400" />
            <span>ইন্টারেক্টিভ নেগেটিভ মার্কিং ও স্কোর সিমুলেটর</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
            ভর্তি পরীক্ষার নেট নম্বর ও কাট-অফ পূর্বাভাস
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
            প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে। আপনার প্রত্যাশিত নম্বর যাচাই করুন।
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 transition-all shadow-xs self-start sm:self-auto"
        >
          <RotateCcw size={13} />
          <span>রিসেট</span>
        </button>
      </div>

      {/* Preset Scenarios */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mr-1">মডেল টেস্ট প্রিসেট:</span>
        <button
          onClick={() => handlePreset(85, 5)}
          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-white/10 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-all"
        >
          🌟 টপার স্কোর (৮৫ সঠিক, ৫ ভুল)
        </button>
        <button
          onClick={() => handlePreset(70, 15)}
          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-white/10 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-all"
        >
          🎯 সেফ জোন (৭০ সঠিক, ১৫ ভুল)
        </button>
        <button
          onClick={() => handlePreset(55, 25)}
          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-white/10 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-all"
        >
          ⚡ কাট-অফ বর্ডার (৫৫ সঠিক, ২৫ ভুল)
        </button>
      </div>

      {/* Sliders / Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Correct Answers */}
        <div className="p-4 bg-white dark:bg-[#202024] rounded-2xl border border-emerald-200/80 dark:border-emerald-900/40 shadow-xs">
          <div className="flex justify-between items-center mb-1.5">
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <Check size={16} />
              সঠিক উত্তর সংখ্যা:
            </span>
            <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
              {correctAnswers} টি (+{correctAnswers.toFixed(2)})
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={totalQuestions}
            value={correctAnswers}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              setCorrectAnswers(val);
              if (val + wrongAnswers > totalQuestions) {
                setWrongAnswers(totalQuestions - val);
              }
            }}
            className="w-full accent-emerald-600 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
            <span>০</span>
            <span>৫০</span>
            <span>১০০</span>
          </div>
        </div>

        {/* Wrong Answers */}
        <div className="p-4 bg-white dark:bg-[#202024] rounded-2xl border border-rose-200/80 dark:border-rose-900/40 shadow-xs">
          <div className="flex justify-between items-center mb-1.5">
            <span className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300">
              <X size={16} />
              ভুল উত্তর সংখ্যা:
            </span>
            <span className="text-base font-extrabold text-rose-600 dark:text-rose-400">
              {wrongAnswers} টি (-{penalty.toFixed(2)})
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={totalQuestions - correctAnswers}
            value={wrongAnswers}
            onChange={(e) => setWrongAnswers(parseInt(e.target.value) || 0)}
            className="w-full accent-rose-600 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
            <span>০</span>
            <span>২৫</span>
            <span>৫০</span>
          </div>
        </div>
      </div>

      {/* Score Summary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white/90 dark:bg-black/40 rounded-2xl border border-teal-100 dark:border-teal-950 mb-5">
        <div className="text-center p-2.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block">মোট প্রশ্ন</span>
          <span className="text-lg font-bold text-zinc-800 dark:text-zinc-200">{totalQuestions} টি</span>
        </div>
        <div className="text-center p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block">নেগেটিভ কর্তন</span>
          <span className="text-lg font-bold text-rose-600 dark:text-rose-400">-{penalty.toFixed(2)}</span>
        </div>
        <div className="text-center p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block">সঠিকতার হার</span>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{accuracy}%</span>
        </div>
        <div className="text-center p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block">চূড়ান্ত নেট স্কোর</span>
          <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {netScore.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Result Status Badge */}
      <div className={`p-4 rounded-2xl flex items-center justify-between gap-3 border ${
        isPassed
          ? "bg-emerald-100/70 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
          : "bg-amber-100/70 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200"
      }`}>
        <div className="flex items-center gap-2.5">
          {isPassed ? <Award size={22} className="text-emerald-600 shrink-0" /> : <AlertTriangle size={22} className="text-amber-600 shrink-0" />}
          <div>
            <h4 className="font-extrabold text-sm sm:text-base">
              {isPassed ? `পরীক্ষায় উত্তীর্ণ (পাস মার্ক ${passMarks} পার হয়েছে)!` : `পাস মার্ক (${passMarks}) থেকে কম নম্বর।`}
            </h4>
            <p className="text-xs opacity-85">
              {isPassed ? "নেগেটিভ দাগানো কমিয়ে সঠিকতার হার ৮০%+ এ রাখার চেষ্টা করুন।" : "ভুল উত্তরের সংখ্যা কমিয়ে সঠিক উত্তরে ফোকাস করুন।"}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-xl text-xs font-black bg-white dark:bg-black/40 shadow-xs shrink-0">
          {isPassed ? "উত্তীর্ণ ✓" : "সতর্কতা ⚠️"}
        </span>
      </div>
    </div>
  );
}
