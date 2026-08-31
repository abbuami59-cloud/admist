'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { SubjectReviewMeta } from '@/lib/reviews';

interface SubjectReviewListProps {
  posts: SubjectReviewMeta[];
}

export default function SubjectReviewList({ posts }: SubjectReviewListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    const list = posts.filter((post) => {
      const targetText = (post.title + ' ' + post.slug).toLowerCase();
      return searchTerm.trim() === '' || targetText.includes(searchTerm.toLowerCase().trim());
    });

    // Default alphabetical sorting (Bengali & English locale)
    return list.sort((a, b) => a.title.localeCompare(b.title, 'bn', { sensitivity: 'base' }));
  }, [posts, searchTerm]);

  return (
    <div>
      {/* Search Bar */}
      <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-4 sm:p-5 shadow-xs mb-8">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            id="subject-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="বিষয় বা ডিপার্টমেন্টের নাম দিয়ে খুঁজুন (যেমন: CSE, Pharmacy, একাউন্টিং, সিভিল)..."
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
          />
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between mb-5 px-1 text-sm text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5 font-medium">
          <BookOpen size={15} className="text-emerald-600 dark:text-emerald-400" />
          মোট বিষয় রিভিউ: {filteredPosts.length} টি
        </span>
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            সার্চ ক্লিয়ার করুন
          </button>
        )}
      </div>

      {/* Review Grid */}
      {filteredPosts.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10">
          <p className="text-zinc-500 font-medium">কোনো রিভিউ খুঁজে পাওয়া যায়নি। অনুগ্রহ করে অন্য কোনো কি-ওয়ার্ড দিয়ে খুঁজুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/subject-review/${post.slug}`}
              id={`review-card-${post.id}`}
              className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2.5">
                  <BookOpen size={13} />
                  <span>বিষয় পরিচিতি ও সম্ভাবনা</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
              </div>
              
              <div className="mt-5 pt-3.5 border-t border-zinc-100 dark:border-white/5">
                <div className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md group-hover:bg-emerald-700 dark:group-hover:bg-emerald-500 transition-all">
                  <span>পূর্ণাঙ্গ রিভিউ পড়ুন</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

