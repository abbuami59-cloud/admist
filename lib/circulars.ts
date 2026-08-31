import { DEFAULT_INFO_DATA, InfoItem } from "./default-datasets";
import { fetchDataset } from "./server-fetch";

export interface CircularItem extends InfoItem {
  slug: string;
  calculator?: string;
  created_at?: string;
}

// Fixed mapping for known universities to ensure stable, SEO-friendly English slugs
export const KNOWN_SLUG_MAP: Record<string, string> = {
  // English / Short codes
  "BUET": "buet-admission-circular",
  "MIST": "mist-admission-circular",
  "MIST C Unit": "mist-c-unit-admission-circular",
  "BUTEX": "butex-admission-circular",
  "BUP": "bup-admission-circular",
  "RUET": "ruet-admission-circular",
  "KUET": "kuet-admission-circular",
  "CUET": "cuet-admission-circular",
  "SUST": "sust-admission-circular",
  "NITOR": "nitor-admission-circular",
  "DCU": "dcu-admission-circular",
  "Aviation & Aerospace Uni.": "bsmraau-aviation-aerospace-admission-circular",
  "AAUB": "bsmraau-aviation-aerospace-admission-circular",
  "AFMC & AMC": "afmc-amc-armed-forces-medical-admission-circular",
  
  // DU Units
  "ঢাবি(A)-বিজ্ঞান": "du-a-unit-science-admission-circular",
  "ঢাবি(A)- বিজ্ঞান": "du-a-unit-science-admission-circular",
  "ঢাবি(B)-মানবিক": "du-b-unit-arts-admission-circular",
  "ঢাবি(B)- মানবিক": "du-b-unit-arts-admission-circular",
  "ঢাবি(C)-বাণিজ্য": "du-c-unit-business-admission-circular",
  "ঢাবি(C)- বাণিজ্য": "du-c-unit-business-admission-circular",
  "ঢাবি(Ch)- চারুকলা": "du-ch-unit-fine-arts-admission-circular",
  "ঢাবি(IBA)": "du-iba-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'ক' ইউনিট (বিজ্ঞান অনুষদ)": "du-a-unit-science-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'ক' ইউনিট (বিজ্ঞান)": "du-a-unit-science-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'খ' ইউনিট (কলা, আইন ও সামাজিক বিজ্ঞান)": "du-b-unit-arts-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'গ' ইউনিট (ব্যবসায় শিক্ষা অনুষদ)": "du-c-unit-business-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - চারুকলা অনুষদ ('চ' ইউনিট)": "du-ch-unit-fine-arts-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - আইবিএ (IBA)": "du-iba-admission-circular",
  "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ": "du-7-college-admission-circular",

  // KU Units
  "খুবি(A)- বিজ্ঞান": "ku-a-unit-science-admission-circular",
  "খুবি(B)- জীববিজ্ঞান": "ku-b-unit-biology-admission-circular",
  "খুবি(C)- মানবিক": "ku-c-unit-arts-admission-circular",
  "খুবি(D)- বাণিজ্য": "ku-d-unit-business-admission-circular",
  "খুলনা বিশ্ববিদ্যালয় (KU) - 'A' ইউনিট (বিজ্ঞান ও প্রযুক্তি অনুষদ)": "ku-a-unit-science-admission-circular",
  "খুলনা বিশ্ববিদ্যালয় (KU) - 'B' ইউনিট (জীববিজ্ঞান অনুষদ)": "ku-b-unit-biology-admission-circular",
  "খুলনা বিশ্ববিদ্যালয় (KU) - 'C' ইউনিট (কলা ও মানবিক অনুষদ)": "ku-c-unit-arts-admission-circular",
  "খুলনা বিশ্ববিদ্যালয় (KU) - 'D' ইউনিট (ব্যবসায় প্রশাসন অনুষদ)": "ku-d-unit-business-admission-circular",
  "খুলনা বিশ্ববিদ্যালয় (KU)": "ku-khulna-university-admission-circular",

  // RU Units
  "রাবি(A)- মানবিক": "ru-a-unit-arts-admission-circular",
  "রাবি(B)- বাণিজ্য": "ru-b-unit-business-admission-circular",
  "রাবি(C)- বিজ্ঞান": "ru-c-unit-science-admission-circular",
  "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'A' ইউনিট (মানবিক ও আইন)": "ru-a-unit-arts-admission-circular",
  "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'B' ইউনিট (ব্যবসায় শিক্ষা)": "ru-b-unit-business-admission-circular",
  "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'C' ইউনিট (বিজ্ঞান অনুষদ)": "ru-c-unit-science-admission-circular",
  "রাজশাহী বিশ্ববিদ্যালয় (RU)": "ru-rajshahi-university-admission-circular",

  // Medical & Dental
  "মেডিকেল & ডেন্টাল": "medical-dental-admission-circular",
  "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)": "medical-dental-admission-circular",
  "মেডিকেল ভর্তি পরীক্ষা (MBBS)": "mbbs-medical-admission-circular",
  "ডেন্টাল ভর্তি পরীক্ষা (BDS)": "dental-bds-admission-circular",
  "নার্সিং": "nursing-admission-circular",
  "বিএসসি ও ডিপ্লোমা নার্সিং ভর্তি পরীক্ষা": "nursing-admission-circular",

  // General & Engineering Varsities
  "মেরিটাইম": "maritime-university-admission-circular",
  "বাংলাদেশ মেরিটাইম বিশ্ববিদ্যালয় (BMU)": "maritime-university-admission-circular",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান মেরিটাইম ইউনিভার্সিটি (BSMRMU)": "maritime-university-admission-circular",
  "হাবিপ্রবি": "hstu-admission-circular",
  "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (HSTU)": "hstu-admission-circular",
  "জাবি": "ju-jahangirnagar-admission-circular",
  "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)": "ju-jahangirnagar-admission-circular",
  "জবি": "jnu-jagannath-admission-circular",
  "জগন্নাথ বিশ্ববিদ্যালয় (JnU)": "jnu-jagannath-admission-circular",
  "চবি": "cu-chittagong-university-admission-circular",
  "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)": "cu-chittagong-university-admission-circular",
  "কুবি": "cou-comilla-university-admission-circular",
  "কুমিল্লা বিশ্ববিদ্যালয় (CoU)": "cou-comilla-university-admission-circular",
  "জাতীয় বিশ্ববিদ্যালয়": "nu-national-university-admission-circular",
  "জাতীয় বিশ্ববিদ্যালয় (NU)": "nu-national-university-admission-circular",
  "কৃষি গুচ্ছ": "agri-cluster-admission-circular",
  "কৃষি গুচ্ছ (৯টি কৃষি ও কৃষিভিত্তিক বিশ্ববিদ্যালয়)": "agri-cluster-admission-circular",
  "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)": "agri-cluster-admission-circular",
  "গুচ্ছ": "gst-general-cluster-admission-circular",
  "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)": "gst-general-cluster-admission-circular",
  "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)": "buet-admission-circular",
  "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)": "bup-admission-circular",
  "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)": "butex-admission-circular",
  "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি (MIST)": "mist-admission-circular",
  "এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয়,বাংলাদেশ (AAUB)": "bsmraau-aviation-aerospace-admission-circular",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয় (BSMRAAU)": "bsmraau-aviation-aerospace-admission-circular",
  "ঢাকা সেন্ট্রাল ইউনিভার্সিটি (DCU)": "dcu-admission-circular",
};

