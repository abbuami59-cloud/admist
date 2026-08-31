"use client";

import Link from "next/link";
import { DataView } from "@/components/DataView";
import { FileText } from "lucide-react";
import { getCircularSlug } from "@/lib/circulars";
import { getUniversityFullName } from "@/lib/university-names";

export function InfoPageView({ initialData }: { initialData?: any[] }) {
  return (
    <DataView
      type="info" initialData={initialData}
      renderContent={(data) => (
        <div className="grid grid-cols-1 gap-4">
          {data.map((item: any, i: number) => {
            const fullName = getUniversityFullName(item.university);
            const slug = getCircularSlug(item.university);
            const hasCircular = Boolean(item.circular_link);

            return (
              <div 
                key={i}
                className="bg-white dark:bg-[#18181b] rounded-2xl shadow-xs border border-zinc-200 dark:border-white/10 p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {fullName}
                  </h2>
                  {hasCircular ? (
                    <Link
                      href={`/info/${slug}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-500 shadow-md shadow-primary-600/20 active:scale-95 transition-all w-full sm:w-auto"
                    >
                      <FileText size={16} />
                      <span>অফিসিয়াল সার্কুলার PDF</span>
                    </Link>
                  ) : (
                    <span className="px-4 py-2 text-xs font-semibold text-zinc-400 bg-zinc-50 dark:bg-white/5 rounded-xl text-center border border-zinc-100 dark:border-white/5">
                      সার্কুলার প্রক্রিয়াধীন
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">মানবণ্টন ও বিষয়সমূহ</h3>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap bg-zinc-50 dark:bg-white/5 p-3.5 rounded-xl font-mono leading-relaxed border border-zinc-100 dark:border-white/5">
                        {item.mark_distribution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">পরীক্ষা কেন্দ্র ও বিন্যাস</h3>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 font-medium">{item.center}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
                        <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">সেকেন্ড টাইম</h3>
                        <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-50">{item.second_time}</p>
                      </div>
                      <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
                        <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">নেগেটিভ মার্ক</h3>
                        <p className="text-xs sm:text-sm font-extrabold text-rose-600 dark:text-rose-400">{item.negative_mark}</p>
                      </div>
                      <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
                        <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">পাস মার্ক</h3>
                        <p className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{item.pass_mark || "৪০%"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    />
  );
}
