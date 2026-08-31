import type { Metadata } from "next";
import { BlogSection } from "@/components/BlogSection";
import { ALL_ADMISSION_BLOGS } from "@/lib/admission-blogs";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি ব্লগ ও পূর্ণাঙ্গ অনুষদভিত্তিক গাইড 2025-2026 (১০০+ গাইড) | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, ৭ কলেজ, নার্সিং, ডেন্টাল, চারুকলা, জাতীয় বিশ্ববিদ্যালয়, বিইউপি, বুটেক্স, কৃষি গুচ্ছ ও এভিয়েশন বিশ্ববিদ্যালয়ের পূর্ণাঙ্গ আবেদন প্রক্রিয়া, জিপিএ শর্তাবলী, সিলেবাস ও নম্বর বণ্টন।",
  keywords: [
    "Admission blog Bangladesh",
    "বিশ্ববিদ্যালয় ভর্তি গাইড",
    "DU 7 college admission circular and seat plan",
    "Nursing BSc and Diploma admission BNMC",
    "DU Charukola fine arts drawing test",
    "BDS Dental college admission DGME",
    "National University NU honours admission without exam",
    "JU admission circular and syllabus",
    "RU admission preliminary selection",
    "CU admission units A B C D",
    "BUP FBS FST admission guide",
    "BUTEX textile engineering admission",
    "AFMC army medical college admission",
    "BMU maritime naval architecture",
    "AAUB aviation aerospace aeronautical",
    "BUET admission blog",
    "Medical MBBS admission circular",
    "Agri cluster admission process",
    "Architecture drawing syllabus",
    "GST cluster universities"
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি ব্লগ ও পূর্ণাঙ্গ অনুষদভিত্তিক গাইড 2025-2026 | Admission Hub",
    description: "১০০+ পাবলিক বিশ্ববিদ্যালয় ও অনুষদের পূর্ণাঙ্গ সার্কুলার, আসন বিন্যাস, মানবণ্টন ও ভর্তি নির্দেশিকা।",
    url: "https://admission.talukdaracademy.com.bd/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "বিশ্ববিদ্যালয় ভর্তি ব্লগ ও অনুষদভিত্তিক নির্দেশিকা | Admission Hub",
    description: "১০০+ বিশ্ববিদ্যালয়ের ভর্তি সার্কুলার, পরীক্ষার মানবণ্টন ও সিলেবাস গাইড।",
  }
};

export default function BlogPage() {
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "বিশ্ববিদ্যালয় ভর্তি ব্লগ ও পূর্ণাঙ্গ অনুষদভিত্তিক গাইড 2025-2026",
    "description": "বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের অনুষদভিত্তিক ১০০+ ভর্তি গাইডলাইন ও সার্কুলার নির্দেশিকা।",
    "url": "https://admission.talukdaracademy.com.bd/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": ALL_ADMISSION_BLOGS.slice(0, 30).map((post, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://admission.talukdaracademy.com.bd/blog/${post.slug}`,
        "name": post.title,
        "description": post.subtitle || post.summary
      }))
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <BlogSection />
    </div>
  );
}
