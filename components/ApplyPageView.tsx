"use client";

import { useEffect, useState } from "react";
import { DataView } from "@/components/DataView";
import { ExternalLink, CreditCard, Calendar, Clock } from "lucide-react";
import { getUniversityFullName } from "@/lib/university-names";

export function ApplyPageView({ initialData }: { initialData?: any[] }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCountdown = (targetDate: string) => {
    if (!now) return "";
    const target = new Date(targetDate).getTime();
    const diff = target - now;
    if (diff <= 0) return "Passed";

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    return `${d}d ${h}h ${m}m ${s}s`;
  };

  const sortApply = (a: any, b: any) => {
    const current = now || 0;
    const getStatus = (item: any) => {
      if (!item.start_date || !item.end_date) return 99;
      const start = new Date(item.start_date).getTime();
      const end = new Date(item.end_date).getTime();
      if (current && current < start) return 2; // upcoming
      if (current && current > end) return 1; // passed
      return 0; // active
    };
    
    const statusA = getStatus(a);
    const statusB = getStatus(b);
    if (statusA !== statusB) return statusA - statusB;
    
    const dateAEnd = new Date(a.end_date || 0).getTime();
    const dateBEnd = new Date(b.end_date || 0).getTime();
    const dateAStart = new Date(a.start_date || 0).getTime();
    const dateBStart = new Date(b.start_date || 0).getTime();
    
    if (statusA === 0) return dateAEnd - dateBEnd;
    if (statusA === 1) return dateBEnd - dateAEnd;
    if (statusA === 2) return dateAStart - dateBStart;
    return 0;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(d);
  };

  return (
    <DataView
      type="apply" initialData={initialData}
      sortFn={sortApply}
      renderContent={(data) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item: any, i: number) => {
            const start = item.start_date ? new Date(item.start_date).getTime() : 0;
            const end = item.end_date ? new Date(item.end_date).getTime() : 0;
            const fullName = getUniversityFullName(item.university);
            const feeInfo = item.fee || item.application_fee || "";
            const applyUrl = item.apply_link || item.application_link || "";
            
            const isUpcoming = Boolean(start > 0 && (now === null || now < start));
            const isPassed = Boolean(end > 0 && now !== null && now > end);
            const isActive = Boolean(!isUpcoming && !isPassed);

            let status = { text: "অনির্দিষ্ট", color: "bg-zinc-100 text-zinc-600 dark:bg-white/5 dark:text-zinc-400" };
            if (isUpcoming) {
              status = { text: "শীঘ্রই শুরু হবে", color: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400" };
            } else if (isPassed) {
              status = { text: "সময় শেষ", color: "bg-zinc-100 text-zinc-500 dark:bg-white/5 dark:text-zinc-500" };
            } else if (isActive && (start > 0 || end > 0)) {
              status = { text: "আবেদন চলছে", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400" };
            }

            return (
              <div 
                key={i}
                className="bg-white dark:bg-[#18181b] rounded-2xl shadow-xs border border-zinc-200 dark:border-white/10 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2 className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
                      {fullName}
                    </h2>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-lg shrink-0 ${status.color}`}>
                      {status.text}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-xs sm:text-sm">
                    <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-zinc-400" />
                        <span>আবেদন শুরু:</span>
                      </span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-200">{formatDate(item.start_date) || "শীঘ্রই"}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-rose-500" />
                        <span>আবেদনের শেষ তারিখ:</span>
                      </span>
                      <span className="font-bold text-rose-600 dark:text-rose-400">{formatDate(item.end_date) || "শীঘ্রই"}</span>
                    </div>

                    {/* Application Fee Box */}
                    {feeInfo && (
                      <div className="bg-amber-50/80 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200/70 dark:border-amber-900/40 mt-2.5">
                        <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs mb-1">
                          <CreditCard size={14} className="shrink-0 text-amber-600 dark:text-amber-400" />
                          <span>আবেদন ফি:</span>
                        </div>
                        <p className="text-xs font-semibold text-amber-950 dark:text-amber-200 leading-relaxed pl-5">
                          {feeInfo}
                        </p>
                      </div>
                    )}

                    {/* Countdown for Upcoming */}
                    {isUpcoming && item.start_date && (
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-100 dark:border-white/5">
                        <span className="text-zinc-500">আবেদন শুরু হতে বাকি:</span>
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{getCountdown(item.start_date)}</span>
                      </div>
                    )}

                    {/* Countdown for Active */}
                    {isActive && item.end_date && (
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-100 dark:border-white/5">
                        <span className="text-zinc-500">বাকি সময়:</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{getCountdown(item.end_date)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-white/5">
                  {isUpcoming ? (
                    <div className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-zinc-200/60 dark:border-white/5 cursor-not-allowed select-none">
                      <Clock size={15} className="text-zinc-400 dark:text-zinc-500" />
                      <span>আবেদন এখনও শুরু হয়নি</span>
                    </div>
                  ) : isPassed ? (
                    <div className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-400 dark:text-zinc-500 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-zinc-200/60 dark:border-white/5 cursor-not-allowed select-none">
                      <Clock size={15} className="text-zinc-400" />
                      <span>আবেদনের সময় শেষ</span>
                    </div>
                  ) : applyUrl ? (
                    <a
                      href={applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                    >
                      <ExternalLink size={15} />
                      <span>অনলাইনে আবেদন করুন</span>
                    </a>
                  ) : (
                    <span className="block text-center py-2.5 text-xs font-semibold text-zinc-400 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-200/40 dark:border-white/5">
                      আবেদন লিংক এখনও প্রকাশিত হয়নি
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    />
  );
}
