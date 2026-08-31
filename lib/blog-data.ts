import { BlogPost, BlogFacultyUnit, BlogMarkDistribution, BlogFAQ, BlogLink, FacultyCategory } from "./admission-blogs/types";
import { ALL_ADMISSION_BLOGS, FACULTY_CATEGORIES, getBlogPostBySlug, getBlogPostByNumber } from "./admission-blogs";

export type { BlogPost, BlogFacultyUnit, BlogMarkDistribution, BlogFAQ, BlogLink, FacultyCategory };
export { ALL_ADMISSION_BLOGS, FACULTY_CATEGORIES, getBlogPostBySlug, getBlogPostByNumber };

// Export the complete 100 university & unit admission blogs
export const BLOG_POSTS: BlogPost[] = ALL_ADMISSION_BLOGS;
