"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAutoFetch } from "@/hooks/use-auto-fetch";
import { getUniversityFullName } from "@/lib/university-names";
import { 
  Search, 
  AlertCircle, 
  CalendarClock, 
  FileText, 
  Send, 
  Download, 
  Award,
  BookOpen,
  GraduationCap
} from "lucide-react";

interface DataViewProps<T> {
  type: "timeline" | "info" | "apply" | "admit" | "result";
  renderContent: (data: T[]) => React.ReactNode;
  initialData?: T[];
  sortFn?: (a: T, b: T) => number;
}

const CATEGORIES = [
  { id: "all", label: "সকল" },
  { id: "gst", label: "গুচ্ছ (GST)" },
  { id: "engineering", label: "প্রকৌশল (BUET/CKRUET)" },
  { id: "agri", label: "কৃষি গুচ্ছ" },
  { id: "medical", label: "মেডিকেল ও ডেন্টাল" },
  { id: "du", label: "ঢাকা বিশ্ব." },
  { id: "ju", label: "জাবি" },
  { id: "ru", label: "রাবি" },
  { id: "cu", label: "চবি" },
];

const NAVIGATION_ROW_1 = [
  { id: "timeline", label: "পরীক্ষার সময়", path: "/", icon: CalendarClock },
  { id: "info", label: "তথ্য", path: "/info", icon: FileText },
  { id: "apply", label: "আবেদন", path: "/apply", icon: Send },
  { id: "admit", label: "এডমিট", path: "/admit", icon: Download },
];

const NAVIGATION_ROW_2 = [
  { id: "result", label: "ফলাফল", path: "/result", icon: Award },
  { id: "subject-review", label: "সাবজেক্ট রিভিউ", path: "/subject-review", icon: GraduationCap },
  { id: "guide", label: "ভর্তি গাইড", path: "/blog", icon: BookOpen },
];

