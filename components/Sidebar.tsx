"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarClock, FileText, Send, Download, Award, GraduationCap, Calculator, Crop, ChevronRight, BookOpen, Bookmark } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const tabs = [
  { name: "পরীক্ষার সময় (Timeline)", path: "/", icon: CalendarClock },
  { name: "তথ্য (Info)", path: "/info", icon: FileText },
  { name: "আবেদন (Apply)", path: "/apply", icon: Send },
  { name: "অ্যাডমিট (Admit)", path: "/admit", icon: Download },
  { name: "ফলাফল (Result)", path: "/result", icon: Award },
  { name: "সাবজেক্ট রিভিউ (Review)", path: "/subject-review", icon: Bookmark },
  { name: "ভর্তি ব্লগ ও গাইড (Blog)", path: "/blog", icon: BookOpen },
];

export function Sidebar({ 
  isOpen, 
  onClose,
  isDesktopOpen = true,
  onDesktopClose
}: { 
  isOpen: boolean; 
  onClose: () => void;
  isDesktopOpen?: boolean;
  onDesktopClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-[#09090b] border-r border-zinc-200 dark:border-white/10 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDesktopOpen ? "md:translate-x-0" : "md:-translate-x-full"}`}
      >
        <div className="flex flex-col border-b border-zinc-200 dark:border-white/10 p-6 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
              <div className="p-2 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-indigo-500/15 dark:from-emerald-500/20 dark:via-teal-500/20 dark:to-indigo-500/20 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight">
                Admission<br/>Hub
              </h2>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle 
                className="p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/5 dark:text-zinc-400 dark:hover:text-white rounded-lg transition-colors focus:outline-none"
                iconSize={20}
              />
            </div>
          </div>
          <a 
            href="https://admission.talukdaracademy.com.bd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-3 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 tracking-wider hover:underline block w-fit"
          >
            admission.talukdaracademy.com.bd
          </a>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="mb-4 px-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            মেন্যু (Menu)
          </div>
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.path}
                href={tab.path}
                onClick={() => onClose()}
                className={`flex items-center gap-3 w-full px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-zinc-400 dark:text-zinc-500"} />
                {tab.name}
              </Link>
            );
          })}

          <div className="mt-8 mb-4 px-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            ভর্তি সহায়ক টুলস
          </div>

          <Link href="/tools/resizer" onClick={() => onClose()} className="flex items-center p-3 bg-rose-50/50 dark:bg-rose-950/10 border border-rose-300 dark:border-rose-900/50 rounded-xl hover:border-rose-400 dark:hover:border-rose-800/60 hover:shadow-sm transition-all group">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center shrink-0">
              <Crop size={24} />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-[13px] font-bold text-rose-900 dark:text-rose-50 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors">ছবি ও সাইন রিসাইজার</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">৩০০x৩০০ ও ৩০০x৮০ পিক্সেল</p>
            </div>
            <ChevronRight size={18} className="text-rose-400 group-hover:text-rose-500 transition-colors" />
          </Link>

          <Link href="/tools/calculator" onClick={() => onClose()} className="flex items-center p-3 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-xl hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-sm transition-all group mt-3">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
              <Calculator size={24} />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">কৃষি গুচ্ছ ক্যালকুলেটর</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">যোগ্যতা ও জিপিএ স্কোর যাচাই</p>
            </div>
            <ChevronRight size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
          </Link>

          {/* Copyright Notice directly under tools at the bottom */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10 text-xs text-center text-zinc-400 dark:text-zinc-500 font-medium">
            © {new Date().getFullYear()} Admission Hub<br/>All rights reserved.
          </div>
        </nav>
      </aside>
    </>
  );
}