/**
 * Generate or resolve slug for any university name
 */
export function getCircularSlug(universityName: string): string {
  if (!universityName) return "admission-circular";
  const trimmed = universityName.trim();
  if (KNOWN_SLUG_MAP[trimmed]) {
    return KNOWN_SLUG_MAP[trimmed];
  }

  // Check case-insensitive / partial match
  for (const [key, slug] of Object.entries(KNOWN_SLUG_MAP)) {
    if (trimmed.toLowerCase() === key.toLowerCase()) {
      return slug;
    }
  }

  // Fallback slug generation
  const slugified = trimmed
    .replace(/[\(\)\[\]\{\}\.,\+\&_\/\\-]/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return `${encodeURIComponent(slugified)}-admission-circular`;
}

/**
 * Format Google Drive / Web PDF URLs to embedded player link
 */
export function getEmbedUrl(rawUrl: string): string {
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

/**
 * Fetch all circulars with their associated slugs and parsed metadata
 */
export async function getAllCirculars(): Promise<CircularItem[]> {
  let rawData: any[] = [];
  try {
    rawData = await fetchDataset("info");
  } catch {
    rawData = DEFAULT_INFO_DATA;
  }

  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
    rawData = DEFAULT_INFO_DATA;
  }

  // Add default items if any are missing from API
  const map = new Map<string, CircularItem>();

  for (const item of rawData) {
    const slug = getCircularSlug(item.university);
    map.set(slug, {
      ...item,
      slug,
      mark_distribution: item.mark_distribution || "অফিসিয়াল সার্কুলারে বিস্তারিত উল্লেখ রয়েছে।",
      center: item.center || "বিশ্ববিদ্যালয় ক্যাম্পাস",
      second_time: item.second_time || "সার্কুলার অনুযায়ী প্রযোজ্য",
      negative_mark: item.negative_mark || "০.২৫",
      pass_mark: item.pass_mark || "৪০%",
    });
  }

  // Ensure default items are also mapped if not present
  for (const def of DEFAULT_INFO_DATA) {
    const slug = getCircularSlug(def.university);
    if (!map.has(slug)) {
      map.set(slug, {
        ...def,
        slug,
      });
    }
  }

  return Array.from(map.values());
}

/**
 * Get a specific circular by slug
 */
export async function getCircularBySlug(slug: string): Promise<CircularItem | null> {
  const decodedSlug = decodeURIComponent(slug);
  const all = await getAllCirculars();
  
  const found = all.find(
    (item) => item.slug === slug || item.slug === decodedSlug || getCircularSlug(item.university) === slug || getCircularSlug(item.university) === decodedSlug
  );

  return found || null;
}
