"use client";

import { useState } from "react";
import { DataView } from "@/components/DataView";
import { Download, Calendar, GraduationCap } from "lucide-react";
import { getAdmitSlug } from "@/lib/admits";
import { getUniversityFullName } from "@/lib/university-names";
import { PortalChoiceModal, PortalChoiceModalData } from "@/components/PortalChoiceModal";

export function AdmitPageView({ initialData }: { initialData?: any[] }) {
  const [modalData, setModalData] = useState<PortalChoiceModalData | null>(null);

  const handleOpenChoice = (rawUniversity: string, link: string) => {
    const fullName = getUniversityFullName(rawUniversity);
    const slug = getAdmitSlug(rawUniversity);
    setModalData({
      isOpen: true,
      type: "admit",
      university: fullName,
      internalHref: `/admit/${slug}`,
      externalHref: link,
    });
  };

  return (
    <>
      <DataView
        type="admit" initialData={initialData}
        renderContent={(data) => (
          <div className="space-y-3">
            {/* Mobile Card Layout (Visible on Mobile) */}
            <div className="grid grid-cols-1 gap-3 sm:hidden">
              {data.map((item: any, i: number) => {
                const fullName = getUniversityFullName(item.university);
                
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-[#18181b] rounded-2xl p-4 border border-zinc-200 dark:border-white/10 shadow-xs flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                          <GraduationCap size={18} />
                        </div>
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                          {fullName}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-white/5 p-2.5 rounded-xl border border-zinc-100 dark:border-white/5 font-medium">
                      <Calendar size={14} className="text-primary-600 dark:text-primary-400 shrink-0" />
                      <span>সময়সীমা: {item.period || "নির্ধারিত হয়নি"}</span>
                    </div>

                    <div>
                      {item.link ? (
                        <button
                          type="button"
                          onClick={() => handleOpenChoice(item.university, item.link)}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 rounded-xl shadow-md shadow-primary-600/20 active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <Download size={15} />
                          <span>এডমিট কার্ড ডাউনলোড</span>
                        </button>
                      ) : (
                        <div className="w-full py-2 px-3 text-center text-xs font-semibold text-zinc-400 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-100 dark:border-white/5">
                          শীঘ্রই প্রকাশিত হবে
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
                      <th className="p-4 sm:p-5 whitespace-nowrap">ডাউনলোডের সময়সীমা</th>
                      <th className="p-4 sm:p-5 whitespace-nowrap text-right">অফিশিয়াল লিংক</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-white/10 text-sm">
                    {data.map((item: any, i: number) => {
                      const fullName = getUniversityFullName(item.university);
                      
                      return (
                        <tr
                          key={i}
                          className="hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <td className="p-4 sm:p-5 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 font-bold">
                            {fullName}
                          </td>
                          <td className="p-4 sm:p-5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-zinc-400 shrink-0" />
                              <span>{item.period}</span>
                            </div>
                          </td>
                          <td className="p-4 sm:p-5 text-right">
                            {item.link ? (
                              <button
                                type="button"
                                onClick={() => handleOpenChoice(item.university, item.link)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-500 shadow-md shadow-primary-600/20 transition-all active:scale-95 cursor-pointer"
                              >
                                <Download size={15} />
                                <span>এডমিট কার্ড ডাউনলোড</span>
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
