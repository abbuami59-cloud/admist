import { DEFAULT_RESULT_DATA, ResultItem } from "./default-datasets";
import { fetchDataset } from "./server-fetch";

export interface ResultDetailItem extends ResultItem {
  slug: string;
  cleanTitle: string;
}

export const sanitizeResultTitle = (text: string): string => {
  if (!text) return "";
  return text.replace(/[✅✔️✔]/g, "").trim();
};

export const KNOWN_RESULT_SLUGS: Record<string, string> = {
  "AAUB": "aaub-admission-result",
  "এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয়,বাংলাদেশ (AAUB)": "aaub-admission-result",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান এভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয় (BSMRAAU)": "aaub-admission-result",
  "AFMC": "afmc-admission-result",
  "আর্মড ফোর্সেস মেডিকেল কলেজ (AFMC)": "afmc-admission-result",
  "BUET": "buet-admission-result",
  "BUET(শর্টলিস্ট)- 17 Dec": "buet-shortlist-admission-result",
  "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)": "buet-admission-result",
  "BUP": "bup-admission-result",
  "BUP(শর্টলিস্ট)": "bup-shortlist-admission-result",
  "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)": "bup-admission-result",
  "BUTEX(শর্টলিস্ট)-21 Dec": "butex-shortlist-admission-result",
  "BUTEX": "butex-admission-result",
  "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)": "butex-admission-result",
  "Comilla University": "comilla-university-admission-result",
  "কুমিল্লা বিশ্ববিদ্যালয় (CoU)": "comilla-university-admission-result",
  "CU (A,D,D1)": "cu-a-d-d1-unit-admission-result",
  "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - A, B, C, D ইউনিট": "cu-a-d-d1-unit-admission-result",
  "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)": "cu-chittagong-admission-result",
  "CUET(শর্টলিস্ট)-06 Jan": "cuet-shortlist-admission-result",
  "CUET": "cuet-admission-result",
  "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (CUET)": "cuet-admission-result",
  "DCU": "dcu-admission-result",
  "ঢাকা সেন্ট্রাল ইউনিভার্সিটি (DCU)": "dcu-admission-result",
  "DU B": "du-b-unit-admission-result",
  "HSTU": "hstu-admission-result",
  "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (HSTU)": "hstu-admission-result",
  "JnU (A,C)": "jnu-a-c-unit-admission-result",
  "জগন্নাথ বিশ্ববিদ্যালয় (JnU) - A, C ইউনিট": "jnu-a-c-unit-admission-result",
  "জগন্নাথ বিশ্ববিদ্যালয় (JnU)": "jnu-a-c-unit-admission-result",
  "KUET": "kuet-admission-result",
  "KUET(শর্টলিস্ট)": "kuet-shortlist-admission-result",
  "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)": "kuet-admission-result",
  "MIST C Unit": "mist-c-unit-admission-result",
  "MIST(শর্টলিস্ট)": "mist-shortlist-admission-result",
  "MIST": "mist-admission-result",
  "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি (MIST)": "mist-admission-result",
  "RU A,B,C": "ru-a-b-c-unit-admission-result",
  "রাজশাহী বিশ্ববিদ্যালয় (RU) - A, B, C ইউনিট": "ru-a-b-c-unit-admission-result",
  "রাজশাহী বিশ্ববিদ্যালয় (RU)": "ru-rajshahi-admission-result",
  "RUET": "ruet-admission-result",
  "RUET(শর্টলিস্ট)-03 Jan": "ruet-shortlist-admission-result",
  "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET)": "ruet-admission-result",
  "SUST": "sust-admission-result",
  "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (SUST)": "sust-admission-result",
  "কৃষি গুচ্ছ": "agri-cluster-admission-result",
  "কৃষি গুচ্ছ (Agri Cluster)": "agri-cluster-admission-result",
  "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)": "agri-cluster-admission-result",
  "খুলনা বিশ্ববিদ্যালয়": "ku-khulna-university-admission-result",
  "খুলনা বিশ্ববিদ্যালয় (KU)": "ku-khulna-university-admission-result",
  "গুচ্ছ C": "gst-c-unit-admission-result",
  "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST)": "gst-cluster-admission-result",
  "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)": "gst-cluster-admission-result",
  "জাবি(A,B,C,D,E,IBA)": "ju-jahangirnagar-admission-result",
  "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - সকল ইউনিট": "ju-jahangirnagar-admission-result",
  "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)": "ju-jahangirnagar-admission-result",
  "ঢাবি (IBA)": "du-iba-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - আইবিএ (IBA)": "du-iba-admission-result",
  "ঢাবি বিজ্ঞান": "du-science-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'ক' ইউনিট (বিজ্ঞান)": "du-science-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'খ' ইউনিট (কলা, আইন ও সামাজিক বিজ্ঞান)": "du-arts-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'খ' ইউনিট (কলা ও আইন)": "du-arts-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'গ' ইউনিট (ব্যবসায়)": "du-business-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'গ' ইউনিট (ব্যবসায় শিক্ষা)": "du-business-unit-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'চ' ইউনিট (চারুকলা)": "du-fine-arts-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় (DU) - 'চ' ইউনিট (চারুকলা অনুষদ)": "du-fine-arts-admission-result",
  "ঢাবি(চারু)": "du-fine-arts-admission-result",
  "মেডিকেল ও ডেন্টাল": "medical-dental-admission-result",
  "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)": "medical-dental-admission-result",
  "মেডিকেল ভর্তি পরীক্ষা (MBBS)": "medical-mbbs-admission-result",
  "ডেন্টাল ভর্তি পরীক্ষা (BDS)": "dental-bds-admission-result",
  "মেরিটাইম ইউনিভার্সিটি": "maritime-university-admission-result",
  "বাংলাদেশ মেরিটাইম বিশ্ববিদ্যালয় (BMU)": "maritime-university-admission-result",
  "বঙ্গবন্ধু শেখ মুজিবুর রহমান মেরিটাইম ইউনিভার্সিটি (BSMRMU)": "maritime-university-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ কলেজ": "du-7-college-admission-result",
  "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ": "du-7-college-admission-result",
};

