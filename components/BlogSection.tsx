"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BLOG_POSTS, 
  BlogPost 
} from "@/lib/blog-data";
import { 
  Search, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft,
  X, 
  Share2, 
  Check, 
  ArrowRight,
  Calculator,
  Compass,
  ArrowUpRight,
  ArrowLeft,
  Home
} from "lucide-react";

type FacultyFilter = 
  | "all" 
  | "engineering" 
  | "medicine" 
  | "agriculture" 
  | "architecture" 
  | "fine_arts" 
  | "iba_business" 
  | "general_gst" 
  | "du_cluster" 
  | "ju_cluster" 
  | "ru_cluster" 
  | "cu_cluster" 
  | "jnu_cluster" 
  | "bup_specialized" 
  | "textile_eng" 
  | "maritime_aviation";

const POSTS_PER_PAGE = 12;

export function BlogSection() {
  const [activeFilter, setActiveFilter] = useState<FacultyFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filterTabs: { id: FacultyFilter; label: string; icon: string }[] = [
    { id: "all", label: `সকল গাইড (${BLOG_POSTS.length}টি)`, icon: "📚" },
    { id: "du_cluster", label: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি)", icon: "🎓" },
    { id: "ju_cluster", label: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (জাবি)", icon: "🌳" },
    { id: "ru_cluster", label: "রাজশাহী বিশ্ববিদ্যালয় (রাবি)", icon: "🏛️" },
    { id: "cu_cluster", label: "চট্টগ্রাম বিশ্ববিদ্যালয় (চবি)", icon: "🌊" },
    { id: "jnu_cluster", label: "জগন্নাথ বিশ্ববিদ্যালয় (জবি)", icon: "🏢" },
    { id: "engineering", label: "প্রকৌশল (BUET, CKRUET, MIST)", icon: "⚙️" },
    { id: "architecture", label: "আর্কিটেকচার ও স্থাপত্য", icon: "📐" },
    { id: "fine_arts", label: "চারুকলা ও নাট্যকলা", icon: "🎨" },
    { id: "agriculture", label: "কৃষি ও ভেটেরিনারি অনুষদ", icon: "🌾" },
    { id: "medicine", label: "মেডিকেল ও ডেন্টাল", icon: "🩺" },
    { id: "bup_specialized", label: "বিইউপি (BUP)", icon: "🎖️" },
    { id: "textile_eng", label: "বুটেক্স (BUTEX)", icon: "🧵" },
    { id: "maritime_aviation", label: "মেরিটাইম ও এভিয়েশন", icon: "⚓" },
    { id: "iba_business", label: "IBA ও ব্যবসায় প্রশাসন", icon: "💼" },
    { id: "general_gst", label: "জিএসটি ও প্রযুক্তি বিশ্ববিদ্যালয়", icon: "🏛️" },
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      let matchesFilter = true;
      if (activeFilter !== "all") {
        if (activeFilter === "du_cluster") {
          matchesFilter = post.faculty === "du_cluster" || post.id.startsWith("du-");
        } else if (activeFilter === "ju_cluster") {
          matchesFilter = post.faculty === "ju_cluster" || post.id.startsWith("ju-");
        } else if (activeFilter === "ru_cluster") {
          matchesFilter = post.faculty === "ru_cluster" || post.id.startsWith("ru-");
        } else if (activeFilter === "cu_cluster") {
          matchesFilter = post.faculty === "cu_cluster" || post.id.startsWith("cu-");
        } else if (activeFilter === "jnu_cluster") {
          matchesFilter = post.faculty === "jnu_cluster" || post.id.startsWith("jnu-");
        } else if (activeFilter === "fine_arts") {
          matchesFilter = post.faculty === "fine_arts" || post.faculty === "architecture";
        } else if (activeFilter === "maritime_aviation") {
          matchesFilter = post.faculty === "maritime_aviation" || post.id.startsWith("maritime-");
        } else {
          matchesFilter = post.faculty === activeFilter;
        }
      }

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesFilter;

      const matchesSearch = 
        post.title.toLowerCase().includes(q) ||
        post.universityName.toLowerCase().includes(q) ||
        post.unitCode?.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.seoKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleFilterChange = (filter: FacultyFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCopyLink = async (e: React.MouseEvent, post: BlogPost) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && navigator.clipboard) {
      const url = `${window.location.origin}/blog/${post.slug}`;
      try {
        await navigator.clipboard.writeText(url);
        setCopiedSlug(post.slug);
        setTimeout(() => setCopiedSlug(null), 2500);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section id="admission-blog" className="pt-0 sm:pt-1">
      {/* Top Breadcrumbs & Back to Home Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Home size={14} />
            <span>হোম</span>
          </Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            ভর্তি ব্লগ ও গাইড
          </span>
        </nav>

        <Link
          href="/"
          id="back-to-home-from-blog"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#18181b] hover:bg-zinc-50 dark:hover:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 group"
        >
          <ArrowLeft size={15} className="text-zinc-500 dark:text-zinc-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
      </div>

      {/* Blog Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            বিশ্ববিদ্যালয় ও অনুষদভিত্তিক ভর্তি গাইড
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl leading-relaxed">
            ঢাকা বিশ্ববিদ্যালয়, বুয়েট, মেডিকেল, জাবি, রাবি, চবি, জগন্নাথ, কৃষি গুচ্ছ, বিইউপি, বুটেক্স ও চারুকলার প্রতিটি ইউনিটের আবেদন যোগ্যতা, আসন বণ্টন ও নম্বর বিন্যাস।
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="বিশ্ববিদ্যালয় বা বিষয় খুঁজুন..."
            className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-2xl text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all shadow-xs"
          />
          {searchQuery && (
            <button 
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md shadow-zinc-900/10 dark:shadow-white/10 scale-[1.02]"
                  : "bg-white dark:bg-[#18181b] text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-white/5"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Count Indicator */}
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-6 px-1">
        <span>
          মোট <strong>{filteredPosts.length}</strong> টি গাইডের মধ্যে <strong>{Math.min(filteredPosts.length, (currentPage - 1) * POSTS_PER_PAGE + 1)}-{Math.min(filteredPosts.length, currentPage * POSTS_PER_PAGE)}</strong> টি প্রদর্শিত হচ্ছে
        </span>
        {totalPages > 1 && (
          <span>পৃষ্ঠা {currentPage} এর {totalPages}</span>
        )}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#18181b] rounded-3xl border border-dashed border-zinc-300 dark:border-white/10 p-6">
          <BookOpen className="w-12 h-12 mx-auto text-zinc-400 mb-3 opacity-60" />
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">কোনো ভর্তি গাইড পাওয়া যায়নি</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">অন্য কোনো কি-ওয়ার্ড দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন।</p>
          <button
            onClick={() => { handleFilterChange("all"); handleSearchChange(""); }}
            className="mt-4 px-4 py-2.5 text-xs font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-500 transition-all shadow-md"
          >
            ফিল্টার রিসেট করুন
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {paginatedPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white dark:bg-[#18181b] border border-zinc-200/90 dark:border-white/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-primary-400/80 dark:hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header Gradient Top Banner */}
              <div className={`h-3 w-full bg-gradient-to-r ${post.coverGradient}`} />

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill & Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[11px] font-extrabold bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/10">
                      {post.facultyName}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* University Name & Unit Code */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-600 dark:text-primary-400 mb-1.5">
                    <GraduationCap size={15} />
                    <span>{post.universityName}</span>
                    {post.unitCode && (
                      <span className="text-[11px] px-2 py-0.5 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono font-bold border border-primary-200/60 dark:border-primary-800">
                        {post.unitCode}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug line-clamp-2 mb-2.5">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>

                  {/* Quick Highlight Matrix */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/70 dark:border-white/5 text-[11px] mb-4">
                    <div>
                      <span className="text-zinc-400 dark:text-zinc-500 block font-medium">মোট আসন:</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 line-clamp-1">{post.quickHighlights.totalSeats}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 dark:text-zinc-500 block font-medium">ভর্তি পরীক্ষা:</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 line-clamp-1">{post.quickHighlights.examFormat}</span>
                    </div>
                  </div>

                  {/* SEO Keyword Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.seoKeywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 font-medium"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Multiple Interactive Actions) */}
                <div className="pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-500 hover:to-teal-500 shadow-md shadow-primary-600/20 transition-all group-hover:scale-[1.01] active:scale-95 min-h-[44px]"
                  >
                    <span>সম্পূর্ণ গাইড</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    onClick={(e) => handleCopyLink(e, post)}
                    title="লিংক কপি করুন"
                    className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all shrink-0 active:scale-95"
                  >
                    {copiedSlug === post.slug ? (
                      <Check size={16} className="text-emerald-500 animate-in zoom-in" />
                    ) : (
                      <Share2 size={16} />
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3.5 py-2 min-h-[44px] rounded-2xl text-xs font-bold bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-white/5 transition-all shadow-xs"
          >
            <ChevronLeft size={16} />
            <span>পূর্ববর্তী</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-10 h-10 rounded-2xl text-xs font-bold transition-all ${
                currentPage === pageNum
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/30 scale-105"
                  : "bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3.5 py-2 min-h-[44px] rounded-2xl text-xs font-bold bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-white/5 transition-all shadow-xs"
          >
            <span>পরবর্তী</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
