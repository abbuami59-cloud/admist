import type { Metadata } from "next";
import { AdmitPageView } from "@/components/AdmitPageView";
import { fetchDataset } from "@/lib/server-fetch";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি এডমিট কার্ড ডাউনলোড লিংক ও তারিখ ২০২৫-২০২৬ | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, গুচ্ছ ও অন্যান্য পাবলিক বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার প্রবেশপত্র (Admit Card) ডাউনলোডের অফিশিয়াল সরাসরি লিংক ও সময়সূচী।",
  keywords: [
    "বিশ্ববিদ্যালয় ভর্তি এডমিট কার্ড ২০২৫-২০২৬",
    "Admit card download date Bangladesh university",
    "ঢাবি এডমিট কার্ড ডাউনলোড লিংক",
    "বুয়েট প্রবেশপত্র ডাউনলোড",
    "মেডিকেল এডমিট কার্ড ২০২৬",
    "GST গুচ্ছ প্রবেশপত্র লিংক"
  ],
  alternates: {
    canonical: "/admit",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি এডমিট কার্ড ডাউনলোড লিংক ও তারিখ ২০২৫-২০২৬ | Admission Hub",
    description: "সকল বিশ্ববিদ্যালয়ের প্রবেশপত্র বা এডমিট কার্ড ডাউনলোডের সময়সীমা ও পোর্টাল লিংক।",
    url: "https://admission.talukdaracademy.com.bd/admit",
    type: "website",
  },
};

export default async function AdmitPage() {
  return (
    <div className="space-y-4">
      <AdmitPageView initialData={await fetchDataset("admit")} />
    </div>
  );
}
