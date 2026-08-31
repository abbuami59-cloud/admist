import type { Metadata } from "next";
import { HomeTimelineView } from "@/components/HomeTimelineView";
import { fetchDataset } from "@/lib/server-fetch";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import Link from "next/link";

export const revalidate = 3600;

import { 
  BookOpen, 
  Calculator, 
  FileCheck2, 
  HelpCircle,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ২০২৫-২০২৬ | সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য ও সময়সূচী",
  description: "বাংলাদেশ সকল পাবলিক বিশ্ববিদ্যালয়, মেডিকেল, ডেন্টাল, বুয়েট, ঢাকা বিশ্ববিদ্যালয়, জাবি, রাবি, চবি, ৭ কলেজ, বিইউপি, নার্সিং ও গুচ্ছ ভর্তি পরীক্ষার সময়সূচী, লাইভ কাউন্টডাউন, আসন সংখ্যা, আবেদন লিংক ও ভর্তি ক্যালেন্ডার ২০২৫-২০২৬।",
  keywords: [
    "Admission Calendar Bangladesh",
    "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার 2025-2026",
    "ভর্তি পরীক্ষার সময়সূচী 2026",
    "all university admission date 2025-2026",
    "admission test routine 2026",
    "DU admission calendar",
    "BUET admission date 2026",
    "medical MBBS BDS admission circular",
    "GST cluster admission calendar",
    "Agri cluster admission date",
    "JU admission routine",
    "RU admission date",
    "CU admission circular",
    "BUP admission test date",
    "BUTEX admission circular",
    "DU 7 college admission calendar",
    "Nursing BSc diploma admission",
    "National University honours admission",
    "Admission GPA calculator",
    "Admission photo resizer"
  ],
  alternates: {
    canonical: "https://admission.talukdaracademy.com.bd",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য 2025-2026 | Admission Hub",
    description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, গুচ্ছ সহ সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, লাইভ কাউন্টডাউন ও সার্কুলার নির্দেশিকা।",
    url: "https://admission.talukdaracademy.com.bd",
    siteName: "Admission Hub",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সময়সূচী 2025-2026 | Admission Hub",
    description: "সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, লাইভ কাউন্টডাউন ও ভর্তি নির্দেশিকা।",
  },
};

