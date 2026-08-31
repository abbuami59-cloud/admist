import { BlogPost, FacultyCategory } from "./types";
import { POSTS_1_TO_10 } from "./posts-1-to-10";
import { POSTS_11_TO_20 } from "./posts-11-to-20";
import { POSTS_21_TO_30 } from "./posts-21-to-30";
import { POSTS_31_TO_40 } from "./posts-31-to-40";
import { POSTS_41_TO_50 } from "./posts-41-to-50";
import { POSTS_51_TO_60 } from "./posts-51-to-60";
import { POSTS_61_TO_70 } from "./posts-61-to-70";
import { POSTS_71_TO_75 } from "./posts-71-to-75";
import { POSTS_76_TO_85 } from "./posts-76-to-85";
import { POSTS_86_TO_95 } from "./posts-86-to-95";
import { POSTS_96_TO_100 } from "./posts-96-to-100";

export * from "./types";

export const ALL_ADMISSION_BLOGS: BlogPost[] = [
  ...POSTS_1_TO_10,
  ...POSTS_11_TO_20,
  ...POSTS_21_TO_30,
  ...POSTS_31_TO_40,
  ...POSTS_41_TO_50,
  ...POSTS_51_TO_60,
  ...POSTS_61_TO_70,
  ...POSTS_71_TO_75,
  ...POSTS_76_TO_85,
  ...POSTS_86_TO_95,
  ...POSTS_96_TO_100,
];

export const FACULTY_CATEGORIES: { id: FacultyCategory | "all"; label: string; count: number; icon: string }[] = [
  { id: "all", label: "সকল পোস্ট (১০০টি পূর্ণাঙ্গ গাইড)", count: ALL_ADMISSION_BLOGS.length, icon: "GraduationCap" },
  { id: "engineering", label: "ইঞ্জিনিয়ারিং অনুষদ", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "engineering").length, icon: "Cpu" },
  { id: "agriculture", label: "কৃষি অনুষদ", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "agriculture").length, icon: "Wheat" },
  { id: "medicine", label: "মেডিকেল ও স্বাস্থ্য", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "medicine").length, icon: "HeartPulse" },
  { id: "architecture", label: "স্থাপত্য ও চারুকলা", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "architecture" || p.faculty === "fine_arts").length, icon: "Palette" },
  { id: "du_cluster", label: "ঢাকা বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "du_cluster" || p.id.startsWith("du-")).length, icon: "School" },
  { id: "jnu_cluster", label: "জগন্নাথ বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "jnu_cluster" || p.id.startsWith("jnu-")).length, icon: "Building2" },
  { id: "ju_cluster", label: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "ju_cluster" || p.id.startsWith("ju-")).length, icon: "Landmark" },
  { id: "cu_cluster", label: "চট্টগ্রাম বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "cu_cluster" || p.id.startsWith("cu-")).length, icon: "Waves" },
  { id: "ru_cluster", label: "রাজশাহী বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "ru_cluster" || p.id.startsWith("ru-")).length, icon: "Compass" },
  { id: "iba_business", label: "ব্যবসায় ও IBA", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "iba_business").length, icon: "Briefcase" },
  { id: "maritime_aviation", label: "মেরিটাইম ও বিশেষায়িত", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "maritime_aviation" || p.faculty === "bup_specialized" || p.faculty === "textile_eng").length, icon: "Anchor" },
  { id: "general_gst", label: "সাধারণ ও প্রযুক্তি বিশ্ববিদ্যালয়", count: ALL_ADMISSION_BLOGS.filter(p => p.faculty === "general_gst").length, icon: "Library" }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_ADMISSION_BLOGS.find(post => post.slug === slug || post.id === slug);
}

export function getBlogPostByNumber(num: number): BlogPost | undefined {
  return ALL_ADMISSION_BLOGS.find(post => post.itemNumber === num);
}
