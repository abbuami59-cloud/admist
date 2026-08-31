import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPageView";
import { fetchDataset } from "@/lib/server-fetch";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার ও মানবণ্টন ২০২৫-২০২৬ | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাকা বিশ্ববিদ্যালয়, জাবি, রাবি, চবি, গুচ্ছ ও প্রকৌশল বিশ্ববিদ্যালয়সমূহের অফিশিয়াল সার্কুলার PDF, মানবণ্টন, পরীক্ষার কেন্দ্র, পাস নম্বর এবং সেকেন্ড টাইম তথ্য।",
  keywords: [
    "বিশ্ববিদ্যালয় ভর্তি তথ্য ২০২৫-২০২৬",
    "Admission circular Bangladesh 2026",
    "ভর্তি পরীক্ষার মানবণ্টন ও সিলেবাস",
    "বুয়েট সার্কুলার PDF",
    "মেডিকেল ভর্তি বিজ্ঞপ্তি ২০২৬",
    "ঢাবি ভর্তি সার্কুলার মানবণ্টন",
    "GST গুচ্ছ সার্কুলার",
    "সেকেন্ড টাইম বিশ্ববিদ্যালয় তালিকা"
  ],
  alternates: {
    canonical: "/info",
  },
  openGraph: {
    title: "সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য ও সার্কুলার ২০২৫-২০২৬ | Admission Hub",
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার মানবণ্টন, সার্কুলার লিংক ও সেকেন্ড টাইম নির্দেশিকা।",
    url: "https://admission.talukdaracademy.com.bd/info",
    type: "website",
  },
};

export default async function InfoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য ও সার্কুলার ২০২৫-২০২৬",
    "description": "পাবলিক বিশ্ববিদ্যালয় ভর্তি সার্কুলার, মানবণ্টন ও যোগ্যতা নির্দেশিকা।",
    "url": "https://admission.talukdaracademy.com.bd/info"
  };

  return (
    <div className="space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InfoPageView initialData={await fetchDataset("info")} />
    </div>
  );
}
