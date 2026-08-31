import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600;

import { 
  ArrowLeft, 
  Compass, 
  ArrowRight, 
  GraduationCap, 
  ChevronRight, 
  Home, 
  BookOpen 
} from 'lucide-react';
import { 
  getAllReviews, 
  getReviewBySlug, 
  getRelatedReviews, 
  getSubjectCategoryInfo, 
  extractHeadingsFromHtml, 
  calculateReviewStats, 
  generatePlainExcerpt 
} from '@/lib/reviews';
import SubjectReviewInteractive from '@/components/SubjectReviewInteractive';

export async function generateStaticParams() {
  const reviews = getAllReviews();
  return reviews.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getReviewBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'সাবজেক্ট রিভিউ পাওয়া যায়নি | Admission Hub',
      description: 'অনুরোধকৃত সাবজেক্ট রিভিউটি খুঁজে পাওয়া যায়নি।',
    };
  }

  const category = getSubjectCategoryInfo(post.title, post.slug);
  const excerpt = generatePlainExcerpt(post.content, 160);
  const cleanTitle = post.title;
  const canonicalUrl = `https://admission.talukdaracademy.com.bd/subject-review/${post.slug}`;

  return {
    title: `${cleanTitle} | Admission Hub`,
    description: excerpt || `${post.title} সম্পর্কিত বিস্তারিত বিষয় পরিচিতি, উচ্চশিক্ষা, গবেষণার সুযোগ, চাকরির বাজার ও ভর্তি প্রস্তুতি গাইডলাইন।`,
    keywords: [
      post.title,
      'সাবজেক্ট রিভিউ',
      'বিষয় পরিচিতি',
      category.name,
      'বিশ্ববিদ্যালয় ভর্তি ২০২৬',
      'ক্যারিয়ার সম্ভাবনা',
      'উচ্চশিক্ষা ও স্কলারশিপ',
      'ভর্তি প্রস্তুতি',
      'Admission Hub Bangladesh',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${cleanTitle} | Admission Hub`,
      description: excerpt,
      url: canonicalUrl,
      siteName: 'Admission Hub',
      type: 'article',
      locale: 'bn_BD',
      images: [
        {
          url: '/icon.png',
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cleanTitle} | Admission Hub`,
      description: excerpt,
      images: ['/icon.png'],
    },
  };
}

export default async function SubjectReviewDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getReviewBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const category = getSubjectCategoryInfo(post.title, post.slug);
  const headings = extractHeadingsFromHtml(post.content);
  const stats = calculateReviewStats(post.content);
  const relatedReviews = getRelatedReviews(resolvedParams.slug, 6);
  const canonicalUrl = `https://admission.talukdaracademy.com.bd/subject-review/${post.slug}`;
  const excerpt = generatePlainExcerpt(post.content, 200);

  // Structured JSON-LD Data for SEO
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: post.title,
    description: excerpt,
    image: 'https://admission.talukdaracademy.com.bd/icon.png',
    author: {
      '@type': 'Organization',
      name: 'Admission Hub Academic Research Team',
      url: 'https://admission.talukdaracademy.com.bd',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Admission Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://admission.talukdaracademy.com.bd/icon.png',
      },
    },
    inLanguage: 'bn-BD',
    articleSection: category.name,
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'হোম',
        item: 'https://admission.talukdaracademy.com.bd',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'সাবজেক্ট রিভিউ',
        item: 'https://admission.talukdaracademy.com.bd/subject-review',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Inject SEO JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Top Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Home size={14} />
            <span>হোম</span>
          </Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <Link 
            href="/subject-review" 
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            সাবজেক্ট রিভিউ
          </Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Back Links */}
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <Link 
            href="/" 
            id="back-to-home-btn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors bg-white dark:bg-[#18181b] px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-white/10 shadow-xs active:scale-95 group"
          >
            <Home size={15} className="text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            <span>হোমপেজে ফিরে যান</span>
          </Link>
          <Link 
            href="/subject-review" 
            id="back-to-all-reviews-btn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors bg-white dark:bg-[#18181b] px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-white/10 shadow-xs active:scale-95 group"
          >
            <ArrowLeft size={15} className="text-zinc-500 dark:text-zinc-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>সকল সাবজেক্ট রিভিউ</span>
          </Link>
        </div>

        {/* Interactive Subject Review Core Content (TOC, Sticky Actions, Reading Bar, Content) */}
        <SubjectReviewInteractive
          slug={post.slug}
          title={post.title}
          content={post.content}
          category={category}
          headings={headings}
          stats={stats}
        />

        {/* Related Subject Reviews Grid (Internal Linking & Discovery) */}
        {relatedReviews.length > 0 && (
          <section className="mt-12 bg-white dark:bg-[#18181b] rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-white/10 p-6 sm:p-8 md:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-100 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
                  <Compass size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    সম্পর্কিত অন্যান্য সাবজেক্ট রিভিউ
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    একই বা সংশ্লিষ্ট অনুষদের অন্যান্য বিষয়ের ক্যারিয়ার ও উচ্চশিক্ষার তুলনা দেখুন
                  </p>
                </div>
              </div>

              <Link
                href="/subject-review"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors self-start sm:self-auto"
              >
                <span>সবগুলো দেখুন (১৬০+ রিভিউ)</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedReviews.map((related) => {
                const relCategory = getSubjectCategoryInfo(related.title, related.slug);
                return (
                  <Link
                    key={related.id}
                    href={`/subject-review/${related.slug}`}
                    id={`related-subject-${related.id}`}
                    className="group flex flex-col justify-between p-5 bg-zinc-50/70 dark:bg-[#202024]/60 rounded-2xl border border-zinc-200/80 dark:border-white/5 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-white dark:hover:bg-[#202024] hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${relCategory.badgeBg} ${relCategory.badgeText} ${relCategory.borderClass}`}>
                          {relCategory.name}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-white/5">
                      <div className="w-full py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs group-hover:shadow-md group-hover:bg-emerald-700 dark:group-hover:bg-emerald-500 transition-all">
                        <BookOpen size={13} />
                        <span>পূর্ণাঙ্গ রিভিউ পড়ুন</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
