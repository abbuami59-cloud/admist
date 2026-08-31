import type { Metadata } from "next";
import { ResultPageView } from "@/components/ResultPageView";
import { fetchDataset } from "@/lib/server-fetch";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ফলাফল ও মেধা তালিকা ২০২৫-২০২৬ | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, গুচ্ছ সহ সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার ফলাফল, মেরিট লিস্ট, অপেক্ষমাণ তালিকা ও ভাইভা শিডিউল লিংক।",
  keywords: [
    "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ফলাফল ২০২৫-২০২৬",
    "University admission test result 2026",
    "ঢাবি ভর্তি পরীক্ষার রেজাল্ট",
    "মেডিকেল ভর্তি রেজাল্ট ও মেধা তালিকা",
    "বুয়েট প্রিলিমিনারি ও লিখিত রেজাল্ট",
    "GST গুচ্ছ ফলাফল ও সাবজেক্ট চয়েস"
  ],
  alternates: {
    canonical: "/result",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ফলাফল ও মেধা তালিকা ২০২৫-২০২৬ | Admission Hub",
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার ফলাফল, কাট অফ মার্কস ও মেধা তালিকার অফিশিয়াল লিংক।",
    url: "https://admission.talukdaracademy.com.bd/result",
    type: "website",
  },
};

export default async function ResultPage() {
  return (
    <div className="space-y-4">
      <ResultPageView initialData={await fetchDataset("result")} />
    </div>
  );
}
