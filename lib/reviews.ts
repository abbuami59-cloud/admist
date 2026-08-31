import fs from 'fs';
import path from 'path';
import { reviewsList } from '@/data/reviews-list';

export interface SubjectReviewMeta {
  id: number;
  slug: string;
  title: string;
}

export interface SubjectReview extends SubjectReviewMeta {
  content: string;
  url?: string;
}

export interface TableOfContentItem {
  id: string;
  text: string;
  level: number;
}

export interface SubjectCategoryInfo {
  id: string;
  name: string;
  facultyBn: string;
  badgeBg: string;
  badgeText: string;
  borderClass: string;
}

export function getAllReviews(): SubjectReviewMeta[] {
  return reviewsList;
}

export async function getReviewBySlug(rawSlug: string): Promise<SubjectReview | null> {
  try {
    const decodedSlug = decodeURIComponent(rawSlug);
    const matched = reviewsList.find(
      (r) => r.slug === rawSlug || r.slug === decodedSlug || decodeURIComponent(r.slug) === decodedSlug
    );

    const targetSlug = matched ? matched.slug : rawSlug;

    // Direct fs read on server-side
    const filePath = path.join(process.cwd(), 'data', 'reviews', `${targetSlug}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = await fs.promises.readFile(filePath, 'utf8');
      return JSON.parse(fileData) as SubjectReview;
    }

    // Try decoded file name
    const decodedFilePath = path.join(process.cwd(), 'data', 'reviews', `${decodeURIComponent(targetSlug)}.json`);
    if (fs.existsSync(decodedFilePath)) {
      const fileData = await fs.promises.readFile(decodedFilePath, 'utf8');
      return JSON.parse(fileData) as SubjectReview;
    }

    return null;
  } catch (error) {
    console.error(`Could not load review for slug: ${rawSlug}`, error);
    return null;
  }
}

export function getSubjectCategoryInfo(title: string, slug: string): SubjectCategoryInfo {
  const text = (title + ' ' + slug).toLowerCase();

  if (/(?:quantum|aerospace|astronautical|neuro-ai|cognitive|cyber-warfare|genomic|swarm|synthetic-biology|fusion|plasma|space-law|astrobiology|nanoengineering|algorithmic-trading|actuarial|কোয়ান্টাম|অ্যারোস্পেস|মহাকাশ|জিনোমিক|নিউরো|সোয়ার্ম|ন্যানো)/i.test(text)) {
    return {
      id: 'frontier',
      name: 'গ্লোবাল ফ্রন্টিয়ার ও কাটিং-এজ',
      facultyBn: 'Faculty of Global Emerging & Frontier Sciences',
      badgeBg: 'bg-purple-50 dark:bg-purple-950/60',
      badgeText: 'text-purple-700 dark:text-purple-300',
      borderClass: 'border-purple-200 dark:border-purple-800'
    };
  }

  if (/(?:engineering|cse|eee|civil|mechanical|ipe|bme|swe|architecture|ece|ete|mte|mse|pme|ae|gce|textile|becm|ice|chemical|acce|ইঞ্জিনিয়ারিং|কৌশল|প্রকৌশল|স্থাপত্য)/i.test(text)) {
    return {
      id: 'eng',
      name: 'ইঞ্জিনিয়ারিং ও প্রযুক্তি',
      facultyBn: 'Faculty of Engineering & Technology',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
      borderClass: 'border-emerald-200 dark:border-emerald-800'
    };
  }

  if (/(?:pharmacy|bds|dental|medical|bmb|biochemistry|microbiology|genetic|geb|botany|zoology|veterinary|animal|fisheries|agriculture|soil|forestry|বায়োকেমিস্ট্রি|ফার্মেসি|অণুজীববিজ্ঞান|কৃষি|প্রাণরসায়ন|মৎস্য|বনবিদ্যা|উদ্ভিদবিজ্ঞান)/i.test(text)) {
    return {
      id: 'bio',
      name: 'বায়ো ও লাইফ সায়েন্সেস',
      facultyBn: 'Faculty of Biological Sciences',
      badgeBg: 'bg-teal-50 dark:bg-teal-950/60',
      badgeText: 'text-teal-700 dark:text-teal-300',
      borderClass: 'border-teal-200 dark:border-teal-800'
    };
  }

  if (/(?:bba|accounting|finance|marketing|management|banking|ব্যবসায়|হিসাববিজ্ঞান|ফিন্যান্স|মার্কেটিং|ব্যবস্থাপনা|ব্যাংকিং)/i.test(text)) {
    return {
      id: 'biz',
      name: 'ব্যবসায় প্রশাসন ও বাণিজ্য',
      facultyBn: 'Faculty of Business Studies',
      badgeBg: 'bg-blue-50 dark:bg-blue-950/60',
      badgeText: 'text-blue-700 dark:text-blue-300',
      borderClass: 'border-blue-200 dark:border-blue-800'
    };
  }

  if (/(?:physics|chemistry|math|mathematics|statistics|geography|oceanography|marine|পদার্থবিজ্ঞান|রসায়ন|গণিত|পরিসংখ্যান)/i.test(text)) {
    return {
      id: 'sci',
      name: 'বিজ্ঞান ও ফলিত বিজ্ঞান',
      facultyBn: 'Faculty of Science',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
      badgeText: 'text-indigo-700 dark:text-indigo-300',
      borderClass: 'border-indigo-200 dark:border-indigo-800'
    };
  }

  return {
    id: 'arts',
    name: 'মানবিক, আইন ও সামাজিক বিজ্ঞান',
    facultyBn: 'Faculty of Arts & Social Sciences',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60',
    badgeText: 'text-amber-700 dark:text-amber-300',
    borderClass: 'border-amber-200 dark:border-amber-800'
  };
}

export function extractHeadingsFromHtml(html: string): TableOfContentItem[] {
  const headings: TableOfContentItem[] = [];
  const headingRegex = /<h([23])(?:\s+[^>]*?id=["']([^"']+)["'][^>]*|\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi;
  
  let match;
  let index = 0;
  while ((match = headingRegex.exec(html)) !== null) {
    index++;
    const level = parseInt(match[1], 10);
    let id = match[2];
    const rawText = match[3];
    const text = rawText.replace(/<[^>]+>/g, '').trim();

    if (!id) {
      id = `heading-${index}`;
    }

    if (text) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

export function toBengaliNumeral(num: number): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
}

export function calculateReviewStats(html: string): { words: number; readingMinutes: number; wordsBn: string; readingMinutesBn: string } {
  const plainText = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plainText.length > 0 ? plainText.split(/\s+/).length : 0;
  const readingMinutes = Math.max(1, Math.ceil(words / 170));

  return {
    words,
    readingMinutes,
    wordsBn: toBengaliNumeral(words),
    readingMinutesBn: toBengaliNumeral(readingMinutes),
  };
}

export function generatePlainExcerpt(html: string, maxLength: number = 160): string {
  const plainText = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
}

export function getRelatedReviews(rawSlug: string, count: number = 6): SubjectReviewMeta[] {
  const decodedSlug = decodeURIComponent(rawSlug);
  const current = reviewsList.find(
    (r) => r.slug === rawSlug || r.slug === decodedSlug || decodeURIComponent(r.slug) === decodedSlug
  );

  if (!current) {
    return reviewsList.slice(0, count);
  }

  const currentTitle = (current.title + ' ' + current.slug).toLowerCase();

  // Category keyword sets
  const isEng = /(?:engineering|cse|eee|civil|mechanical|ipe|bme|swe|architecture|ece|ete|mte|mse|pme|ae|gce|textile|becm|ice|chemical|acce|ইঞ্জিনিয়ারিং|কৌশল|প্রকৌশল|স্থাপত্য)/i.test(currentTitle);
  const isBio = /(?:pharmacy|bds|dental|medical|bmb|biochemistry|microbiology|genetic|geb|botany|zoology|veterinary|animal|fisheries|agriculture|soil|forestry|বায়োকেমিস্ট্রি|ফার্মেসি|অণুজীববিজ্ঞান|কৃষি|প্রাণরসায়ন|মৎস্য|বনবিদ্যা|উদ্ভিদবিজ্ঞান)/i.test(currentTitle);
  const isBiz = /(?:bba|accounting|finance|marketing|management|banking|ব্যবসায়|হিসাববিজ্ঞান|ফিন্যান্স|মার্কেটিং|ব্যবস্থাপনা|ব্যাংকিং)/i.test(currentTitle);
  const isSocialOrArts = /(?:law|economics|english|bangla|bengali|sociology|anthropology|public administration|pad|international|journalism|psychology|fine art|ier|farsi|history|আইন|অর্থনীতি|ইংরেজি|সমাজবিজ্ঞান|লোকপ্রশাসন|সাংবাদিকতা|মনোবিজ্ঞান|চারুকলা|ক্রিমিনোলজি)/i.test(currentTitle);
  const isSci = /(?:physics|chemistry|math|mathematics|statistics|geography|oceanography|marine|পদার্থবিজ্ঞান|রসায়ন|গণিত|পরিসংখ্যান)/i.test(currentTitle);

  const matchedList: SubjectReviewMeta[] = [];

  for (const item of reviewsList) {
    if (item.slug === current.slug) continue;
    const targetText = (item.title + ' ' + item.slug).toLowerCase();

    let score = 0;
    if (isEng && /(?:engineering|cse|eee|civil|mechanical|ipe|bme|swe|architecture|ece|ete|mte|mse|pme|ae|gce|textile|becm|ice|chemical|acce|ইঞ্জিনিয়ারিং|কৌশল|প্রকৌশল|স্থাপত্য)/i.test(targetText)) score += 3;
    if (isBio && /(?:pharmacy|bds|dental|medical|bmb|biochemistry|microbiology|genetic|geb|botany|zoology|veterinary|animal|fisheries|agriculture|soil|forestry|বায়োকেমিস্ট্রি|ফার্মেসি|অণুজীববিজ্ঞান|কৃষি|প্রাণরসায়ন|মৎস্য|বনবিদ্যা|উদ্ভিদবিজ্ঞান)/i.test(targetText)) score += 3;
    if (isBiz && /(?:bba|accounting|finance|marketing|management|banking|ব্যবসায়|হিসাববিজ্ঞান|ফিন্যান্স|মার্কেটিং|ব্যবস্থাপনা|ব্যাংকিং)/i.test(targetText)) score += 3;
    if (isSocialOrArts && /(?:law|economics|english|bangla|bengali|sociology|anthropology|public administration|pad|international|journalism|psychology|fine art|ier|farsi|history|আইন|অর্থনীতি|ইংরেজি|সমাজবিজ্ঞান|লোকপ্রশাসন|সাংবাদিকতা|মনোবিজ্ঞান|চারুকলা|ক্রিমিনোলজি)/i.test(targetText)) score += 3;
    if (isSci && /(?:physics|chemistry|math|mathematics|statistics|geography|oceanography|marine|পদার্থবিজ্ঞান|রসায়ন|গণিত|পরিসংখ্যান)/i.test(targetText)) score += 3;

    if (score > 0) {
      matchedList.push(item);
    }
  }

  // Fill up with others if not enough
  if (matchedList.length < count) {
    for (const item of reviewsList) {
      if (item.slug !== current.slug && !matchedList.some(m => m.slug === item.slug)) {
        matchedList.push(item);
        if (matchedList.length >= count) break;
      }
    }
  }

  return matchedList.slice(0, count);
}