export function DataView<T>({ type, renderContent, sortFn, initialData }: DataViewProps<T>) {
  const pathname = usePathname();
  const { 
    data, 
    loading, 
    error, 
    refresh 
  } = useAutoFetch<T>(type, initialData);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  if (loading && data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-16 sm:p-20">
        <div className="relative w-14 h-14 mb-5">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-100 dark:border-white/5"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 font-bold text-base sm:text-lg animate-pulse">
          তথ্য লোড করা হচ্ছে...
        </p>
      </div>
    );
  }

  if (error && data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl border border-rose-200 dark:border-rose-900/40 my-4 text-center">
        <AlertCircle className="w-8 h-8 mb-3 shrink-0" />
        <p className="font-bold mb-2">ডেটা লোড করতে সমস্যা হয়েছে</p>
        <p className="text-xs text-zinc-500 mb-4">{error}</p>
        <button
          onClick={() => refresh()}
          className="px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-bold shadow-md hover:bg-primary-500 active:scale-95 transition-all"
        >
          পুনরায় চেষ্টা করুন
        </button>
      </div>
    );
  }

  let filteredData = data.filter((item: any) => {
    const rawUni = item.university || "";
    const fullUni = getUniversityFullName(rawUni);
    const combinedText = `${rawUni} ${fullUni}`.toLowerCase();
    
    // Search filter
    if (search) {
      const q = search.toLowerCase().trim();
      if (!combinedText.includes(q)) {
        return false;
      }
    }

    // Category filter
    if (activeCategory !== "all") {
      switch (activeCategory) {
        case "gst":
          return /(গুচ্ছ|gst)/i.test(combinedText);
        case "engineering":
          return /(প্রকৌশল|বুয়েট|চুয়েট|রুয়েট|কুয়েট|buet|cuet|ruet|kuet|ckruet|আইইউটি|iut|mist|টেক্সটাইল)/i.test(combinedText);
        case "agri":
          return /(কৃষি|agri)/i.test(combinedText);
        case "medical":
          return /(মেডিকেল|ডেন্টাল|medical|dental|এমবিবিএস|mbbs|afmc|amc|নার্সিং)/i.test(combinedText);
        case "du":
          return /(ঢাকা বিশ্ব|ঢাবি|dhaka university)/i.test(combinedText) && !/(প্রকৌশল|কৃষি|মেডিকেল|সেন্ট্রাল)/i.test(combinedText);
        case "ju":
          return /(জাহাঙ্গীরনগর|জাবি|jahangirnagar)/i.test(combinedText);
        case "ru":
          return /(রাজশাহী বিশ্ব|রাবি|rajshahi university)/i.test(combinedText) && !/(প্রকৌশল|কৃষি)/i.test(combinedText);
        case "cu":
          return /(চট্টগ্রাম বিশ্ব|চবি|chittagong university)/i.test(combinedText) && !/(প্রকৌশল|কৃষি)/i.test(combinedText);
        default:
          return true;
      }
    }

    return true;
  });

  if (sortFn) {
    filteredData = [...filteredData].sort(sortFn);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Primary View Navigation Buttons (Strict 2-Row Layout on all devices) */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {/* Row 1: 4 Buttons (পরীক্ষার সময়, তথ্য, আবেদন, এডমিট) */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {NAVIGATION_ROW_1.map((btn) => {
            const isActive = pathname === btn.path || (btn.path === "/" && pathname === "") || type === btn.id;
            const Icon = btn.icon;
            const isTimeline = btn.id === "timeline";

            return (
              <Link
                key={btn.id}
                href={btn.path}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 py-2 sm:py-2.5 md:py-3 px-1 sm:px-2 md:px-3 rounded-xl sm:rounded-2xl text-[11px] xs:text-xs sm:text-xs md:text-sm font-bold sm:font-extrabold transition-all text-center border shadow-xs overflow-hidden ${
                  isActive
                    ? "bg-primary-600 dark:bg-primary-500 text-white border-primary-600 dark:border-primary-500 shadow-md shadow-primary-600/20 scale-[1.01]"
                    : "bg-white dark:bg-[#18181b] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-white/20"
                }`}
              >
                <Icon size={14} className="shrink-0 sm:w-4 sm:h-4" />
                {isTimeline ? (
                  <span className="overflow-hidden whitespace-nowrap min-w-0 max-w-full block flex-1 text-center">
                    <span className="inline-block animate-btn-scroll sm:animate-none">
                      {btn.label}
                    </span>
                  </span>
                ) : (
                  <span className="truncate">{btn.label}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Row 2: 3 Buttons (ফলাফল, সাবজেক্ট রিভিউ, ভর্তি গাইড) */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {NAVIGATION_ROW_2.map((btn) => {
            const isActive = pathname === btn.path || (btn.path === "/" && pathname === "") || type === btn.id;
            const Icon = btn.icon;

            return (
              <Link
                key={btn.id}
                href={btn.path}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 py-2 sm:py-2.5 md:py-3 px-1.5 sm:px-3 md:px-4 rounded-xl sm:rounded-2xl text-[11px] xs:text-xs sm:text-xs md:text-sm font-bold sm:font-extrabold transition-all text-center border shadow-xs ${
                  isActive
                    ? "bg-primary-600 dark:bg-primary-500 text-white border-primary-600 dark:border-primary-500 shadow-md shadow-primary-600/20 scale-[1.01]"
                    : "bg-white dark:bg-[#18181b] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-white/20"
                }`}
              >
                <Icon size={14} className="shrink-0 sm:w-4 sm:h-4" />
                <span className="truncate">{btn.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Search Bar Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-4 sm:h-5 w-4 sm:w-5 text-zinc-400" />
        </div>
        <input
          type="text"
          placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
          className="block w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-white/10 rounded-2xl leading-5 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500/50 dark:focus:ring-primary-500/20 text-xs sm:text-sm transition-all shadow-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Pills Filter */}
      <div className="flex overflow-x-auto gap-2 pb-1 -mx-2 px-2 sm:mx-0 sm:px-0 hide-scrollbar touch-pan-x snap-x">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`snap-start flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-primary-600 text-white shadow-md shadow-primary-600/20 dark:bg-primary-500"
                : "bg-white dark:bg-[#18181b] text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {filteredData.length === 0 ? (
        <div className="text-center p-8 text-zinc-500 dark:text-zinc-400 bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10">
          কোনো তথ্য পাওয়া যায়নি।
        </div>
      ) : (
        renderContent(filteredData)
      )}
    </div>
  );
}