export function getResultSlug(universityName: string): string {
  if (!universityName) return "admission-result";
  const clean = sanitizeResultTitle(universityName);
  
  if (KNOWN_RESULT_SLUGS[clean]) {
    return KNOWN_RESULT_SLUGS[clean];
  }

  for (const [key, slug] of Object.entries(KNOWN_RESULT_SLUGS)) {
    if (clean.toLowerCase() === key.toLowerCase()) {
      return slug;
    }
  }

  const slugified = clean
    .replace(/[\(\)\[\]\{\}\.,\+\&_\/\\-]/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return `${encodeURIComponent(slugified)}-result`;
}

export function formatResultEmbedUrl(rawUrl: string): string {
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

export async function getAllResults(): Promise<ResultDetailItem[]> {
  let rawData: any[] = [];
  try {
    rawData = await fetchDataset("result");
  } catch {
    rawData = DEFAULT_RESULT_DATA;
  }

  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
    rawData = DEFAULT_RESULT_DATA;
  }

  const map = new Map<string, ResultDetailItem>();

  for (const item of rawData) {
    const slug = getResultSlug(item.university);
    const cleanTitle = sanitizeResultTitle(item.university);
    map.set(slug, {
      ...item,
      slug,
      cleanTitle,
    });
  }

  for (const def of DEFAULT_RESULT_DATA) {
    const slug = getResultSlug(def.university);
    if (!map.has(slug)) {
      map.set(slug, {
        ...def,
        slug,
        cleanTitle: sanitizeResultTitle(def.university),
      });
    }
  }

  return Array.from(map.values());
}

export async function getResultBySlug(slug: string): Promise<ResultDetailItem | null> {
  const decodedSlug = decodeURIComponent(slug);
  const all = await getAllResults();
  
  const found = all.find(
    (item) => item.slug === slug || item.slug === decodedSlug || getResultSlug(item.university) === slug || getResultSlug(item.university) === decodedSlug
  );

  return found || null;
}
