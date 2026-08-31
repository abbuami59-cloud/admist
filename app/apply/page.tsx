import type { Metadata } from "next";
import { ApplyPageView } from "@/components/ApplyPageView";
import { fetchDataset } from "@/lib/server-fetch";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি আবেদন সময়সূচী ও পোর্টাল ২০২৫-২০২৬ | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি ও গুচ্ছভুক্ত সকল পাবলিক বিশ্ববিদ্যালয়ে অনলাইনে ভর্তি আবেদনের সরাসরি লিংক, শুরুর তারিখ ও শেষ সময়সূচী।",
  keywords: [
    "বিশ্ববিদ্যালয় ভর্তি আবেদন ২০২৫-২০২৬",
    "University admission application deadline 2026",
    "অনলাইন ভর্তি আবেদন লিংক",
    "ঢাবি আবেদন শেষ তারিখ",
    "বুয়েট ভর্তি আবেদন পোর্টাল",
    "মেডিকেল অনলাইন আবেদন লিংক",
    "GST গুচ্ছ আবেদন শেষ তারিখ"
  ],
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি আবেদন সময়সূচী ও পোর্টাল ২০২৫-২০২৬ | Admission Hub",
    description: "অনলাইন ভর্তি আবেদনের সরাসরি লিংক, সময়সীমা ও কাউন্টডাউন।",
    url: "https://admission.talukdaracademy.com.bd/apply",
    type: "website",
  },
};

export default async function ApplyPage() {
  return (
    <div className="space-y-4">
      <ApplyPageView initialData={await fetchDataset("apply")} />
    </div>
  );
}
