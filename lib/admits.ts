import { DEFAULT_ADMIT_DATA, AdmitItem } from "./default-datasets";
import { fetchDataset } from "./server-fetch";

export interface AdmitDetailItem extends AdmitItem {
  slug: string;
  end_date?: string;
}

export const KNOWN_ADMIT_SLUGS: Record<string, string> = {
  "ঢাকা সেন্ট্রাল ইউনিভার্সিটি": "dcu-admit-card-download",
  "ঢাকা সেন্ট্রাল ইউনিভার্সিটি (DCU)": "dcu-admit-card-download",
  "DCU": "dcu-admit-card-download",
  "গুচ্ছ": "gst-cluster-admit-card-download",
  "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST)": "gst-cluster-admit-card-download",
  "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)": "gst-cluster-admit-card-download",
  "মেডিকেল & ডেন্টাল": "medical-dental-admit-card-download",
  "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)": "medical-dental-admit-card-download",
  "মেডিকেল ভর্তি পরীক্ষা (MBBS)": "medical-mbbs-admit-card-download",
  "ডেন্টাল ভর্তি পরীক্ষা (BDS)": "dental-bds-admit-card-download",
  "AFMC & AMC": "afmc-amc-admit-card-download",
  "আর্মড ফোর্সেস মেডিকেল কলেজ ও এএমসি (AFMC & AMC)": "afmc-amc-admit-card-download",
  "AAUB": "aaub-admit-card-download",
  "এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয়,বাংলাদেশ (AAUB)": "aaub-admit-card-download",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয় (BSMRAAU)": "aaub-admit-card-download",
  "কৃষি গুচ্ছ": "agri-cluster-admit-card-download",
  "কৃষি গুচ্ছ (Agri Cluster)": "agri-cluster-admit-card-download",
  "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)": "agri-cluster-admit-card-download",
  
  // DU
  "ঢাবি (ক)": "du-ka-unit-science-admit-card",
  "ঢাবি (খ)": "du-kha-unit-arts-admit-card",
  "ঢাবি (গ)": "du-ga-unit-business-admit-card",
  "ঢাবি (IBA)": "du-iba-admit-card-download",
  "ঢাবি (চ)": "du-cha-unit-fine-arts-admit-card",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - সকল ইউনিট": "du-all-units-admit-card",
  "ঢাকা বিশ্ববিদ্যালয় (DU) সকল ইউনিট": "du-all-units-admit-card",
  "ঢাকা বিশ্ববিদ্যালয় (DU)": "du-all-units-admit-card",
  "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ": "du-7-college-admit-card-download",
  "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ কলেজ": "du-7-college-admit-card-download",

  // RU
  "রাবি": "ru-rajshahi-university-admit-card",
  "রাজশাহী বিশ্ববিদ্যালয় (RU)": "ru-rajshahi-university-admit-card",
  
  // JU
  "জাবি": "ju-jahangirnagar-admit-card",
  "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)": "ju-jahangirnagar-admit-card",

  // MIST
  "MIST": "mist-admit-card-download",
  "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি (MIST)": "mist-admit-card-download",

  // CU
  "চবি": "cu-chittagong-university-admit-card",
  "চবি(A)": "cu-a-unit-admit-card",
  "চবি(B)": "cu-b-unit-admit-card",
  "চবি(D)": "cu-d-unit-admit-card",
  "চবি(D1)": "cu-d1-unit-admit-card",
  "চবি(B1)": "cu-b1-unit-admit-card",
  "চবি(B2)": "cu-b2-unit-admit-card",
  "চবি(C)": "cu-c-unit-admit-card",
  "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)": "cu-chittagong-university-admit-card",

  // BUP & BUTEX
  "BUP": "bup-admit-card-download",
  "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)": "bup-admit-card-download",
  "মেরিটাইম": "maritime-university-admit-card",
  "বাংলাদেশ মেরিটাইম বিশ্ববিদ্যালয় (BMU)": "maritime-university-admit-card",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান মেরিটাইম ইউনিভার্সিটি (BSMRMU)": "maritime-university-admit-card",
  "BUTEX": "butex-admit-card-download",
  "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)": "butex-admit-card-download",

  // KU & JnU
  "খুবি": "ku-khulna-university-admit-card",
  "খুলনা বিশ্ববিদ্যালয় (KU)": "ku-khulna-university-admit-card",
  "জবি": "jnu-jagannath-admit-card",
  "জবি(A)": "jnu-a-unit-admit-card",
  "জবি(B)": "jnu-b-unit-admit-card",
  "জবি(C)": "jnu-c-unit-admit-card",
  "জবি(D)": "jnu-d-unit-admit-card",
  "জবি(E)": "jnu-e-unit-admit-card",
  "জগন্নাথ বিশ্ববিদ্যালয় (JnU)": "jnu-jagannath-admit-card",

  // Engineering
  "CUET": "cuet-admit-card-download",
  "KUET": "kuet-admit-card-download",
  "RUET": "ruet-admit-card-download",
  "BUET": "buet-admit-card-download",
  "SUST": "sust-admit-card-download",
  "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)": "buet-admit-card-download",
  "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (CUET)": "cuet-admit-card-download",
  "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)": "kuet-admit-card-download",
  "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET)": "ruet-admit-card-download",
  "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (SUST)": "sust-admit-card-download",
};

export function getAdmitSlug(universityName: string): string {
  if (!universityName) return "admit-card-download";
  const trimmed = universityName.trim();
  if (KNOWN_ADMIT_SLUGS[trimmed]) {
    return KNOWN_ADMIT_SLUGS[trimmed];
  }

  for (const [key, slug] of Object.entries(KNOWN_ADMIT_SLUGS)) {
    if (trimmed.toLowerCase() === key.toLowerCase()) {
      return slug;
    }
  }

  const slugified = trimmed
    .replace(/[\(\)\[\]\{\}\.,\+\&_\/\\-]/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return `${encodeURIComponent(slugified)}-admit-card`;
}

export function formatEmbedUrl(rawUrl: string): string {
  if (!rawUrl) return "";
  const url = rawUrl.trim();

  // Google Drive File URL -> /preview
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  // Google Drive Folder URL -> embed list view
  const folderMatch = url.match(/\/drive\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) {
    return `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#list`;
  }

  // Google Drive ID param
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && url.includes("drive.google.com")) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }

  if (url.includes("drive.google.com") && url.includes("/view")) {
    return url.replace("/view", "/preview");
  }

  return url;
}

export async function getAllAdmits(): Promise<AdmitDetailItem[]> {
  let rawData: any[] = [];
  try {
    rawData = await fetchDataset("admit");
  } catch {
    rawData = DEFAULT_ADMIT_DATA;
  }

  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
    rawData = DEFAULT_ADMIT_DATA;
  }

  const map = new Map<string, AdmitDetailItem>();

  for (const item of rawData) {
    const slug = getAdmitSlug(item.university);
    map.set(slug, {
      ...item,
      slug,
    });
  }

  for (const def of DEFAULT_ADMIT_DATA) {
    const slug = getAdmitSlug(def.university);
    if (!map.has(slug)) {
      map.set(slug, {
        ...def,
        slug,
      });
    }
  }

  return Array.from(map.values());
}

export async function getAdmitBySlug(slug: string): Promise<AdmitDetailItem | null> {
  const decodedSlug = decodeURIComponent(slug);
  const all = await getAllAdmits();
  
  const found = all.find(
    (item) => item.slug === slug || item.slug === decodedSlug || getAdmitSlug(item.university) === slug || getAdmitSlug(item.university) === decodedSlug
  );

  return found || null;
}
