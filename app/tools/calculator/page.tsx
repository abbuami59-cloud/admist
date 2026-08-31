import type { Metadata } from "next";
import Calculator from "@/components/calculator";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "বিশ্ববিদ্যালয় ভর্তি জিপিএ ক্যালকুলেটর (SSC ও HSC GPA মার্কস হিসাব) | Admission Hub",
  description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, ৭ কলেজ ও গুচ্ছের জন্য এসএসসি ও এইচএসসি জিপিএ দিয়ে ২০ নম্বর ও ১০০ নম্বরের ভর্তি জিপিএ মার্কস এবং আবেদনের ন্যূনতম যোগ্যতা সহজে হিসাব করুন।",
  keywords: [
    "Admission GPA Calculator Bangladesh",
    "বিশ্ববিদ্যালয় ভর্তি জিপিএ ক্যালকুলেটর",
    "SSC HSC GPA marks calculator",
    "DU GPA calculation formula",
    "Medical admission GPA marks 200",
    "GST cluster GPA marks eligibility",
    "ভর্তি জিপিএ পয়েন্ট ও কাট অফ মার্কস"
  ],
  alternates: {
    canonical: "/tools/calculator",
  },
  openGraph: {
    title: "বিশ্ববিদ্যালয় ভর্তি জিপিএ ক্যালকুলেটর | Admission Hub",
    description: "এসএসসি ও এইচএসসি জিপিএ দিয়ে সহজে ১০০ ও ২০ নম্বরের ভর্তি জিপিএ মার্কস গণনা করুন।",
    url: "https://admission.talukdaracademy.com.bd/tools/calculator",
    type: "website",
  },
};

export default function CalculatorPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "বিশ্ববিদ্যালয় ভর্তি জিপিএ ক্যালকুলেটর",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "এসএসসি ও এইচএসসি পরীক্ষার জিপিএ দিয়ে বাংলাদেশের সকল বিশ্ববিদ্যালয়ের ভর্তি আবেদনের যোগ্যতা ও জিপিএ স্কোর নির্ণয়কারী টুল।",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <Calculator />
    </div>
  );
}
