import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  FileText, 
  ChevronRight, 
  Info, 
  CheckCircle2, 
  Building2
} from "lucide-react";
import { 
  getAllCirculars, 
  getCircularBySlug, 
  getEmbedUrl, 
  CircularItem 
} from "@/lib/circulars";
import { SmartWebView } from "@/components/SmartWebView";
import { getUniversityFullName } from "@/lib/university-names";

export const revalidate = 3600;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const circulars = await getAllCirculars();
  return circulars.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const circular = await getCircularBySlug(slug);

  if (!circular) {
    return {
      title: "সার্কুলার পাওয়া যায়নি | Admission Hub",
      description: "অনুরোধকৃত বিশ্ববিদ্যালয়ের ভর্তি সার্কুলার পাওয়া যায়নি।",
    };
  }

  const fullName = getUniversityFullName(circular.university);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";
  const title = `${fullName} ভর্তি সার্কুলার ও মানবণ্টন ২০২৫-২০২৬ PDF | Admission Hub`;
  const description = `${fullName} অফিশিয়াল ভর্তি সার্কুলার PDF, ভর্তি পরীক্ষার মানবণ্টন, পাস নম্বর, পরীক্ষা কেন্দ্র ও সেকেন্ড টাইম নির্দেশিকা ২০২৫-২০২৬।`;
  const pageUrl = `${siteUrl}/info/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${fullName} ভর্তি সার্কুলার`,
      `${fullName} সার্কুলার PDF`,
      `${fullName} Admission Circular 2026`,
      `${fullName} মানবণ্টন ও সিলেবাস`,
      "বিশ্ববিদ্যালয় ভর্তি সার্কুলার PDF",
      "ভর্তি পরীক্ষার তথ্য ২০২৬"
    ],
    alternates: {
      canonical: `/info/${slug}`,
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

export default async function CircularDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const circular = await getCircularBySlug(slug);

  if (!circular) {
    notFound();
  }

  const fullName = getUniversityFullName(circular.university);
  const allCirculars = await getAllCirculars();
  const otherCirculars = allCirculars
    .filter((item) => item.slug !== circular.slug && item.circular_link)
    .slice(0, 6);

  const embedUrl = circular.circular_link ? getEmbedUrl(circular.circular_link) : "";
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
        "name": "ভর্তি তথ্য ও সার্কুলার",
        "item": `${siteUrl}/info`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${fullName} সার্কুলার`,
        "item": `${siteUrl}/info/${slug}`
      }
    ]
  };

  const documentJsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "name": `${fullName} ভর্তি সার্কুলার ২০২৫-২০২৬`,
    "description": `${fullName} অফিশিয়াল ভর্তি সার্কুলার PDF ও মানবণ্টন নির্দেশিকা।`,
    "url": `${siteUrl}/info/${slug}`,
    "educationalLevel": "Higher Education",
    "about": {
      "@type": "EducationalOccupationalCredential",
      "name": "বিশ্ববিদ্যালয় স্নাতক ভর্তি পরীক্ষা"
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(documentJsonLd) }}
      />

      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#18181b] p-3.5 sm:p-4 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xs">
        <div className="flex items-center gap-2">
          <Link
            href="/info"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 rounded-xl active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            <span>সকল সার্কুলার</span>
          </Link>
        </div>

        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            হোম
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <Link href="/info" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            ভর্তি তথ্য
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-[200px]">
            {fullName}
          </span>
        </nav>
      </div>

      {/* Main PDF Viewer Card */}
      <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col">
        {/* Viewer Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between gap-3 bg-zinc-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-xl shrink-0">
              <FileText size={22} />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 truncate">
                {fullName} - অফিশিয়াল ভর্তি সার্কুলার
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                শিক্ষাবর্ষ: ২০২৫-২০২৬ • অফিশিয়াল সার্কুলার ও পূর্ণাঙ্গ নির্দেশিকা
              </p>
            </div>
          </div>
        </div>

        {/* Smart Web View / PDF Frame Container */}
        <SmartWebView
          src={embedUrl}
          title={`${fullName} সার্কুলার PDF`}
          externalUrl={circular.circular_link}
          defaultHeight={950}
          hideExternalLink={true}
        />
      </div>

      {/* University Key Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Mark Distribution */}
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base">
            <Info size={18} className="text-primary-500" />
            <h2>মানবণ্টন ও বিষয়ভিত্তিক সিলেবাস</h2>
          </div>
          <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 border border-zinc-100 dark:border-white/5">
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed">
              {circular.mark_distribution}
            </p>
          </div>
        </div>

        {/* Right Column: Center & Criteria */}
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-xs space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base">
              <Building2 size={18} className="text-primary-500" />
              <h2>পরীক্ষা কেন্দ্র</h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 font-medium">
              {circular.center}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
              <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">সেকেন্ড টাইম</h3>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-50">{circular.second_time}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
              <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">নেগেটিভ মার্ক</h3>
              <p className="text-xs sm:text-sm font-extrabold text-rose-600 dark:text-rose-400">{circular.negative_mark}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 text-center">
              <h3 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-1">পাস মার্ক</h3>
              <p className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{circular.pass_mark || "৪০%"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Important University Circulars */}
      {otherCirculars.length > 0 && (
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary-500" />
              অন্যান্য বিশ্ববিদ্যালয়ের ভর্তি সার্কুলার
            </h2>
            <Link
              href="/info"
              className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"
            >
              সবগুলো দেখুন →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherCirculars.map((other) => {
              const otherFullName = getUniversityFullName(other.university);
              return (
                <Link
                  key={other.slug}
                  href={`/info/${other.slug}`}
                  className="p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-primary-500/50 hover:bg-primary-50/20 dark:hover:bg-primary-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate">
                      {otherFullName}
                    </p>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                      সার্কুলার PDF ও মানবণ্টন
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-zinc-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
