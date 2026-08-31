import type { Metadata } from "next";
import Resizer from "@/components/Resizer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "ভর্তি আবেদন ছবি ও স্বাক্ষর রিসাইজার (300x300 ও 300x80 px) | Admission Hub",
  description: "বিশ্ববিদ্যালয়, মেডিকেল ও চাকরির ভর্তি আবেদনের জন্য ছবিকে ৩০০x৩০০ পিক্সেল (১০০ কেবি) এবং স্বাক্ষরকে ৩০০x৮০ পিক্সেল (৬০ কেবি) সাইজে সহজেই ক্রপ, রিসাইজ ও কম্প্রেস করুন।",
  keywords: [
    "Admission photo resizer 300x300",
    "Signature resizer 300x80 online",
    "ভর্তি আবেদন ছবি রিসাইজ",
    "বিশ্ববিদ্যালয় ভর্তি ছবি ও স্বাক্ষর সাইজ",
    "Teletalk photo and signature resizer",
    "300x300 photo converter 100kb",
    "300x80 signature converter 60kb"
  ],
  alternates: {
    canonical: "/tools/resizer",
  },
  openGraph: {
    title: "ভর্তি আবেদন ছবি ও স্বাক্ষর রিসাইজার (300x300 & 300x80) | Admission Hub",
    description: "অনলাইনে এক ক্লিকে ভর্তি পরীক্ষার নির্দিষ্ট মাপ অনুযায়ী ছবি ও স্বাক্ষর রিসাইজ করুন।",
    url: "https://admission.talukdaracademy.com.bd/tools/resizer",
    type: "website",
  },
};

export default function ResizerPage() {
  const resizerJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "অনলাইন ছবি ও স্বাক্ষর রিসাইজার (ভর্তি ও চাকরির আবেদন)",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "description": "বিশ্ববিদ্যালয় ও টেলিটক আবেদনের জন্য ছবি (300x300) এবং স্বাক্ষর (300x80) সাইজ করার ফ্রি টুল।",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col p-2 sm:p-4 md:p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resizerJsonLd) }}
      />
      <Resizer />
    </div>
  );
}
