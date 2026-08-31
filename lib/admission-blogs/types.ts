export interface BlogFacultyUnit {
  unit: string;
  description: string;
  seats: string;
}

export interface BlogMarkDistribution {
  subject: string;
  marks: string;
}

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogLink {
  label: string;
  url: string;
  badge?: string;
  type?: 'apply' | 'circular' | 'result' | 'official';
}

export type FacultyCategory = 
  | 'all'
  | 'du_cluster'
  | 'ju_cluster'
  | 'ru_cluster'
  | 'cu_cluster'
  | 'jnu_cluster'
  | 'ku_cluster'
  | 'bup_specialized'
  | 'textile_eng'
  | 'engineering'
  | 'medicine'
  | 'agriculture'
  | 'architecture'
  | 'iba_business'
  | 'general_gst'
  | 'maritime_aviation'
  | 'specialized_tech'
  | 'seven_colleges'
  | 'nursing_specialized'
  | 'fine_arts'
  | 'national_univ';

export interface BlogPost {
  itemNumber: number; // 1 to 75 as requested
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  faculty: FacultyCategory;
  facultyName: string;
  universityName: string;
  unitCode: string;
  readTime: string;
  publishDate: string;
  featured?: boolean;
  coverGradient: string;
  seoKeywords: string[];
  summary: string;
  quickHighlights: {
    duration: string;
    eligibility: string;
    examFormat: string;
    totalSeats: string;
    resultStatus: string;
  };
  content: {
    overview: string;
    facultiesAndUnits: BlogFacultyUnit[];
    admissionRequirements: {
      ssc_hsc: string;
      subjectRequirements: string;
      secondTimeAllowed: string;
      minimumGpa: string;
    };
    applicationProcess: {
      stepNumber: number;
      title: string;
      description: string;
    }[];
    examPattern: {
      type: string;
      duration: string;
      negativeMarking: string;
      passMarks: string;
      distribution: BlogMarkDistribution[];
    };
    importantLinks: BlogLink[];
    preparationTips: string[];
    faqs: BlogFAQ[];
  };
}
