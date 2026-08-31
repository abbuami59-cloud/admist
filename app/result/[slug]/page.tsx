import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Building2,
  ExternalLink
} from "lucide-react";
import { 
  getAllResults, 
  getResultBySlug, 
  formatResultEmbedUrl 
} from "@/lib/results";
import { SmartWebView } from "@/components/SmartWebView";
import { getUniversityFullName } from "@/lib/university-names";

export const revalidate = 3600;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const results = await getAllResults();
  return results.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getResultBySlug(slug);

  if (!result) {
    return {
      title: "ফলাফল পাওয়া যায়নি | Admission Hub",
      description: "অনুরোধকৃত বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার ফলাফল পাওয়া যায়নি।",
    };
  }

  const fullName = getUniversityFullName(result.cleanTitle);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";
  const title = `${fullName} ভর্তি পরীক্ষার ফলাফল ও মেরিট লিস্ট ২০২৫-২০২৬ | Admission Hub`;
  const description = `${fullName} ভর্তি পরীক্ষার অফিশিয়াল ফলাফল, মেধাতালিকা ও ওয়েটিং লিস্ট দেখার সরাসরি ওয়েবভিউ পোর্টাল ২০২৫-২০২৬।`;
  const pageUrl = `${siteUrl}/result/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${fullName} ভর্তি পরীক্ষার রেজাল্ট`,
      `${fullName} Admission Result 2026`,
      `${fullName} মেরিট লিস্ট`,
      `${fullName} ওয়েটিং লিস্ট`,
      "বিশ্ববিদ্যালয় ভর্তি ফলাফল দেখার পোর্টাল"
    ],
    alternates: {
      canonical: `/result/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "article",
      siteName: "Admission Hub",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ResultDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getResultBySlug(slug);

  if (!result) {
    notFound();
  }

  const fullName = getUniversityFullName(result.cleanTitle);
  const allResults = await getAllResults();
  const otherResults = allResults
    .filter((item) => item.slug !== result.slug && item.result_link)
    .slice(0, 6);

  const embedUrl = result.result_link ? formatResultEmbedUrl(result.result_link) : "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "হোম",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "ফলাফল",
        "item": `${siteUrl}/result`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${fullName} ফলাফল`,
        "item": `${siteUrl}/result/${slug}`
      }
    ]
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${fullName} ভর্তি পরীক্ষার ফলাফল পোর্টাল`,
    "description": `${fullName} ভর্তি পরীক্ষার ফলাফল দেখার অফিশিয়াল পোর্টাল।`,
    "url": `${siteUrl}/result/${slug}`
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#18181b] p-3.5 sm:p-4 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xs">
        <div className="flex items-center gap-2">
          <Link
            href="/result"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 rounded-xl active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            <span>সকল ফলাফল</span>
          </Link>
        </div>

        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            হোম
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <Link href="/result" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            ফলাফল
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-[220px]">
            {fullName}
          </span>
        </nav>
      </div>

      {/* Main Result Card */}
      <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col">
        {/* Result Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
              <Award size={22} />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 truncate">
                {fullName} - ভর্তি পরীক্ষার ফলাফল
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                শিক্ষাবর্ষ: ২০২৫-২০২৬ • অফিশিয়াল রেজাল্ট ও মেধা তালিকা
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Portal Web View */}
        <SmartWebView
          src={embedUrl}
          title={`${fullName} ফলাফল`}
          externalUrl={result.result_link}
          defaultHeight={850}
          hideExternalLink={true}
        />
      </div>

      {/* Details Box */}
      <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base">
          <Building2 size={18} className="text-primary-500" />
          <h2>ভর্তি ও মেরিট লিস্ট সংক্রান্ত তথ্য</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          ফলাফল প্রকাশের পর মেরিট ও ওয়েটিং লিস্ট অনুযায়ী নির্দিষ্ট তারিখের মধ্যে সাবজেক্ট চয়েস ও ভর্তি প্রক্রিয়া সম্পন্ন করতে হবে। প্রয়োজনীয় সকল মূল কাগজপত্র প্রস্তুত রাখুন।
        </p>
      </div>

      {/* Other University Results */}
      {otherResults.length > 0 && (
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary-500" />
              অন্যান্য বিশ্ববিদ্যালয়ের ফলাফল
            </h2>
            <Link
              href="/result"
              className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"
            >
              সবগুলো দেখুন →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherResults.map((other) => {
              const otherClean = other.cleanTitle || other.university;
              const otherFullName = getUniversityFullName(otherClean);
              return (
                <Link
                  key={other.slug}
                  href={`/result/${other.slug}`}
                  className="p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                      {otherFullName}
                    </p>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                      মেরিট লিস্ট ও ফলাফল
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
