'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Share2, 
  Copy, 
  Check, 
  Printer, 
  Bookmark, 
  BookmarkCheck,
  Clock, 
  FileText, 
  ListTree, 
  ArrowUp, 
  CheckCircle2, 
  MessageCircle, 
  Compass, 
  ChevronRight, 
  GraduationCap, 
  Layers, 
  ThumbsUp, 
  HelpCircle,
  X,
  Type
} from 'lucide-react';
import { SubjectCategoryInfo, TableOfContentItem } from '@/lib/reviews';
import { AdSenseUnit } from '@/components/AdSenseUnit';

interface SubjectReviewInteractiveProps {
  slug: string;
  title: string;
  content: string;
  category: SubjectCategoryInfo;
  headings: TableOfContentItem[];
  stats: {
    words: number;
    readingMinutes: number;
    wordsBn: string;
    readingMinutesBn: string;
  };
}

export default function SubjectReviewInteractive({
  slug,
  title,
  content,
  category,
  headings,
  stats,
}: SubjectReviewInteractiveProps) {
  // State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>(headings[0]?.id || '');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = localStorage.getItem('admission_saved_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.includes(slug);
      }
    } catch {}
    return false;
  });
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'need-more' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll tracking for progress, TOC active item, and Back to Top
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      setShowBackToTop(window.scrollY > 400);

      // TOC active heading detection
      if (headings.length > 0) {
        const scrollPos = window.scrollY + 140;
        for (let i = headings.length - 1; i >= 0; i--) {
          const el = document.getElementById(headings[i].id);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(headings[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/subject-review/${slug}`;
    }
    return `https://admission.talukdaracademy.com.bd/subject-review/${slug}`;
  };

  const handleCopyLink = async () => {
    const url = getFullUrl();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {}
    }
  };

  const handleNativeShare = async () => {
    const url = getFullUrl();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Admission Hub`,
          text: `${title} - ক্যারিয়ার সম্ভাবনা, উচ্চশিক্ষা ও ভর্তি নির্দেশিকা`,
          url: url,
        });
      } catch {}
    } else {
      setShareModalOpen(true);
    }
  };

  const handleBookmarkToggle = () => {
    try {
      const saved = localStorage.getItem('admission_saved_reviews');
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(list)) list = [];

      if (bookmarked) {
        list = list.filter((item) => item !== slug);
        setBookmarked(false);
      } else {
        if (!list.includes(slug)) list.push(slug);
        setBookmarked(true);
      }
      localStorage.setItem('admission_saved_reviews', JSON.stringify(list));
    } catch {}
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleFeedback = (type: 'helpful' | 'need-more') => {
    setFeedbackGiven(type);
    try {
      localStorage.setItem(`review_feedback_${slug}`, type);
    } catch {}
  };

  // Font size class mapping
  const contentFontSizeClass = useMemo(() => {
    switch (fontSize) {
      case 'sm':
        return 'text-[15px] sm:text-[16px] leading-relaxed sm:leading-loose';
      case 'lg':
        return 'text-[18px] sm:text-[20px] leading-relaxed sm:leading-loose';
      default:
        return 'text-[16px] sm:text-[17px] leading-relaxed sm:leading-loose';
    }
  }, [fontSize]);

  return (
    <>
      {/* Top Reading Progress Bar (Fixed) */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 z-50 transition-all duration-150 ease-out shadow-xs"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Main Grid: Left TOC (Desktop) + Main Article + Right Quick Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar: Table of Contents (Desktop Sticky) */}
        {headings.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
            <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200/80 dark:border-white/10 p-4 sm:p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-100 dark:border-white/10 text-zinc-900 dark:text-zinc-100">
                <ListTree size={16} className="text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-bold tracking-tight">সূচিপত্র (Contents)</h3>
              </div>

              <nav className="flex flex-col space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
                {headings.map((heading) => {
                  const isActive = activeSection === heading.id;
                  return (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`text-left py-2 px-2.5 rounded-xl transition-all duration-150 flex items-start gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border-l-2 border-emerald-500 translate-x-1'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-white/5 font-medium'
                      }`}
                    >
                      <span className="mt-0.5 shrink-0 text-emerald-500 text-[10px]">●</span>
                      <span className="line-clamp-2">{heading.text}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-zinc-50 dark:bg-[#18181b]/60 rounded-2xl border border-zinc-200/80 dark:border-white/10 p-4 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                রিডিং টুলস
              </span>
              <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <span>ফন্ট সাইজ:</span>
                <div className="flex items-center gap-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1">
                  <button 
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${fontSize === 'sm' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                  >
                    A-
                  </button>
                  <button 
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${fontSize === 'base' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                  >
                    A
                  </button>
                  <button 
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${fontSize === 'lg' ? 'bg-emerald-600 text-white font-bold' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                  >
                    A+
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200/60 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={handleBookmarkToggle}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    bookmarked
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50'
                  }`}
                >
                  {bookmarked ? <BookmarkCheck size={14} className="text-emerald-600" /> : <Bookmark size={14} />}
                  <span>{bookmarked ? 'বুকমার্কে সংরক্ষিত' : 'বুকমার্কে রাখুন'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 transition-all cursor-pointer"
                >
                  <Printer size={14} />
                  <span>প্রিন্ট / PDF ভিউ</span>
                </button>
              </div>
            </div>
          </aside>
        )}

        {/* Central Article Container */}
        <div className={`col-span-1 ${headings.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
          <article className="bg-white dark:bg-[#18181b] rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 p-5 sm:p-8 md:p-10 shadow-xs mb-8">
            
            {/* Header / Hero Section */}
            <header className="border-b border-zinc-100 dark:border-white/10 pb-6 mb-8">
              {/* Category Pill & Live Indicators */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${category.badgeBg} ${category.badgeText} ${category.borderClass}`}>
                  <GraduationCap size={14} />
                  {category.name}
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 text-xs font-medium border border-zinc-200/60 dark:border-white/5">
                  <Clock size={12} className="text-emerald-500" />
                  {stats.readingMinutesBn} মিনিট পড়ার সময়
                </span>

                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 text-xs font-medium border border-zinc-200/60 dark:border-white/5">
                  <FileText size={12} className="text-zinc-400" />
                  {stats.wordsBn} শব্দ
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight mb-6">
                {title}
              </h1>

              {/* Action Toolbar (Header Top) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  {/* Share button */}
                  <button
                    onClick={handleNativeShare}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all active:scale-95 cursor-pointer"
                  >
                    <Share2 size={13} />
                    <span>শেয়ার</span>
                  </button>

                  {/* Copy Link button */}
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">লিংক কপি হয়েছে!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>লিংক কপি</span>
                      </>
                    )}
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={handleBookmarkToggle}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all active:scale-95 cursor-pointer ${
                      bookmarked
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                        : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {bookmarked ? <BookmarkCheck size={13} className="text-emerald-600" /> : <Bookmark size={13} />}
                    <span>{bookmarked ? 'সংরক্ষিত' : 'সেভ করুন'}</span>
                  </button>
                </div>

                {/* Font Size Selector (Mobile/Tablet visible) */}
                <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 text-xs">
                  <span className="text-[11px] text-zinc-400 px-1 font-medium flex items-center gap-1">
                    <Type size={12} />
                  </span>
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-0.5 rounded transition-all ${fontSize === 'sm' ? 'bg-white dark:bg-zinc-800 text-emerald-600 font-bold shadow-xs' : 'text-zinc-500 hover:text-zinc-800'}`}
                  >
                    ছোট
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-0.5 rounded transition-all ${fontSize === 'base' ? 'bg-white dark:bg-zinc-800 text-emerald-600 font-bold shadow-xs' : 'text-zinc-500 hover:text-zinc-800'}`}
                  >
                    স্বাভাবিক
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-0.5 rounded transition-all ${fontSize === 'lg' ? 'bg-white dark:bg-zinc-800 text-emerald-600 font-bold shadow-xs' : 'text-zinc-500 hover:text-zinc-800'}`}
                  >
                    বড়
                  </button>
                </div>
              </div>
            </header>

            {/* Quick Highlights / "এক নজরে যা জানবেন" (Key Overview Callout Box) */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-zinc-50/60 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-[#1f1f23] border border-emerald-200/70 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 mb-3">
                <Compass size={16} className="text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                  এক নজরে এই বিষয়ের মূল দিকসমূহ:
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>কোর্স স্ট্রাকচার, সেমিস্টার সিস্টেম ও প্রাতিষ্ঠানিক পাঠদান</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>ল্যাবরেটরি ও প্র্যাকটিক্যাল রিসার্চ সুবিধা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>বিদেশে উচ্চশিক্ষা, স্কলারশিপ ও আন্তর্জাতিক ক্যারিয়ার</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>দেশীয় সরকারি-বেসরকারি চাকরি ও আইটি/করপোরেট বাজার</span>
                </li>
              </ul>
            </div>

            {/* Mobile Table of Contents Accordion */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-8 p-4 bg-zinc-50 dark:bg-zinc-900/80 rounded-2xl border border-zinc-200 dark:border-white/10">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="w-full flex items-center justify-between text-left text-sm font-bold text-zinc-900 dark:text-zinc-100"
                >
                  <div className="flex items-center gap-2">
                    <ListTree size={16} className="text-emerald-600 dark:text-emerald-400" />
                    <span>সূচিপত্র ও দ্রুত সেকশন জাম্প ({headings.length} টি বিভাগ)</span>
                  </div>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform duration-200 ${mobileTocOpen ? 'rotate-90 text-emerald-600' : 'text-zinc-400'}`} 
                  />
                </button>

                {mobileTocOpen && (
                  <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col space-y-1.5 animate-in fade-in duration-200">
                    {headings.map((heading) => (
                      <button
                        key={heading.id}
                        onClick={() => scrollToHeading(heading.id)}
                        className="text-left py-1.5 px-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex items-center gap-2"
                      >
                        <span className="text-emerald-500 text-[10px]">●</span>
                        <span className="truncate">{heading.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Top In-Article Ad Slot */}
            <AdSenseUnit className="my-6" />

            {/* Rendered HTML Content with Dynamic Font Resizing */}
            <div 
              className={`prose prose-zinc dark:prose-invert prose-emerald max-w-none 
                prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
                prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2.5 prose-h2:border-b prose-h2:border-zinc-200 dark:prose-h2:border-white/10
                prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:my-3.5
                prose-li:text-zinc-700 dark:prose-li:text-zinc-300
                prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-bold
                prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                ${contentFontSizeClass}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Bottom In-Article Ad Slot */}
            <AdSenseUnit className="my-8" />

            {/* Advisory / Disclaimer Callout Box */}
            <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <div className="flex items-center gap-2 font-bold mb-1.5 text-amber-800 dark:text-amber-300">
                <HelpCircle size={16} />
                <span>ভর্তিচ্ছু শিক্ষার্থীদের জন্য বিশেষ পরামর্শ:</span>
              </div>
              <p className="leading-relaxed">
                ভর্তি পরীক্ষার পর সাবজেক্ট চয়েস দেওয়ার সময় শুধুমাত্র ট্রেন্ড বা সামাজিক ধারণার ওপর নির্ভর না করে আপনার ব্যক্তিগত মেধা, গণিত/বিজ্ঞানের ভিত্তি এবং দীর্ঘমেয়াদি পেশাগত আগ্রহ বিবেচনা করে সিদ্ধান্ত নিন। যেকোনো বিষয়ে গভীর দক্ষতা ও প্যাশন থাকলে শীর্ষ সফলতা অর্জন সম্ভব।
              </p>
            </div>

            {/* Feedback / Helpful Interaction Box */}
            <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  এই সাবজেক্ট রিভিউটি কি আপনার জন্য সহায়ক ছিল?
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  আপনার মতামত পরবর্তী ব্যাচের শিক্ষার্থীদের আরও সমৃদ্ধ তথ্য দিতে সাহায্য করবে
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {feedbackGiven ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
                    <Check size={14} />
                    <span>ধন্যবাদ আপনার মূল্যবান মতামতের জন্য!</span>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleFeedback('helpful')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-zinc-200 dark:border-zinc-700 transition-all active:scale-95 cursor-pointer"
                    >
                      <ThumbsUp size={13} />
                      <span>হ্যাঁ, তথ্যবহুল</span>
                    </button>
                    <button
                      onClick={() => handleFeedback('need-more')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>💡 আরও তথ্য চাই</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Floating Bottom Quick Action Bar on Mobile */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-md rounded-2xl border border-zinc-200/90 dark:border-white/10 shadow-lg px-4 py-2.5 flex items-center justify-between gap-2 max-w-md mx-auto">
          {headings.length > 0 && (
            <button
              onClick={() => setMobileTocOpen(true)}
              className="flex flex-col items-center justify-center text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 active:scale-95 transition-all"
            >
              <ListTree size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>সূচিপত্র</span>
            </button>
          )}

          <button
            onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'sm')}
            className="flex flex-col items-center justify-center text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 active:scale-95 transition-all"
          >
            <Type size={16} className="text-zinc-600 dark:text-zinc-300" />
            <span>ফন্ট {fontSize.toUpperCase()}</span>
          </button>

          <button
            onClick={handleBookmarkToggle}
            className="flex flex-col items-center justify-center text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 active:scale-95 transition-all"
          >
            {bookmarked ? (
              <BookmarkCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Bookmark size={16} className="text-zinc-600 dark:text-zinc-300" />
            )}
            <span>{bookmarked ? 'সংরক্ষিত' : 'সেভ'}</span>
          </button>

          <button
            onClick={handleNativeShare}
            className="flex flex-col items-center justify-center text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 active:scale-95 transition-all"
          >
            <Share2 size={16} className="text-emerald-600 dark:text-emerald-400" />
            <span>শেয়ার</span>
          </button>

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="flex flex-col items-center justify-center text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 active:scale-95 transition-all"
            >
              <ArrowUp size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>উপরে</span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Back to Top Button for Desktop */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
          className="hidden lg:flex fixed bottom-8 right-8 z-40 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all active:scale-90 items-center justify-center group"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Share Modal Dialog (Fallback if Web Share API not available) */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white dark:bg-[#1f1f23] rounded-3xl border border-zinc-200 dark:border-white/10 max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-white/10">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                <Share2 size={18} className="text-emerald-600" />
                <span>রিভিউ শেয়ার করুন</span>
              </div>
              <button 
                onClick={() => setShareModalOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`*${title}*\n${getFullUrl()}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getFullUrl())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors"
              >
                <Share2 size={16} />
                <span>Facebook</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleCopyLink}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? 'লিংক কপি হয়েছে!' : 'লিংক কপি করুন'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
