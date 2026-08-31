"use client";

import { useEffect, useState } from "react";
import { DataView } from "@/components/DataView";
import { CalendarDays, Clock, Timer } from "lucide-react";
import { getUniversityFullName } from "@/lib/university-names";

export function HomeTimelineView({ initialData }: { initialData?: any[] }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(d);
  };

  const getCountdownObj = (targetDate: string) => {
    if (!now) return null;
    const target = new Date(targetDate).getTime();
    const diff = target - now;
    if (diff <= 0) return { passed: true };

    return {
      passed: false,
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / 1000 / 60) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const renderTime = (targetDate: string) => {
    const time = getCountdownObj(targetDate);
    if (!time) {
      return (
        <div className="flex gap-1 animate-pulse">
          <div className="h-7 w-8 bg-zinc-200 dark:bg-white/10 rounded-md"></div>
          <div className="h-7 w-8 bg-zinc-200 dark:bg-white/10 rounded-md"></div>
          <div className="h-7 w-8 bg-zinc-200 dark:bg-white/10 rounded-md"></div>
          <div className="h-7 w-8 bg-zinc-200 dark:bg-white/10 rounded-md"></div>
        </div>
      );
    }

    if (time.passed) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-100 text-zinc-500 dark:bg-white/5 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
          <Clock size={14} />
          Passed
        </span>
      );
    }

    const pad = (num: number) => num.toString().padStart(2, "0");

    return (
      <div className="flex items-center gap-1.5 sm:justify-end">
        <Timer size={16} className="text-primary-500 hidden sm:block" />
        <div className="flex gap-1.5 font-mono text-sm sm:text-base font-bold">
          <span className="flex flex-col items-center justify-center min-w-[36px] py-1 bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 rounded-lg border border-primary-200 dark:border-primary-500/20 shadow-xs leading-none">
            {pad(time.d!)}<span className="text-[10px] font-medium opacity-70 mt-0.5 uppercase tracking-wider">Day</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-600 font-normal mt-1">:</span>
          <span className="flex flex-col items-center justify-center min-w-[36px] py-1 bg-zinc-50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-white/10 shadow-xs leading-none">
            {pad(time.h!)}<span className="text-[10px] font-medium opacity-70 mt-0.5 uppercase tracking-wider">Hr</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-600 font-normal mt-1">:</span>
          <span className="flex flex-col items-center justify-center min-w-[36px] py-1 bg-zinc-50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-white/10 shadow-xs leading-none">
            {pad(time.m!)}<span className="text-[10px] font-medium opacity-70 mt-0.5 uppercase tracking-wider">Min</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-600 font-normal mt-1">:</span>
          <span className="flex flex-col items-center justify-center min-w-[36px] py-1 bg-zinc-50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-white/10 shadow-xs leading-none">
            {pad(time.s!)}<span className="text-[10px] font-medium opacity-70 mt-0.5 uppercase tracking-wider">Sec</span>
          </span>
        </div>
      </div>
    );
  };

  const sortTimeline = (a: any, b: any) => {
    const current = Date.now();
    const dateA = a.exam_date ? new Date(a.exam_date).getTime() : 0;
    const dateB = b.exam_date ? new Date(b.exam_date).getTime() : 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    const aIsPast = dateA < current ? 1 : -1;
    const bIsPast = dateB < current ? 1 : -1;
    return aIsPast - bIsPast || dateA - dateB;
  };

  return (
    <DataView
      type="timeline" initialData={initialData}
      sortFn={sortTimeline}
      renderContent={(data) => (
        <div className="flex flex-col gap-4">
          {/* Mobile View: Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {data.map((item: any, i: number) => {
              const current = Date.now();
              const isPast = item.exam_date && new Date(item.exam_date).getTime() < current;
              const fullName = getUniversityFullName(item.university);
              
              return (
                <div 
                  key={i} 
                  className={`bg-white dark:bg-[#18181b] p-4 sm:p-5 rounded-2xl shadow-xs border ${isPast ? 'border-zinc-100 dark:border-white/5 opacity-70' : 'border-zinc-200 dark:border-white/10'}`}
                >
                  <h3 className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 mb-3">
                    {fullName}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5">
                      <CalendarDays size={16} className="text-primary-500 shrink-0" />
                      <span>{formatDate(item.exam_date) || "তারিখ শীঘ্রই প্রকাশিত হবে"}</span>
                    </div>
                    <div className="pt-1">
                      {renderTime(item.exam_date)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Table */}
          <div className="hidden md:block bg-white dark:bg-[#18181b] rounded-2xl shadow-xs border border-zinc-200 dark:border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    <th className="p-5 whitespace-nowrap">বিশ্ববিদ্যালয়</th>
                    <th className="p-5 whitespace-nowrap">পরীক্ষার তারিখ</th>
                    <th className="p-5 whitespace-nowrap text-right">সময় বাকি (কাউন্টডাউন)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-white/10 text-sm">
                  {data.map((item: any, i: number) => {
                    const current = Date.now();
                    const isPast = item.exam_date && new Date(item.exam_date).getTime() < current;
                    const fullName = getUniversityFullName(item.university);
                    
                    return (
                      <tr
                        key={i}
                        className={`hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors ${isPast ? 'opacity-70' : ''}`}
                      >
                        <td className="p-5 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 font-bold whitespace-nowrap">
                          {fullName}
                        </td>
                        <td className="p-5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <CalendarDays size={16} className="text-primary-500" />
                            <span>{formatDate(item.exam_date) || "শীঘ্রই আসছে"}</span>
                          </div>
                        </td>
                        <td className="p-5 text-sm text-right">
                          {renderTime(item.exam_date)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    />
  );
}
