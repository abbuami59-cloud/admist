import type { Metadata } from 'next';
import { getAllReviews } from '@/lib/reviews';
import SubjectReviewList from '@/components/SubjectReviewList';
import Link from 'next/link';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '১৬০+ সাবজেক্ট রিভিউ ও বিষয় পরিচিতি | Subject Reviews - Admission Hub',
  description: 'বাংলাদেশের পাবলিক ও প্রকৌশল বিশ্ববিদ্যালয়ের বিভিন্ন সাবজেক্টের বিস্তারিত রিভিউ, পড়াশোনার পরিবেশ, ক্যারিয়ার সম্ভাবনা, গবেষণার ক্ষেত্র ও অধ্যয়নের সামগ্রিক গাইড।',
  keywords: [
    'সাবজেক্ট রিভিউ',
    'বিষয় পরিচিতি',
    'Subject Review Bangladesh',
    'বিশ্ববিদ্যালয় বিষয় পছন্দ',
    'CSE Subject Review',
    'EEE Subject Review',
    'Medical BDS Subject Review',
    'কার কোন বিষয় পড়া উচিত',
    'ক্যারিয়ার সম্ভাবনা'
  ],
  alternates: {
    canonical: '/subject-review',
  },
  openGraph: {
    title: '১৬০+ সাবজেক্ট রিভিউ ও বিষয় পরিচিতি | Admission Hub',
    description: 'বিশ্ববিদ্যালয়ের বিভিন্ন সাবজেক্টের ক্যারিয়ার সম্ভাবনা ও বিষয় পরিচিতি।',
    url: 'https://admission.talukdaracademy.com.bd/subject-review',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'সাবজেক্ট রিভিউ ও ক্যারিয়ার গাইড | Admission Hub',
    description: '১৬০+ বিশ্ববিদ্যালয়ের বিষয় পরিচিতি ও ক্যারিয়ার বিশ্লেষণ।',
  },
};

export default function SubjectReviewPage() {
  const posts = getAllReviews();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 w-full pt-4 sm:pt-6 md:pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
            সাবজেক্ট রিভিউ
          </span>
        </nav>

        <Link
          href="/"
          id="back-to-home-from-subject-review"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#18181b] hover:bg-zinc-50 dark:hover:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 group"
        >
          <ArrowLeft size={15} className="text-zinc-500 dark:text-zinc-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">
          সাবজেক্ট রিভিউ (Subject Reviews)
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
          বিশ্ববিদ্যালয়ের বিভিন্ন বিভাগ ও বিষয় সম্পর্কে বিস্তারিত জানুন, ক্যারিয়ারের পরিধি বিশ্লেষণ করুন এবং আপনার জন্য সঠিক বিভাগটি বেছে নিন।
        </p>
      </div>
      
      <SubjectReviewList posts={posts} />
    </div>
  );
}
