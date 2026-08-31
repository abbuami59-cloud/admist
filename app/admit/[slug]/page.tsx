import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Download, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  Building2,
  ExternalLink
} from "lucide-react";
import { 
  getAllAdmits, 
  getAdmitBySlug, 
  formatEmbedUrl 
} from "@/lib/admits";
import { SmartWebView } from "@/components/SmartWebView";
import { getUniversityFullName } from "@/lib/university-names";

export const revalidate = 3600;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const admits = await getAllAdmits();
  return admits.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const admit = await getAdmitBySlug(slug);

  if (!admit) {
    return {
      title: "এডমিট কার্ড পাওয়া যায়নি | Admission Hub",
      description: "অনুরোধকৃত বিশ্ববিদ্যালয়ের এডমিট কার্ড সংক্রান্ত তথ্য পাওয়া যায়নি।",
    };
  }

  const fullName = getUniversityFullName(admit.university);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";
  const title = `${fullName} এডমিট কার্ড ডাউনলোড ও পরীক্ষার সময়সূচী ২০২৫-২০২৬ | Admission Hub`;
  const description = `${fullName} ভর্তি পরীক্ষার এডমিট কার্ড বা প্রবেশপত্র সরাসরি ডাউনলোড পোর্টাল, সময়সীমা ও নির্দেশিকা ২০২৫-২০২৬।`;
  const pageUrl = `${siteUrl}/admit/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${fullName} এডমিট কার্ড ডাউনলোড`,
      `${fullName} প্রবেশপত্র ২০২৬`,
      `${fullName} Admit Card Download`,
      `${fullName} ভর্তি পরীক্ষার তারিখ`,
      "বিশ্ববিদ্যালয় এডমিট কার্ড ডাউনলোড পোর্টাল"
    ],
    alternates: {
      canonical: `/admit/${slug}`,
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

export default async function AdmitDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const admit = await getAdmitBySlug(slug);

  if (!admit) {
    notFound();
  }

  const fullName = getUniversityFullName(admit.university);
  const allAdmits = await getAllAdmits();
  const otherAdmits = allAdmits
    .filter((item) => item.slug !== admit.slug && item.link)
    .slice(0, 6);

  const embedUrl = admit.link ? formatEmbedUrl(admit.link) : "";
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
        "name": "এডমিট কার্ড",
        "item": `${siteUrl}/admit`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${fullName} এডমিট কার্ড`,
        "item": `${siteUrl}/admit/${slug}`
      }
    ]
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${fullName} এডমিট কার্ড ডাউনলোড পোর্টাল`,
    "description": `${fullName} ভর্তি পরীক্ষার এডমিট কার্ড বা প্রবেশপত্র ডাউনলোডের অফিশিয়াল ওয়েবভিউ পোর্টাল।`,
    "url": `${siteUrl}/admit/${slug}`
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
            href="/admit"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/15 rounded-xl active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            <span>সকল এডমিট কার্ড</span>
          </Link>
        </div>

        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            হোম
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <Link href="/admit" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            এডমিট কার্ড
          </Link>
          <ChevronRight size={13} className="text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-[220px]">
            {fullName}
          </span>
        </nav>
      </div>

      {/* Main In-Website Web View Card */}
      <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col">
        {/* Web View Header Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-xl shrink-0">
              <Download size={22} />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 truncate">
                {fullName} - এডমিট কার্ড ডাউনলোড
              </h1>
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                <Calendar size={13} className="text-primary-600 shrink-0" />
                <span className="truncate">সময়সীমা: {admit.period || "বিজ্ঞপ্তি অনুযায়ী"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Portal Web View */}
        <SmartWebView
          src={embedUrl}
          title={`${fullName} এডমিট কার্ড ডাউনলোড`}
          externalUrl={admit.link}
          defaultHeight={850}
          hideExternalLink={true}
        />
      </div>

      {/* Details Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base">
            <Building2 size={18} className="text-primary-500" />
            <h2>বিশ্ববিদ্যালয় ও এডমিট নির্দেশিকা</h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            এডমিট কার্ড ডাউনলোড করার পর রঙিন প্রিন্ট কপি পরীক্ষার হলে সাথে আনতে হবে। রোল ও পাসওয়ার্ড সুরক্ষিত রাখুন।
          </p>
        </div>

        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm sm:text-base">
            <Calendar size={18} className="text-primary-500" />
            <h2>ডাউনলোড সময়সীমা</h2>
          </div>
          <div className="bg-zinc-50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5 font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
            {admit.period || "বিজ্ঞপ্তি অনুযায়ী প্রযোজ্য"}
          </div>
        </div>
      </div>

      {/* Other University Admits */}
      {otherAdmits.length > 0 && (
        <div className="bg-white dark:bg-[#18181b] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary-500" />
              অন্যান্য বিশ্ববিদ্যালয়ের এডমিট কার্ড
            </h2>
            <Link
              href="/admit"
              className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"
            >
              সবগুলো দেখুন →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherAdmits.map((other) => {
              const otherFullName = getUniversityFullName(other.university);
              return (
                <Link
                  key={other.slug}
                  href={`/admit/${other.slug}`}
                  className="p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-primary-500/50 hover:bg-primary-50/20 dark:hover:bg-primary-950/20 transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate">
                      {otherFullName}
                    </p>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                      এডমিট কার্ড ও নির্দেশনা
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
