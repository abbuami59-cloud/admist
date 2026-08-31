import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

import { 
  ALL_ADMISSION_BLOGS, 
  getBlogPostBySlug, 
  BlogPost 
} from "@/lib/admission-blogs";
import { BlogPostInteractiveTools } from "@/components/BlogPostInteractiveTools";
import { BlogOfficialLinksCard } from "@/components/BlogOfficialLinksCard";
import { BlogGpaCalculator } from "@/components/BlogGpaCalculator";
import { BlogMarksCalculator } from "@/components/BlogMarksCalculator";
import { BlogInteractiveFaq } from "@/components/BlogInteractiveFaq";
import { BlogInteractiveSteps } from "@/components/BlogInteractiveSteps";
import { BlogTableOfContents } from "@/components/BlogTableOfContents";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  ArrowLeft, 
  ListOrdered, 
  FileCheck2, 
  BarChart3, 
  Check,
  School,
  ArrowUpRight,
  Calculator,
  CalendarClock,
  Home
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_ADMISSION_BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "ভর্তি গাইড পাওয়া যায়নি | Admission Hub",
      description: "অনুরোধকৃত বিশ্ববিদ্যালয় ভর্তি গাইডটি খুঁজে পাওয়া যায়নি।"
    };
  }

  const title = `${post.title} | Admission Hub`;
  const description = post.summary || post.subtitle;

  return {
    title,
    description,
    keywords: [
      ...post.seoKeywords,
      post.universityName,
      post.unitCode,
      "বিশ্ববিদ্যালয় ভর্তি পরীক্ষা 2026",
      "Admission circular 2025-2026",
      "Bangladesh university admission guidelines",
      "Admission Hub blog"
    ],
    openGraph: {
      title: post.title,
      description: post.subtitle || post.summary,
      type: "article",
      publishedTime: "2026-08-01T00:00:00.000Z",
      tags: post.seoKeywords,
      siteName: "Admission Hub",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle || post.summary,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = ALL_ADMISSION_BLOGS.findIndex((p) => p.slug === post.slug || p.id === post.id);
  const prevPost = currentIndex > 0 ? ALL_ADMISSION_BLOGS[currentIndex - 1] : null;
  const nextPost = currentIndex < ALL_ADMISSION_BLOGS.length - 1 ? ALL_ADMISSION_BLOGS[currentIndex + 1] : null;

  // Find related posts (same faculty or nearby posts)
  const relatedPosts = ALL_ADMISSION_BLOGS
    .filter((p) => p.slug !== post.slug && (p.faculty === post.faculty || p.universityName.includes(post.universityName.slice(0, 4))))
    .slice(0, 3);

  // Fallback related posts if fewer than 3
  const finalRelated = relatedPosts.length === 3 
    ? relatedPosts 
    : [
        ...relatedPosts,
        ...ALL_ADMISSION_BLOGS.filter(p => p.slug !== post.slug && !relatedPosts.some(r => r.slug === p.slug)).slice(0, 3 - relatedPosts.length)
      ];

  // Schema.org structured data for SEO (EducationalArticle & BreadcrumbList & FAQ)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "হোম",
            "item": "https://admission.talukdaracademy.com.bd"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ভর্তি ব্লগ",
            "item": "https://admission.talukdaracademy.com.bd/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://admission.talukdaracademy.com.bd/blog/${post.slug}`
          }
        ]
      },
      {
        "@type": "EducationalArticle",
        "headline": post.title,
        "description": post.subtitle || post.summary,
        "articleBody": post.summary,
        "educationalLevel": "Higher Education / University Admission",
        "author": {
          "@type": "Organization",
          "name": "Admission Hub Academic Research Team",
          "url": "https://admission.talukdaracademy.com.bd"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Admission Hub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://admission.talukdaracademy.com.bd/icon.png"
          }
        },
        "datePublished": "2026-08-01T08:00:00+06:00",
        "dateModified": "2026-08-15T08:00:00+06:00",
        "mainEntityOfPage": `https://admission.talukdaracademy.com.bd/blog/${post.slug}`,
        "keywords": post.seoKeywords.join(", ")
      },
      {
        "@type": "FAQPage",
        "mainEntity": post.content.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  const isSecondTime = post.content.admissionRequirements.secondTimeAllowed.includes("হ্যাঁ") || 
                       post.content.admissionRequirements.secondTimeAllowed.includes("সুযোগ আছে");

  return (
    <div className="min-h-screen py-4 sm:py-8 max-w-6xl mx-auto px-3 sm:px-6">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Back Navigation */}
      <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            হোম
          </Link>
          <ChevronRight size={14} className="text-zinc-400 shrink-0" />
          <Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            ভর্তি ব্লগ
          </Link>
          <ChevronRight size={14} className="text-zinc-400 shrink-0" />
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate max-w-[180px] sm:max-w-xs">
            {post.universityName} {post.unitCode}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 font-semibold text-xs transition-colors shadow-xs group"
          >
            <Home size={14} className="text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            <span>হোমপেজে ফিরে যান</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 font-semibold text-xs transition-colors shadow-xs group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>সকল ভর্তি গাইড</span>
          </Link>
        </div>
      </nav>

      {/* Main Hero Header Card */}
      <header className={`rounded-3xl bg-gradient-to-br ${post.coverGradient} text-white shadow-2xl overflow-hidden mb-6 sm:mb-8 border border-white/10 relative`}>
        {/* Decorative Glow Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/15 rounded-full blur-2xl pointer-events-none" />

        <div className="p-5 sm:p-8 md:p-10 relative z-10">
          {/* Top Badges & Meta Info */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-xs">
              {post.facultyName}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              <Clock size={13} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              <Calendar size={13} />
              <span>{post.publishDate}</span>
            </div>
          </div>

          {/* University Name & Unit Code */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90 mb-2">
            <GraduationCap size={18} className="text-white" />
            <span>{post.universityName}</span>
            {post.unitCode && (
              <span className="px-2 py-0.5 rounded-lg bg-white/20 text-white font-mono text-xs border border-white/25">
                {post.unitCode}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black leading-tight text-white tracking-tight mb-3">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-4xl mb-6">
            {post.subtitle}
          </p>

          {/* Reading Toolbar & Interactive Share / Font Controls */}
          <BlogPostInteractiveTools
            slug={post.slug}
            title={post.title}
            universityName={post.universityName}
          />
        </div>
      </header>

      {/* Prominent Homepage Internal Link Callout Banner */}
      <section aria-label="লাইভ ভর্তি ক্যালেন্ডার ও সময়সূচী" className="mb-6 p-4 sm:p-5 rounded-3xl bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <CalendarClock size={20} />
          </div>
          <div>
            <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
              {post.universityName} সহ সকল বিশ্ববিদ্যালয়ের লাইভ ভর্তি ক্যালেন্ডার ২০২৫-২০২৬
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-0.5 leading-relaxed">
              ভর্তি পরীক্ষার চূড়ান্ত তারিখ, আবেদন ফি, প্রবেশপত্র ডাউনলোড এবং লাইভ কাউন্টডাউন দেখতে আমাদের মূল হোমপেজ দেখুন।
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="shrink-0 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-2 active:scale-95"
        >
          <span>মূল ভর্তি ক্যালেন্ডার</span>
          <ArrowUpRight size={14} />
        </Link>
      </section>

      {/* Quick Highlights Summary Grid */}
      <section aria-label="এক নজরে গুরুত্বপূর্ণ তথ্য" className="bg-gradient-to-r from-primary-50/80 via-white to-primary-50/50 dark:from-[#18181b] dark:via-[#1c1c20] dark:to-[#18181b] border border-primary-200/80 dark:border-white/10 rounded-3xl p-5 sm:p-7 mb-8 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="text-primary-900 dark:text-primary-300 font-extrabold text-sm sm:text-lg">
            <h2>এক নজরে ভর্তি পরীক্ষার হাইলাইটস (Quick Highlights)</h2>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 hidden sm:inline-block">
            সেশন ২০২৫-২০২৬
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="p-3.5 sm:p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary-100/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] font-semibold mb-1">আবেদনের সময়কাল:</span>
            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm leading-tight block">{post.quickHighlights.duration}</span>
          </div>
          <div className="p-3.5 sm:p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary-100/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] font-semibold mb-1">মোট আসন সংখ্যা:</span>
            <span className="font-extrabold text-primary-600 dark:text-primary-400 text-xs sm:text-sm leading-tight block">{post.quickHighlights.totalSeats}</span>
          </div>
          <div className="p-3.5 sm:p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary-100/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] font-semibold mb-1">ভর্তির ন্যূনতম যোগ্যতা:</span>
            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm leading-tight block">{post.quickHighlights.eligibility}</span>
          </div>
          <div className="p-3.5 sm:p-4 bg-white dark:bg-white/5 rounded-2xl border border-primary-100/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] font-semibold mb-1">ফলাফল ও মেধা তালিকা:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm leading-tight block">{post.quickHighlights.resultStatus}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar on Desktop */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Sticky Navigation on Large Screens */}
        <aside aria-label="গাইডলাইন সূচিপত্র" className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
          <BlogTableOfContents />

          {/* Quick Action Box with Internal Links */}
          <div className="p-5 bg-gradient-to-br from-primary-600 to-teal-700 text-white rounded-2xl shadow-lg">
            <div className="mb-2">
              <h4 className="font-bold text-sm">ভর্তি ক্যালেন্ডার ও টুলস</h4>
            </div>
            <p className="text-xs text-white/90 leading-relaxed mb-4">
              সকল বিশ্ববিদ্যালয়ের পরীক্ষার রুটিন ও ক্যালকুলেটর দেখতে নিচের লিংকগুলো ব্যবহার করুন।
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-primary-900 hover:bg-white/90 shadow-xs transition-all"
              >
                <CalendarClock size={14} />
                <span>মূল ভর্তি ক্যালেন্ডার (Home)</span>
              </Link>
              <Link
                href="/tools/calculator"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/25 transition-all"
              >
                <Calculator size={14} />
                <span>জিপিএ ক্যালকুলেটর</span>
              </Link>
              <Link
                href="/tools/resizer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/25 transition-all"
              >
                <FileCheck2 size={14} />
                <span>ছবি ও স্বাক্ষর রিসাইজার</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Main In-Depth Guide Content */}
        <main id="blog-content-container" className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Section 1: Overview */}
          <section id="section-overview" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2.5">
              <BookOpen size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>১. ভূমিকা ও পরিচিতি (Overview)</span>
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              {post.content.overview}
            </p>
            <div className="p-3.5 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/70 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              📌 <strong>বিশেষ দ্রষ্টব্য:</strong> ২০২৫-২০২৬ শিক্ষাবর্ষের সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষা ও সার্কুলারের সর্বশেষ আপডেট পেতে আমাদের <Link href="/" className="text-primary-600 dark:text-primary-400 font-bold underline hover:text-primary-700">বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও লাইভ সময়সূচী</Link> পেজটি ভিজিট করুন।
            </div>
          </section>

          {/* Section 2: Faculties, Departments & Seats */}
          <section id="section-faculties" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <Layers size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>২. অনুষদ, বিভাগ ও আসন বিন্যাস (Faculties & Seats)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {post.content.facultiesAndUnits.map((u, idx) => (
                <div key={idx} className="p-4 sm:p-5 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:border-primary-300 dark:hover:border-primary-700/50 transition-all">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-1.5">
                      {u.unit}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                      {u.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-zinc-200/60 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">নির্ধারিত আসন:</span>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                      {u.seats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Admission Requirements & Criteria + Interactive Calculator */}
          <section id="section-eligibility" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>৩. ভর্তির আবশ্যিক যোগ্যতা ও শর্তাবলী (Eligibility Criteria)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-6">
              <div className="p-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
                <span className="text-zinc-500 dark:text-zinc-400 block font-semibold mb-1">এসএসসি ও এইচএসসি শর্তাবলী:</span>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">{post.content.admissionRequirements.ssc_hsc}</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
                <span className="text-zinc-500 dark:text-zinc-400 block font-semibold mb-1">বিষয়ভিত্তিক পূর্বশর্ত:</span>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">{post.content.admissionRequirements.subjectRequirements}</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
                <span className="text-zinc-500 dark:text-zinc-400 block font-semibold mb-1">সেকেন্ড টাইম সুযোগ (2nd Time):</span>
                <p className="text-zinc-800 dark:text-zinc-200 font-bold leading-relaxed">{post.content.admissionRequirements.secondTimeAllowed}</p>
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-2xl">
                <span className="text-zinc-500 dark:text-zinc-400 block font-semibold mb-1">নূন্যতম জিপিএ (GPA Requirement):</span>
                <p className="text-zinc-800 dark:text-zinc-200 font-bold leading-relaxed">{post.content.admissionRequirements.minimumGpa}</p>
              </div>
            </div>

            {/* Interactive GPA Calculator Widget */}
            <BlogGpaCalculator
              universityName={post.universityName}
              unitCode={post.unitCode}
              minimumGpaText={post.content.admissionRequirements.minimumGpa}
              isSecondTimeAllowed={isSecondTime}
            />
          </section>

          {/* In-Article Mid Ad Slot */}
          <AdSenseUnit className="my-6" />

          {/* Section 4: Step-by-Step Application Process + Interactive Step Tracker */}
          <section id="section-steps" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <ListOrdered size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>৪. ধাপে ধাপে আবেদন প্রক্রিয়া (Application Process)</span>
            </h2>

            {/* Interactive Step-by-Step Checklist */}
            <BlogInteractiveSteps
              steps={post.content.applicationProcess}
            />
          </section>

          {/* Section 5: Exam Pattern & Marks Breakdown + Interactive Negative Marking Simulator */}
          <section id="section-pattern" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <BarChart3 size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>৫. পরীক্ষার ধরন ও বিষয়ভিত্তিক মানবণ্টন (Exam Pattern & Marks)</span>
            </h2>

            {/* Exam Pattern Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
              <div className="p-3.5 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/80 dark:border-white/10 text-center">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mb-1">পরীক্ষার ধরন</span>
                <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">{post.content.examPattern.type}</span>
              </div>
              <div className="p-3.5 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/80 dark:border-white/10 text-center">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mb-1">সময়কাল</span>
                <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">{post.content.examPattern.duration}</span>
              </div>
              <div className="p-3.5 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/80 dark:border-white/10 text-center">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mb-1">নেগেটিভ মার্কিং</span>
                <span className="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400">{post.content.examPattern.negativeMarking}</span>
              </div>
              <div className="p-3.5 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-200/80 dark:border-white/10 text-center">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mb-1">পাস নম্বর</span>
                <span className="font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">{post.content.examPattern.passMarks}</span>
              </div>
            </div>

            {/* Subject-Wise Marks Breakdown Grid */}
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-3">বিষয়ভিত্তিক নম্বর বিন্যাস:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
              {post.content.examPattern.distribution.map((dist, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-xl">
                  <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">{dist.subject}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-zinc-100">
                    {dist.marks}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Negative Marking Simulator */}
            <BlogMarksCalculator
              passMarks={post.content.examPattern.passMarks}
              negativeMarking={post.content.examPattern.negativeMarking}
            />
          </section>

          {/* Section 6: Official Links & Application Portals with Rich 3-Button Cards */}
          <section className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5">
                <ExternalLink size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
                <span>৬. অফিসিয়াল লিংক ও আবেদন পোর্টাল (Official Links)</span>
              </h2>
            </div>
            
            {/* Rich 3-Button Interactive Cards */}
            <BlogOfficialLinksCard
              links={post.content.importantLinks}
              universityName={post.universityName}
              unitCode={post.unitCode}
            />
          </section>

          {/* Section 7: Cutoff and Preparation Tips */}
          <section id="section-prep" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <Award size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>৭. কাট-অফ স্কোর ও ভর্তি প্রস্তুতি টিপস (Preparation Guidelines)</span>
            </h2>
            <ul className="space-y-3">
              {post.content.preparationTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 8: Frequently Asked Questions (FAQs) with Interactive Accordion */}
          <section className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2.5">
              <HelpCircle size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span>৮. সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর (FAQs)</span>
            </h2>
            
            <BlogInteractiveFaq
              faqs={post.content.faqs.map(f => ({ question: f.q, answer: f.a }))}
              universityName={post.universityName}
            />
          </section>
        </main>
      </div>

      {/* SEO Keywords Tag Cloud & Internal Homepage Portal Banner */}
      <footer className="mt-10 pt-6 border-t border-zinc-200 dark:border-white/10 pb-20 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">ট্যাগসমূহ:</span>
          {post.seoKeywords.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Global Homepage Internal Link Banner */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900 text-white mb-8 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <CalendarClock size={16} />
              <span>Admission Hub 2025-2026</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার লাইভ সময়সূচী ও রুটিন
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              বুয়েট, ঢাবি, মেডিকেল, জাবি, রাবি, চবি, ৭ কলেজ ও গুচ্ছের লাইভ কাউন্টডাউন ও আবেদন তথ্য দেখতে মূল ভর্তি ক্যালেন্ডারে প্রবেশ করুন।
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>মূল ভর্তি ক্যালেন্ডার (Home)</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/tools/calculator"
              className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              জিপিএ হিসাব
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              সব গাইড
            </Link>
          </div>
        </div>

        {/* Previous & Next Post Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-5 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-2xl hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 mb-1 group-hover:text-primary-600">
                  <ChevronLeft size={14} /> পূর্ববর্তী গাইড
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base line-clamp-2">
                  {prevPost.title}
                </h4>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                {prevPost.universityName}
              </span>
            </Link>
          ) : (
            <div className="p-5 bg-zinc-50 dark:bg-white/5 border border-dashed border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-xs text-zinc-400">
              প্রথম গাইডলাইনে অবস্থান করছেন
            </div>
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-5 bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-2xl hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-md transition-all group flex flex-col justify-between text-right"
            >
              <div>
                <span className="inline-flex items-center justify-end gap-1 text-xs font-bold text-zinc-400 mb-1 group-hover:text-primary-600 w-full">
                  পরবর্তী গাইড <ChevronRight size={14} />
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base line-clamp-2">
                  {nextPost.title}
                </h4>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                {nextPost.universityName}
              </span>
            </Link>
          ) : (
            <div className="p-5 bg-zinc-50 dark:bg-white/5 border border-dashed border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-xs text-zinc-400">
              সর্বশেষ গাইডলাইনে অবস্থান করছেন
            </div>
          )}
        </div>

        {/* Related Admission Guides */}
        <div className="p-6 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-3xl">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base flex items-center gap-2">
              <School size={18} className="text-primary-600 dark:text-primary-400" />
              <span>সম্পর্কিত অন্যান্য ভর্তি গাইডলাইন</span>
            </h3>
            <Link href="/blog" className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline">
              সকল গাইড দেখুন &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {finalRelated.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-4 bg-white dark:bg-[#18181b] border border-zinc-200/80 dark:border-white/10 rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 inline-block mb-1.5">
                    {rel.unitCode || rel.facultyName}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-white/5">
                  <span className="truncate max-w-[120px]">{rel.universityName}</span>
                  <ArrowUpRight size={14} className="group-hover:text-primary-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
