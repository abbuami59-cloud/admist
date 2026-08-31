"use client";

import { useState, useEffect } from "react";
import { ChevronRight, BookOpen } from "lucide-react";

interface TocSection {
  id: string;
  title: string;
  icon?: string;
}

const SECTIONS: TocSection[] = [
  { id: "section-overview", title: "১. বিশ্ববিদ্যালয় পরিচিতি ও ইতিহাস", icon: "🏛️" },
  { id: "section-faculties", title: "২. অনুষদ, বিভাগ ও আসন বণ্টন", icon: "📊" },
  { id: "section-eligibility", title: "৩. আবেদন যোগ্যতা ও ২য় বার সুযোগ", icon: "🎓" },
  { id: "gpa-calculator-section", title: "★ জিপিএ ক্যালকুলেটর ও স্কোর", icon: "🧮" },
  { id: "section-steps", title: "৪. আবেদন প্রক্রিয়া ও ফি পরিশোধ", icon: "📝" },
  { id: "section-pattern", title: "৫. পরীক্ষার মানবণ্টন ও সিলেবাস", icon: "📑" },
  { id: "official-links-section", title: "৬. অফিসিয়াল আবেদন লিংক ও পোর্টাল", icon: "🌐" },
  { id: "section-prep", title: "৭. কাট-অফ মার্কস ও প্রস্তুতি পরামর্শ", icon: "💡" },
  { id: "faq-section", title: "৮. প্রায়শই জিজ্ঞাসিত প্রশ্নোত্তর (FAQ)", icon: "❓" },
];

export function BlogTableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("section-overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-zinc-200/80 dark:border-white/10">
        <BookOpen size={16} className="text-primary-600 dark:text-primary-400" />
        <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
          গাইডলাইন সূচিপত্র (Quick Index)
        </h4>
      </div>

      <nav className="flex flex-col gap-1">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`text-left px-3 py-2 rounded-xl text-xs sm:text-xs font-semibold flex items-center justify-between transition-all duration-150 ${
                isActive
                  ? "bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 font-bold translate-x-1"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span>{sec.icon}</span>
                <span className="truncate">{sec.title}</span>
              </div>
              <ChevronRight size={13} className={`shrink-0 opacity-50 ${isActive ? "text-primary-600 opacity-100" : ""}`} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
