import { MetadataRoute } from "next";
import { ALL_ADMISSION_BLOGS } from "@/lib/admission-blogs";
import { reviewsList } from "@/data/reviews-list";
import { getAllCirculars } from "@/lib/circulars";
import { getAllAdmits } from "@/lib/admits";
import { getAllResults } from "@/lib/results";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";
  
  // Stable dates for Google Search Console validation
  const today = new Date();
  const recentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const stableBlogDate = new Date("2026-08-25T00:00:00.000Z");
  const stableReviewDate = new Date("2026-08-28T00:00:00.000Z");
  const stableToolDate = new Date("2026-08-01T00:00:00.000Z");

  // Core Landing & Index Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/subject-review`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/info`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admit`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/result`,
      lastModified: recentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/calculator`,
      lastModified: stableToolDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/resizer`,
      lastModified: stableToolDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic routes for all 100+ admission blogs
  const blogRoutes: MetadataRoute.Sitemap = ALL_ADMISSION_BLOGS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: stableBlogDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic routes for all 158+ specialized subject reviews
  const subjectReviewRoutes: MetadataRoute.Sitemap = reviewsList.map((review) => ({
    url: `${baseUrl}/subject-review/${review.slug}`,
    lastModified: stableReviewDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic routes for all university admission circular PDFs
  const circulars = await getAllCirculars();
  const circularRoutes: MetadataRoute.Sitemap = circulars.map((item) => ({
    url: `${baseUrl}/info/${item.slug}`,
    lastModified: recentDate,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Dynamic routes for all university admit card portals
  const admits = await getAllAdmits();
  const admitRoutes: MetadataRoute.Sitemap = admits.map((item) => ({
    url: `${baseUrl}/admit/${item.slug}`,
    lastModified: recentDate,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Dynamic routes for all university admission results
  const results = await getAllResults();
  const resultRoutes: MetadataRoute.Sitemap = results.map((item) => ({
    url: `${baseUrl}/result/${item.slug}`,
    lastModified: recentDate,
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // De-duplicate any potentially overlapping URLs
  const combined = [
    ...staticRoutes,
    ...blogRoutes,
    ...subjectReviewRoutes,
    ...circularRoutes,
    ...admitRoutes,
    ...resultRoutes,
  ];

  const uniqueMap = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of combined) {
    if (!uniqueMap.has(entry.url)) {
      uniqueMap.set(entry.url, entry);
    }
  }

  return Array.from(uniqueMap.values());
}