export default async function TimelinePage() {
  // Schema.org structured data for the homepage
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://admission.talukdaracademy.com.bd/#website",
        "url": "https://admission.talukdaracademy.com.bd",
        "name": "Admission Hub - বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও তথ্য প্ল্যাটফর্ম",
        "description": "বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়, মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার সময়সূচী, সার্কুলার ও ক্যালেন্ডার ২০২৫-২০২৬",
        "inLanguage": "bn-BD",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://admission.talukdaracademy.com.bd/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://admission.talukdaracademy.com.bd/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "২০২৫-২০২৬ শিক্ষাবর্ষের বিশ্ববিদ্যালয় ভর্তি পরীক্ষা কবে শুরু হবে?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "২০২৫-২০২৬ শিক্ষাবর্ষের ভর্তি পরীক্ষাগুলো সাধারণ বিশ্ববিদ্যালয়, প্রকৌশল ও মেডিকেল ভেদে ২০২৫ সালের নভেম্বর থেকে ২০২৬ সালের মার্চ মাস পর্যন্ত অনুষ্ঠিত হবে। বিস্তারিত সময়সূচী ও লাইভ কাউন্টডাউন Admission Hub ক্যালেন্ডারে নিয়মিত আপডেট করা হয়।"
            }
          },
          {
            "@type": "Question",
            "name": "জিএসটি (GST) ও কৃষি গুচ্ছ ভর্তি পরীক্ষা কীভাবে অনুষ্ঠিত হবে?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "সাধারণ ও প্রযুক্তি গুচ্ছ (GST) এবং কৃষি গুচ্ছ বিশ্ববিদ্যালয়সমূহের ভর্তি পরীক্ষা একযোগে সমন্বিত পদ্ধতিতে ১০০ নম্বরের এমসিকিউ ভিত্তিক অনুষ্ঠিত হবে। বিস্তারিত মানবণ্টন ও যোগ্যতা Admission Hub এর নির্দিষ্ট ব্লগে দেওয়া রয়েছে।"
            }
          },
          {
            "@type": "Question",
            "name": "বিশ্ববিদ্যালয় ভর্তি আবেদনে সেকেন্ড টাইম (2nd Time) সুযোগ আছে কি?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়, রাজশাহী বিশ্ববিদ্যালয়, কৃষি গুচ্ছ, বিইউপি, এবং জিএসটি গুচ্ছভুক্ত বিশ্ববিদ্যালয়গুলোতে দ্বিতীয় বার পরীক্ষা দেওয়ার সুযোগ রয়েছে। তবে ঢাকা বিশ্ববিদ্যালয় ও বুয়েটে সেকেন্ড টাইম সুযোগ নেই।"
            }
          },
          {
            "@type": "Question",
            "name": "ভর্তি পরীক্ষার জিপিএ মার্কস কীভাবে গণনা করা হয়?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "অধিকাংশ বিশ্ববিদ্যালয়ে এসএসসি এবং এইচএসসি পরীক্ষার জিপিএকে নির্দিষ্ট গুণক (যেমন: ১০ বা ১২ দিয়ে গুণ করে মোট ১০০ বা ২০ নম্বর) দিয়ে স্কোর তৈরি করা হয়। শিক্ষার্থীরা Admission Hub এর ফ্রি GPA ক্যালকুলেটর ব্যবহার করে সরাসরি স্কোর যাচাই করতে পারবেন।"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      {/* Inject SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Main Interactive Live Countdown Timeline */}
      <section aria-label="বিশ্ববিদ্যালয় ভর্তি পরীক্ষার লাইভ সময়সূচী ও কাউন্টডাউন">
        <HomeTimelineView initialData={await fetchDataset("timeline")} />
      </section>

      {/* In-Feed Home Ad Slot */}
      <AdSenseUnit className="my-2" />

      {/* SEO Rich Editorial & Feature Section */}
      <section aria-label="ভর্তি প্রস্তুতি ও টুলস" className="bg-gradient-to-br from-zinc-50 via-white to-primary-50/40 dark:from-white/5 dark:via-transparent dark:to-primary-950/20 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 sm:p-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 text-xs font-bold mb-3">
            <span>স্মার্ট ভর্তি সহায়ক প্ল্যাটফর্ম</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
            বাংলাদেশ বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ২০২৫-২০২৬
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            পাবলিক বিশ্ববিদ্যালয়, মেডিকেল, ডেন্টাল, প্রকৌশল গুচ্ছ, কৃষি বিশ্ববিদ্যালয়, ঢাকা বিশ্ববিদ্যালয় ৭ কলেজ ও নার্সিং কলেজের ভর্তি বিজ্ঞপ্তি, পরীক্ষার সময়সূচী, আসন সংখ্যা ও নির্দেশিকা।
          </p>
        </div>

        {/* Quick Tools & Resources Grid (2 Rows on Mobile, 4 Columns on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <Link
            href="/tools/calculator"
            className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-zinc-200/80 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                <Calculator size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-xs sm:text-base text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                জিপিএ ক্যালকুলেটর
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                এসএসসি ও এইচএসসি নম্বর দিয়ে জিপিএ মার্কস ও যোগ্যতা হিসাব করুন।
              </p>
            </div>
          </Link>

          <Link
            href="/tools/resizer"
            className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-zinc-200/80 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                <FileCheck2 size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-xs sm:text-base text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                ছবি ও স্বাক্ষর রিসাইজার
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                ভর্তি আবেদনের জন্য ৩০০x৩০০ ও ৩০০x৮০ পিক্সেল সাইজে কনভার্ট করুন।
              </p>
            </div>
          </Link>

          <Link
            href="/subject-review"
            className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-zinc-200/80 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-xs sm:text-base text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                ১৬০+ সাবজেক্ট রিভিউ
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                সকল বিষয়ের বিস্তারিত পরিচিতি, পড়ার অভিজ্ঞতা ও চাকরির ক্ষেত্র।
              </p>
            </div>
          </Link>

          <Link
            href="/blog"
            className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-zinc-200/80 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-xs sm:text-base text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                ১০০+ ভর্তি গাইড
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                প্রতিটি ইউনিটের মানবণ্টন, আবেদনের লিংক ও প্রস্তুতি কৌশল।
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section aria-label="সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর" className="bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle size={22} className="text-primary-600 dark:text-primary-400" />
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            বিশ্ববিদ্যালয় ভর্তি সম্পর্কিত সাধারণ প্রশ্নোত্তর (FAQ)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-2">
              <span className="text-primary-600 font-extrabold">১.</span>
              ২০২৫-২০২৬ সেশনের ভর্তি পরীক্ষা কবে অনুষ্ঠিত হবে?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              নভেম্বর ২০২৫ থেকে মার্চ ২০২৬ এর মধ্যে পর্যায়ক্রমে সকল পাবলিক বিশ্ববিদ্যালয়, বুয়েট, মেডিকেল ও গুচ্ছ ভর্তি পরীক্ষা অনুষ্ঠিত হবে।
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-2">
              <span className="text-primary-600 font-extrabold">২.</span>
              সেকেন্ড টাইম সুযোগ কোন কোন বিশ্ববিদ্যালয়ে রয়েছে?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              জাহাঙ্গীরনগর বিশ্ববিদ্যালয়, রাজশাহী বিশ্ববিদ্যালয়, কৃষি গুচ্ছ, বিইউপি ও জিএসটি গুচ্ছে দ্বিতীয় বার পরীক্ষা দেওয়া যায়। ঢাকা বিশ্ববিদ্যালয়ে সুযোগ নেই।
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-2">
              <span className="text-primary-600 font-extrabold">৩.</span>
              ভর্তি পরীক্ষার জন্য ছবি ও স্বাক্ষরের সাইজ কত?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              ছবি সাধারণত ৩০০x৩০০ পিক্সেল (১০০ কেবি এর নিচে) এবং স্বাক্ষর ৩০০x৮০ পিক্সেল (৬০ কেবি এর নিচে) হতে হয়। আমাদের ফটো রিসাইজার দিয়ে ফ্রিতে সাইজ করে নিতে পারেন।
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-2">
              <span className="text-primary-600 font-extrabold">৪.</span>
              ভর্তি পরীক্ষার নেগেটিভ মার্কিং কেমন হয়?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              বেশিরভাগ বিশ্ববিদ্যালয়ে প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যায়। ঢাকা বিশ্ববিদ্যালয় ও মেডিকেলেও একই হারে নেগেটিভ মার্কিং প্রযোজ্য।
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Blog Directory Callout */}
      <section aria-label="ভর্তি ব্লগ ও পূর্ণাঙ্গ গাইডলাইন" className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <BookOpen size={20} className="text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-black">১০০+ অনুষদভিত্তিক ভর্তি গাইড ও সিলেবাস</h3>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
            বুয়েট, ঢাবি, মেডিকেল, জাবি, রাবি, চবি, ৭ কলেজ ও গুচ্ছের প্রতিটি অনুষদের বিস্তারিত মানবণ্টন, পাস নম্বর ও সার্কুলার তথ্য আলাদা ব্লগ পেজে পড়ুন।
          </p>
        </div>
        <Link
          href="/blog"
          className="shrink-0 px-5 py-3 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <span>ভর্তি ব্লগ পেজে যান</span>
          <span>&rarr;</span>
        </Link>
      </section>
    </div>
  );
}
