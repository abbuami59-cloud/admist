"use client";

import { useState } from "react";
import { DataView } from "@/components/DataView";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { getResultSlug, sanitizeResultTitle } from "@/lib/results";
import { getUniversityFullName } from "@/lib/university-names";
import { PortalChoiceModal, PortalChoiceModalData } from "@/components/PortalChoiceModal";

export function ResultPageView({ initialData }: { initialData?: any[] }) {
  const [modalData, setModalData] = useState<PortalChoiceModalData | null>(null);

  const handleOpenChoice = (rawUniversity: string, link: string) => {
    const rawClean = sanitizeResultTitle(rawUniversity);
    const fullName = getUniversityFullName(rawClean);
    const slug = getResultSlug(rawUniversity);
    setModalData({
      isOpen: true,
      type: "result",
      university: fullName,
      internalHref: `/result/${slug}`,
      externalHref: link,
    });
  };

  return (
    <>
      <DataView
        type="result" initialData={initialData}
        renderContent={(data) => (
          <div className="space-y-3">
            {/* Mobile Card Layout (Visible on Mobile) */}
            <div className="grid grid-cols-1 gap-3 sm:hidden">
              {data.map((item: any, i: number) => {
                const isPublished = item.university.includes("✅") || item.university.includes("✔") || Boolean(item.result_link);
                const rawClean = sanitizeResultTitle(item.university);
                const fullName = getUniversityFullName(rawClean);

                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-[#18181b] rounded-2xl p-4 border border-zinc-200 dark:border-white/10 shadow-xs flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <GraduationCap size={18} />
                        </div>
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                          {fullName}
                        </h3>
                      </div>
                      <span
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg shrink-0 flex items-center gap-1 ${
                          isPublished
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300"
                            : "bg-zinc-100 text-zinc-600 dark:bg-white/5 dark:text-zinc-400"
                        }`}
                      >
                        {isPublished && <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />}
                        {isPublished ? "প্রকাশিত" : "প্রক্রিয়াধীন"}
                      </span>
                    </div>

                    <div>
                      {item.result_link ? (
                        <button
                          type="button"
                          onClick={() => handleOpenChoice(item.university, item.result_link)}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <Award size={15} />
                          <span>ফলাফল দেখুন</span>
                        </button>
                      ) : (
                        <div className="w-full py-2 px-3 text-center text-xs font-semibold text-zinc-400 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-100 dark:border-white/5">
                          ফলাফল এখনও প্রকাশিত হয়নি
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Table Layout (Visible on sm and larger) */}
            <div className="hidden sm:block bg-white dark:bg-[#18181b] rounded-2xl shadow-xs border border-zinc-200 dark:border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      <th className="p-4 sm:p-5 whitespace-nowrap">বিশ্ববিদ্যালয়</th>
                      <th className="p-4 sm:p-5 whitespace-nowrap">অবস্থা</th>
                      <th className="p-4 sm:p-5 whitespace-nowrap text-right">অফিশিয়াল লিংক</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-white/10 text-sm">
                    {data.map((item: any, i: number) => {
                      const isPublished = item.university.includes("✅") || item.university.includes("✔") || Boolean(item.result_link);
                      const rawClean = sanitizeResultTitle(item.university);
                      const fullName = getUniversityFullName(rawClean);

                      return (
                        <tr
                          key={i}
                          className="hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <td className="p-4 sm:p-5 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 font-bold">
                            {fullName}
                          </td>
                          <td className="p-4 sm:p-5">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                isPublished
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300"
                                  : "bg-zinc-100 text-zinc-600 dark:bg-white/5 dark:text-zinc-400"
                              }`}
                            >
                              {isPublished && <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />}
                              {isPublished ? "ফলাফল প্রকাশিত হয়েছে" : "প্রক্রিয়াধীন"}
                            </span>
                          </td>
                          <td className="p-4 sm:p-5 text-right">
                            {item.result_link ? (
                              <button
                                type="button"
                                onClick={() => handleOpenChoice(item.university, item.result_link)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
                              >
                                <Award size={15} />
                                <span>ফলাফল দেখুন</span>
                              </button>
                            ) : (
                              <span className="text-xs font-semibold text-zinc-400">
                                শীঘ্রই আসবে
                              </span>
                            )}
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

      {modalData && (
        <PortalChoiceModal
          data={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </>
  );
}
