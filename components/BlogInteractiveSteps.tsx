"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  Circle, 
  RotateCcw, 
  ArrowRight,
  ListOrdered,
  Award
} from "lucide-react";

interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
}

interface BlogInteractiveStepsProps {
  steps: ApplicationStep[];
  applicationFee?: string;
  deadlineNotice?: string;
}

export function BlogInteractiveSteps({ 
  steps, 
  applicationFee, 
  deadlineNotice 
}: BlogInteractiveStepsProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const handleMarkAll = () => {
    setCompletedSteps(steps.map((s) => s.stepNumber));
  };

  const handleReset = () => {
    setCompletedSteps([]);
  };

  const progressPercentage = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="my-5 p-5 sm:p-6 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
      {/* Header with Progress Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
              আবেদন চেকলিস্ট ট্র্যাকার
            </span>
            <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300">
              {completedSteps.length} / {steps.length} ধাপ সম্পন্ন
            </span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            প্রতিটি ধাপ সম্পন্ন করার পর টিক দিন যাতে কোনো ধাপ বাদ না পড়ে।
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handleMarkAll}
            className="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-white/10 border border-zinc-200 dark:border-white/10 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 transition-colors"
          >
            সব সম্পন্ন
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 text-xs text-zinc-500 hover:text-zinc-700 bg-white dark:bg-white/10 border border-zinc-200 dark:border-white/10 rounded-lg transition-colors"
            title="রিসেট করুন"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden mb-5">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="space-y-3">
        {steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);

          return (
            <div
              key={step.stepNumber}
              onClick={() => toggleStep(step.stepNumber)}
              className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                isDone
                  ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300/80 dark:border-emerald-800/60 shadow-xs"
                  : "bg-white dark:bg-[#18181b] border-zinc-200 dark:border-white/10 hover:border-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-white/5"
              }`}
            >
              {/* Checkbox Icon */}
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                ) : (
                  <Circle size={20} className="text-zinc-300 dark:text-zinc-600" />
                )}
              </div>

              {/* Step Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black text-zinc-400 font-mono">
                    ধাপ {step.stepNumber}
                  </span>
                  <h4 className={`font-bold text-sm sm:text-base ${
                    isDone ? "text-emerald-900 dark:text-emerald-200 line-through opacity-85" : "text-zinc-900 dark:text-zinc-100"
                  }`}>
                    {step.title}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                  isDone ? "text-emerald-800/80 dark:text-emerald-300/70" : "text-zinc-600 dark:text-zinc-400"
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {completedSteps.length === steps.length && (
        <div className="mt-4 p-3 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-200 animate-in fade-in">
          <Award size={18} className="text-emerald-600 shrink-0" />
          <span>অভিনন্দন! আপনি আবেদনের সকল পূর্বশর্ত ও চেকলিস্ট পর্যালোচনা সম্পন্ন করেছেন।</span>
        </div>
      )}
    </div>
  );
}
