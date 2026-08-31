import { BlogPost } from "./types";

export const POSTS_1_TO_10: BlogPost[] = [
  {
    itemNumber: 1,
    id: "du-iba-bba-admission-guide-2026",
    slug: "du-iba-admission-guide-2026",
    title: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি), IBA: বিসিএস ও কর্পোরেট সেরা ডিগ্রি BBA ভর্তি গাইড 2026",
    subtitle: "ইনস্টিটিউট অব বিজনেস অ্যাডমিনিস্ট্রেশন (IBA-DU) BBA ভর্তির ইংরেজি, ম্যাথ, অ্যানালিটিক্যাল ও ভাইভা পূর্ণাঙ্গ গাইডলাইন",
    faculty: "iba_business",
    facultyName: "💼 IBA ও বিজনেস (IBA-DU)",
    universityName: "ঢাকা বিশ্ববিদ্যালয় (University of Dhaka)",
    unitCode: "IBA (BBA)",
    readTime: "৮ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: true,
    coverGradient: "from-blue-900 via-indigo-950 to-slate-900",
    seoKeywords: ["DU IBA BBA admission 2026", "ঢাবি আইবিএ ভর্তি পরীক্ষা", "IBA math english analytical syllabus", "DU IBA viva marks"],
    summary: "দেশের শীর্ষ বিজনেস স্কুল IBA-DU তে ১০০ নম্বরের ভর্তি পরীক্ষা (ম্যাথ, ইংলিশ ও অ্যানালিটিক্যাল) এবং উত্তীর্ণদের জন্য ভাইভা নির্দেশিকা। মোট ১২০ আসনে বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা সব বিভাগের শিক্ষার্থীরা আবেদন করতে পারেন।",
    quickHighlights: {
      duration: "আবেদন: ডিসেম্বর - জানুয়ারি",
      eligibility: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৮.০০ (উভয়টিতে ন্যূনতম ৩.৫০)",
      examFormat: "৭৫ নম্বরের MCQ (ইংলিশ ৩০, ম্যাথ ৩০, অ্যানালিটিক্যাল ১৫) + ২৫ নম্বরের রিটেন + ভাইভা",
      totalSeats: "১২০ টি আসন (সকল বিভাগের জন্য উন্মুক্ত)",
      resultStatus: "লিখিত পরীক্ষার পর ভাইভার মাধ্যমে চূড়ান্ত মেধা তালিকা"
    },
    content: {
      overview: "ঢাকা বিশ্ববিদ্যালয় ইনস্টিটিউট অব বিজনেস অ্যাডমিনিস্ট্রেশন (IBA) বাংলাদেশের সবচেয়ে মর্যাদাপূর্ণ বিজনেস স্কুল। এর গ্র্যাজুয়েটরা বহুজাতিক প্রতিষ্ঠান, ইনভেস্টমেন্ট ব্যাংকিং ও গ্লোবাল কনসাল্টিংয়ে নেতৃত্ব দেন।",
      facultiesAndUnits: [
        { unit: "BBA Program", description: "Finance, Marketing, HRM, Operations & Supply Chain, Accounting Information Systems", seats: "১২০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা যেকোনো শাখা থেকে পাস হতে হবে।",
        subjectRequirements: "ইংরেজি এবং গণিতে শক্ত বেসিক দক্ষতা থাকতে হবে।",
        secondTimeAllowed: "না (ঢাকা বিশ্ববিদ্যালয়ের নিয়মে কোনো সেকেন্ড টাইম নেই)।",
        minimumGpa: "এসএসসি ও এইচএসসি উভয় পরীক্ষায় ন্যূনতম জিপিএ ৩.৫০ সহ মোট ৮.০০।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "IBA অনলাইন পোর্টালে ফর্ম পূরণ", description: "iba-du.edu অথবা du admission পোর্টালে তথ্য প্রদান ও ছবি আপলোড।" },
        { stepNumber: 2, title: "আবেদন ফি প্রদান", description: "অনলাইন ব্যাংকিং বা কার্ডের মাধ্যমে ফি জমা দিন।" },
        { stepNumber: 3, title: "লিখিত পরীক্ষায় অংশগ্রহণ", description: "১০০ নম্বরের লিখিত ও বর্ণনামূলক পরীক্ষায় অংশ নেওয়া।" },
        { stepNumber: 4, title: "কমিউনিকেশন ও ভাইভা (Interview)", description: "লিখিত পরীক্ষায় উত্তীর্ণদের জন্য ভাইভা ও চূড়ান্ত নির্বাচন।" }
      ],
      examPattern: {
        type: "MCQ (৭৫ নম্বর) + লিখিত বর্ণনামূলক রচনা/অনুবাদ (২৫ নম্বর)।",
        duration: "২ ঘণ্টা (১২০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "প্রতিটি সেকশনে (English, Math, Analytical) আলাদাভাবে পাস মার্কস অর্জন আবশ্যক।",
        distribution: [
          { subject: "Language & Communication (English)", marks: "৩০ নম্বর" },
          { subject: "Mathematics & Quantitative Aptitude", marks: "৩০ নম্বর" },
          { subject: "Analytical Ability & Critical Reasoning", marks: "১৫ নম্বর" },
          { subject: "Written English / Descriptive Essay", marks: "২৫ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "IBA Official Website", url: "https://www.iba-du.edu", badge: "IBA Portal", type: "official" },
        { label: "DU Admission Central Portal", url: "https://admission.eis.du.ac.bd", badge: "DU Admission", type: "apply" }
      ],
      preparationTips: [
        "SAT ও GMAT প্যাটার্নের কোয়ান্টিটেটিভ ও রিডিং কম্প্রিহেনশন নিয়মিত চর্চা করুন।",
        "অ্যানালিটিক্যাল পাজল ও ক্রিটিক্যাল রিজনিংয়ের জন্য ব্যারন্স বা ক্ল্যাসিক প্র্যাকটিস সেট সমাধান করুন।",
        "টাইম ম্যানেজমেন্ট খুবই গুরুত্বপূর্ণ — প্রতিটি প্রশ্নের জন্য ১ মিনিটের কম সময় পাওয়া যায়।"
      ],
      faqs: [
        { q: "আইবিএ-তে কি মানবিকের ছাত্ররা আবেদন করতে পারে?", a: "হ্যাঁ, যেকোনো গ্রুপের শিক্ষার্থীরা সমভাবে আবেদন করতে পারেন।" },
        { q: "আইবিএ-তে কি ক্যালকুলেটর ব্যবহার করা যায়?", a: "না, পরীক্ষায় কোনো প্রকার ক্যালকুলেটর ব্যবহার করা যায় না।" }
      ]
    }
  },
  {
    itemNumber: 2,
    id: "du-a-unit-science-admission-guide-2026",
    slug: "du-a-unit-admission-guide-2026",
    title: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি), A (বিজ্ঞান): বিজ্ঞান অনুষদ ভর্তি গাইড 2026",
    subtitle: "সিএসই, ট্রিপলই, ফার্মেসি, সফটওয়্যার ইঞ্জিনিয়ারিং ও জেনেটিক্স ভর্তির পূর্ণাঙ্গ সিলেবাস ও কৌশল",
    faculty: "du_cluster",
    facultyName: "🎓 ঢাকা বিশ্ববিদ্যালয় (DU A Unit)",
    universityName: "ঢাকা বিশ্ববিদ্যালয় (University of Dhaka)",
    unitCode: "A Unit (বিজ্ঞান অনুষদ)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: true,
    coverGradient: "from-sky-700 via-blue-900 to-indigo-950",
    seoKeywords: ["DU A Unit admission 2026", "ঢাবি ক ইউনিট ভর্তি পরীক্ষা", "DU Science unit cut off", "DU written exam syllabus"],
    summary: "ঢাকা বিশ্ববিদ্যালয় বিজ্ঞান অনুষদের ১৮৫১টি আসনে ভর্তির জন্য ৬০ নম্বরের MCQ ও ৪০ নম্বরের লিখিত পরীক্ষার প্রস্তুতি নির্দেশিকা। পদার্থ, রসায়ন, গণিত ও জীববিজ্ঞানের নম্বর বণ্টন ও জিপিএ রিকোয়ারমেন্ট।",
    quickHighlights: {
      duration: "আবেদন: ডিসেম্বর - জানুয়ারি",
      eligibility: "এসএসসি ও এইচএসসি উভয়টিতে বিজ্ঞান শাখা সহ মোট জিপিএ ৮.৫০ (ন্যূনতম ৩.৫০)",
      examFormat: "৬০ নম্বরের MCQ + ৪০ নম্বরের রিটেন (মোট ১০০ নম্বর) + জিপিএ ২০ = ১২০",
      totalSeats: "১,৮৫১ টি আসন",
      resultStatus: "লিখিত খাতা মূল্যায়নের পর মেধা তালিকা প্রকাশ"
    },
    content: {
      overview: "ঢাকা বিশ্ববিদ্যালয়ের 'বিজ্ঞান ইউনিট' দেশের মেধাবী সায়েন্স শিক্ষার্থীদের প্রধান পছন্দের অন্যতম। সিএসই, ইইই, জেনেটিক ইঞ্জিনিয়ারিং, অ্যাপ্লায়েড কেমিস্ট্রি, মাইক্রোবায়োলজি ও ফার্মেসির মতো ডিপার্টমেন্টে পড়ার সুযোগ হয় এখানে।",
      facultiesAndUnits: [
        { unit: "বিজ্ঞান, জীববিজ্ঞান, ফার্মেসি ও আর্থ সায়েন্স অনুষদ", description: "CSE, EEE, Genetic Engg, Pharmacy, Software Engg, Chemistry, Physics, Applied Math", seats: "১,৮৫১ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "এসএসসি ও এইচএসসি উভয় পরীক্ষায় বিজ্ঞান গ্রুপ থাকতে হবে।",
        subjectRequirements: "পদার্থবিজ্ঞান, রসায়ন ও গণিত/জীববিজ্ঞান বিষয় থাকতে হবে।",
        secondTimeAllowed: "না (ঢাবিতে সেকেন্ড টাইম নেই)।",
        minimumGpa: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৮.৫০ (উভয়টিতে ৩.৫০)।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "ঢাবি অনলাইন পোর্টালে (admission.eis.du.ac.bd) আবেদন", description: "রোল, রেজিস্ট্রেশন ও ছবি আপলোড।" },
        { stepNumber: 2, title: "ফি প্রদান", description: "মোবাইল ব্যাংকিং বা সোনালী/জনতা ব্যাংকের মাধ্যমে ১,০৫০ টাকা পরিশোধ।" },
        { stepNumber: 3, title: "পরীক্ষা কেন্দ্র নির্বাচন", description: "৮টি বিভাগীয় শহরের নির্ধারিত কেন্দ্র থেকে পছন্দ নির্বাচন।" },
        { stepNumber: 4, title: "প্রবেশপত্র ডাউনলোড ও পরীক্ষায় অংশগ্রহণ", description: "নির্দিষ্ট তারিখে ৬০ নম্বরের MCQ ও ৪০ নম্বরের লিখিত পরীক্ষা।" }
      ],
      examPattern: {
        type: "৬০ নম্বরের MCQ (৪৫ মিনিট) + ৪০ নম্বরের সংক্ষিপ্ত লিখিত পরীক্ষা (৪৫ মিনিট)।",
        duration: "১ ঘণ্টা ৩০ মিনিট (৯০ মিনিট)",
        negativeMarking: "MCQ-তে প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "MCQ তে ন্যূনতম ২৪ নম্বর এবং লিখিত পরীক্ষায় ন্যূনতম ১২ নম্বর (মোট ন্যূনতম ৪০)।",
        distribution: [
          { subject: "পদার্থবিজ্ঞান (Physics)", marks: "MCQ ১৫ + লিখিত ১০ = ২৫" },
          { subject: "রসায়ন (Chemistry)", marks: "MCQ ১৫ + লিখিত ১০ = ২৫" },
          { subject: "উচ্চতর গণিত (Higher Math)", marks: "MCQ ১৫ + লিখিত ১০ = ২৫" },
          { subject: "জীববিজ্ঞান / বাংলা / ইংরেজি", marks: "MCQ ১৫ + লিখিত ১০ = ২৫" }
        ]
      },
      importantLinks: [
        { label: "DU Admission Official Portal", url: "https://admission.eis.du.ac.bd", badge: "DU Portal", type: "official" }
      ],
      preparationTips: [
        "লিখিত অংশের জন্য মূল সূত্রের প্রতিপাদন ও গাণিতিক সমস্যার ৩-৪ লাইনের সংক্ষিপ্ত সমাধান অনুশীলন করুন।",
        "এইচএসসি পাঠ্যবইয়ের থিওরিটিক্যাল কনসেপ্ট একদম স্বচ্ছ রাখুন।"
      ],
      faqs: [
        { q: "ম্যাথের বদলে বাংলা/ইংরেজি দাগানো যাবে কি?", a: "হ্যাঁ, যদি গণিত আপনার ৪র্থ বিষয় হয়, তবে গণিতের পরিবর্তে বাংলা বা ইংরেজি উত্তর করতে পারবেন। তবে সেক্ষেত্রে গণিত নির্ভর সাবজেক্ট পাওয়া যাবে না।" }
      ]
    }
  },
  {
    itemNumber: 3,
    id: "du-b-unit-arts-admission-guide-2026",
    slug: "du-b-unit-admission-guide-2026",
    title: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি), B (মানবিক): কলা, আইন ও সামাজিক বিজ্ঞান ইউনিট ভর্তি গাইড 2026",
    subtitle: "আইন, অর্থনীতি, ইংরেজি, আন্তর্জাতিক সম্পর্ক ও সাংবাদিকতা বিভাগের পূর্ণাঙ্গ গাইডলাইন",
    faculty: "du_cluster",
    facultyName: "🎓 ঢাকা বিশ্ববিদ্যালয় (DU B Unit)",
    universityName: "ঢাকা বিশ্ববিদ্যালয় (University of Dhaka)",
    unitCode: "B Unit (কলা, আইন ও সামাজিক বিজ্ঞান)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: true,
    coverGradient: "from-purple-900 via-violet-950 to-slate-900",
    seoKeywords: ["DU B Unit admission 2026", "ঢাবি খ ইউনিট ভর্তি পরীক্ষা", "DU Law and IR admission", "DU arts cut off mark"],
    summary: "ঢাকা বিশ্ববিদ্যালয়ের সবচেয়ে বড় ও জনপ্রিয় ইউনিট B (কলা, আইন ও সামাজিক বিজ্ঞান)। বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা সব গ্রুপের শিক্ষার্থীদের জন্য আসন বণ্টন ও মেধা তালিকা তৈরির নির্দেশিকা।",
    quickHighlights: {
      duration: "আবেদন: ডিসেম্বর - জানুয়ারি",
      eligibility: "মানবিক (জিপিএ ৮.০০), বিজ্ঞান (জিপিএ ৮.৫০), বাণিজ্য (জিপিএ ৮.০০)",
      examFormat: "৬০ নম্বরের MCQ + ৪০ নম্বরের লিখিত পরীক্ষা + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "২,৯৩৪ টি আসন (মানবিক ১৭৪৪, বিজ্ঞান ৯০৪, বাণিজ্য ২৮৬)",
      resultStatus: "কেন্দ্রীয় পোর্টালের মাধ্যমে মেধা স্কোর অনুযায়ী বিষয় বরাদ্দ"
    },
    content: {
      overview: "ঢাকা বিশ্ববিদ্যালয় 'কলা, আইন ও সামাজিক বিজ্ঞান ইউনিট' দেশের সিভিল সার্ভিস, জুডিশিয়ারি ও কূটনীতিক তৈরির সূতিকাগার। আইন, ইংরেজি, অর্থনীতি, আন্তর্জাতিক সম্পর্ক, উন্নয়ন অধ্যয়ন ও গণযোগাযোগের মতো সেরা বিভাগগুলো এখানে অবস্থিত।",
      facultiesAndUnits: [
        { unit: "আইন, কলা ও সামাজিক বিজ্ঞান অনুষদ", description: "Law, English, Economics, International Relations, Mass Comm & Journalism, Public Admin", seats: "২,৯৩৪ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা যেকোনো শাখা থেকে উত্তীর্ণ শিক্ষার্থীরা আবেদন করতে পারবেন।",
        subjectRequirements: "আইন ও ইংরেজির জন্য এইচএসসিতে নির্দিষ্ট গ্রেড থাকা প্রয়োজন।",
        secondTimeAllowed: "না (ঢাবিতে সেকেন্ড টাইম সুযোগ নেই)।",
        minimumGpa: "মানবিক শিক্ষার্থীদের জন্য মোট জিপিএ ৮.০০; বিজ্ঞান শিক্ষার্থীদের জন্য ৮.৫০।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "ঢাবি অনলাইন পোর্টালে ফর্ম পূরণ", description: "admission.eis.du.ac.bd তে প্রয়োজনীয় তথ্য দিয়ে আবেদন।" },
        { stepNumber: 2, title: "১,০৫০ টাকা ফি প্রদান", description: "বিকাশ, নগদ বা ব্যাংকের মাধ্যমে ফি জমা।" },
        { stepNumber: 3, title: "পরীক্ষায় অংশগ্রহণ", description: "৬০ MCQ ও ৪০ নম্বরের লিখিত পরীক্ষায় অংশ নেওয়া।" }
      ],
      examPattern: {
        type: "৬০ নম্বরের MCQ (৪৫ মিনিট) + ৪০ নম্বরের লিখিত বর্ণনামূলক (৪৫ মিনিট)।",
        duration: "১ ঘণ্টা ৩০ মিনিট (৯০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "MCQ অংশে ন্যূনতম ২৪ এবং লিখিত অংশে ন্যূনতম ১২ নম্বর।",
        distribution: [
          { subject: "বাংলা (Bangla)", marks: "MCQ ৩৫ + লিখিত ২০ = ৫৫" },
          { subject: "ইংরেজি (English)", marks: "MCQ ৩৫ + লিখিত ২০ = ৫৫" },
          { subject: "সাধারণ জ্ঞান (General Knowledge)", marks: "MCQ ৩০ (শুধুমাত্র এমসিকিউ)" }
        ]
      },
      importantLinks: [
        { label: "DU Admission Portal", url: "https://admission.eis.du.ac.bd", badge: "DU Portal", type: "official" }
      ],
      preparationTips: [
        "লিখিত পরীক্ষার জন্য ফ্রি-হ্যান্ড রাইটিং, প্যারাগ্রাফ, অনুবাদ ও সংক্ষিপ্ত ব্যাখ্যা নিয়মিত প্র্যাকটিস করুন।",
        "সাধারণ জ্ঞানের জন্য সমসাময়িক বাংলাদেশ ও আন্তর্জাতিক বিষয়াবলীর উপর জোর দিন।"
      ],
      faqs: [
        { q: "বিজ্ঞান বা বাণিজ্যের শিক্ষার্থীরা কি বি ইউনিটে পরীক্ষা দিতে পারে?", a: "হ্যাঁ, বি ইউনিট একটি সমন্বিত ইউনিট এবং বিজ্ঞান ও বাণিজ্যের শিক্ষার্থীদের জন্য আলাদা কোটা রয়েছে।" }
      ]
    }
  },
  {
    itemNumber: 4,
    id: "du-c-unit-commerce-admission-guide-2026",
    slug: "du-c-unit-admission-guide-2026",
    title: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি), C (বাণিজ্য): ব্যবসায় শিক্ষা ইউনিট ভর্তি গাইড 2026",
    subtitle: "ফিন্যান্স, অ্যাকাউন্টিং, মার্কেটিং ও ম্যানেজমেন্টের শীর্ষ আসন পাওয়ার পূর্ণাঙ্গ প্রস্তুতি",
    faculty: "du_cluster",
    facultyName: "🎓 ঢাকা বিশ্ববিদ্যালয় (DU C Unit)",
    universityName: "ঢাকা বিশ্ববিদ্যালয় (University of Dhaka)",
    unitCode: "C Unit (ব্যবসায় শিক্ষা অনুষদ)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: true,
    coverGradient: "from-emerald-800 via-teal-950 to-slate-900",
    seoKeywords: ["DU C Unit admission 2026", "ঢাবি গ ইউনিট ভর্তি পরীক্ষা", "DU Business Studies cutoff", "DU Finance Accounting admission"],
    summary: "ঢাকা বিশ্ববিদ্যালয় ব্যবসায় শিক্ষা অনুষদের ১,০৫০টি আসনে ভর্তির জন্য ৬০ নম্বরের MCQ ও ৪০ নম্বরের লিখিত পরীক্ষার সম্পূর্ণ নির্দেশিকা। অ্যাকাউন্টিং ও ম্যানেজমেন্টের স্ট্র্যাটেজি।",
    quickHighlights: {
      duration: "আবেদন: ডিসেম্বর - জানুয়ারি",
      eligibility: "ব্যবসায় শিক্ষায় মোট জিপিএ ৭.৫০ (উভয়টিতে ন্যূনতম ৩.০০)",
      examFormat: "৬০ নম্বরের MCQ + ৪০ নম্বরের লিখিত পরীক্ষা + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "১,০৫০ টি আসন",
      resultStatus: "লিখিত খাতা মূল্যায়নের পর মেধা তালিকা প্রকাশ"
    },
    content: {
      overview: "ঢাকা বিশ্ববিদ্যালয় ব্যবসায় শিক্ষা অনুষদ (C Unit) বাংলাদেশের কর্পোরেট সেক্টর ও ফাইন্যান্সিয়াল ইন্ডাস্ট্রির শীর্ষ গ্র্যাজুয়েট তৈরি করে। ফিন্যান্স, একাউন্টিং, মার্কেটিং, ম্যানেজমেন্ট, ব্যাংকিং ও এমআইএস বিভাগ এখানে অন্তর্ভুক্ত।",
      facultiesAndUnits: [
        { unit: "ব্যবসায় শিক্ষা অনুষদ", description: "Finance, Accounting & Information Systems, Marketing, Management, Banking & Insurance, MIS, Tourism", seats: "১,০৫০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "ব্যবসায় শিক্ষা বিভাগ থেকে উত্তীর্ণ হতে হবে। বিজ্ঞান ও মানবিকের জন্য নির্দিষ্ট সংখ্যক আসন বরাদ্দ থাকে।",
        subjectRequirements: "হিসাববিজ্ঞান ও ব্যবসায় নীতি বিষয়ে ভালো বেসিক থাকা আবশ্যক।",
        secondTimeAllowed: "না (ঢাবিতে সেকেন্ড টাইম নেই)।",
        minimumGpa: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৭.৫০ (উভয়টিতে ন্যূনতম ৩.০০)।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "ঢাবি পোর্টালে আবেদন", description: "admission.eis.du.ac.bd তে তথ্য প্রদান।" },
        { stepNumber: 2, title: "ফি প্রদান", description: "নির্ধারিত ফি ব্যাংকিং চ্যানেলে পরিশোধ।" },
        { stepNumber: 3, title: "পরীক্ষা ও সিট নির্বাচন", description: "বিভাগীয় শহরে অনুষ্ঠিত লিখিত ও MCQ পরীক্ষায় অংশগ্রহণ।" }
      ],
      examPattern: {
        type: "৬০ নম্বরের MCQ + ৪০ নম্বরের লিখিত সংক্ষিপ্ত পরীক্ষা।",
        duration: "১ ঘণ্টা ৩০ মিনিট (৯০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কর্তন।",
        passMarks: "MCQ তে ন্যূনতম ২৪ এবং লিখিত অংশে ন্যূনতম ১১ নম্বর।",
        distribution: [
          { subject: "বাংলা (Bangla)", marks: "MCQ ১২ + লিখিত ৬ = ১৮" },
          { subject: "ইংরেজি (English)", marks: "MCQ ১২ + লিখিত ১২ = ২৪" },
          { subject: "হিসাববিজ্ঞান (Accounting)", marks: "MCQ ১২ + লিখিত ১২ = ২৪" },
          { subject: "ব্যবসায় নীতি ও প্রয়োগ (Business)", marks: "MCQ ১২ + লিখিত ১০ = ২২" },
          { subject: "মার্কেটিং অথবা ফিন্যান্স", marks: "MCQ ১২ (এমসিকিউ)" }
        ]
      },
      importantLinks: [
        { label: "DU Admission Portal", url: "https://admission.eis.du.ac.bd", badge: "DU Portal", type: "official" }
      ],
      preparationTips: [
        "অ্যাকাউন্টিংয়ের জাবেদা, খতিয়ান ও আর্থিক বিবরণীর সংক্ষিপ্ত জার্নাল এন্ট্রি লিখিত পরীক্ষার জন্য খুব গুরুত্বপূর্ণ।",
        "ইংরেজি গ্রামারের পাশাপাশি ট্রান্সলেশন ও বিজনেস টার্মস ভালোমতো আয়ত্ত করুন।"
      ],
      faqs: [
        { q: "সি ইউনিটে কি ক্যালকুলেটর ব্যবহার করা যায়?", a: "না, ঢাকা বিশ্ববিদ্যালয়ের সি ইউনিটে ক্যালকুলেটর সম্পূর্ণ নিষিদ্ধ।" }
      ]
    }
  },
  {
    itemNumber: 5,
    id: "jnu-a-unit-science-admission-guide-2026",
    slug: "jnu-a-unit-admission-guide-2026",
    title: "জগন্নাথ বিশ্ববিদ্যালয় (জবি), A (বিজ্ঞান): বিজ্ঞান অনুষদ নিজস্ব ভর্তি গাইড 2026",
    subtitle: "সিএসই, ফার্মেসি, রসায়ন ও গণিত বিভাগের আসন বণ্টন, জিপিএ শর্ত ও ১০০ নম্বরের পরীক্ষার গাইডলাইন",
    faculty: "jnu_cluster",
    facultyName: "🏛️ জগন্নাথ বিশ্ববিদ্যালয় (JnU)",
    universityName: "জগন্নাথ বিশ্ববিদ্যালয় (Jagannath University)",
    unitCode: "A Unit (বিজ্ঞান)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: false,
    coverGradient: "from-blue-800 via-indigo-900 to-zinc-950",
    seoKeywords: ["Jagannath University A Unit admission 2026", "জবি বিজ্ঞান ইউনিট ভর্তি পরীক্ষা", "JnU CSE pharmacy admission", "JnU cut off marks"],
    summary: "জগন্নাথ বিশ্ববিদ্যালয়ের নিজস্ব পদ্ধতির A ইউনিট (বিজ্ঞান অনুষদ) ভর্তি পরীক্ষা নির্দেশিকা। ৮২৫টি বিজ্ঞান আসনে পদার্থ, রসায়ন, গণিত ও জীববিজ্ঞানের নম্বর বণ্টন ও আবেদন পদ্ধতি।",
    quickHighlights: {
      duration: "আবেদন: জানুয়ারি - ফেব্রুয়ারি",
      eligibility: "বিজ্ঞান শাখা থেকে মোট জিপিএ ৮.০০ (উভয়টিতে ন্যূনতম ৩.৫০)",
      examFormat: "১০০ নম্বরের ১০০টি MCQ পরীক্ষা (১ ঘণ্টা) + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "৮২৫ টি বিজ্ঞান আসন",
      resultStatus: "মেধা তালিকার ভিত্তিতে অনলাইন সাবজেক্ট চয়েস"
    },
    content: {
      overview: "জগন্নাথ বিশ্ববিদ্যালয় রাজধানীর কেন্দ্রস্থলে অবস্থিত অন্যতম শীর্ষ পাবলিক বিশ্ববিদ্যালয়। এর বিজ্ঞান অনুষদে ফার্মেসি, সিএসই, অণুজীববিজ্ঞান, জেনেটিক ইঞ্জিনিয়ারিং ও রসায়নের মতো যুগোপযোগী বিভাগ রয়েছে।",
      facultiesAndUnits: [
        { unit: "বিজ্ঞান ও জীববিজ্ঞান অনুষদ", description: "CSE, Pharmacy, Microbiology, Chemistry, Physics, Mathematics, Botany, Zoology, Statistics", seats: "৮২৫ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান বিভাগ থেকে এসএসসি ও এইচএসসি পাস।",
        subjectRequirements: "পদার্থ, রসায়ন, গণিত ও জীববিজ্ঞান থাকতে হবে।",
        secondTimeAllowed: "হ্যাঁ (জবিতে সেকেন্ড টাইম সুযোগ রয়েছে)।",
        minimumGpa: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৮.০০ (পৃথকভাবে ন্যূনতম ৩.৫০)।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "জবি ভর্তি পোর্টালে (admission.jnu.ac.bd) রেজিস্ট্রেশন", description: "রোল ও রেজিস্ট্রেশন প্রদান।" },
        { stepNumber: 2, title: "ফি প্রদান", description: "মোবাইল ব্যাংকিংয়ের মাধ্যমে আবেদন ফি জমা।" },
        { stepNumber: 3, title: "প্রবেশপত্র ডাউনলোড ও পরীক্ষায় অংশগ্রহণ", description: "১০০ নম্বরের MCQ পরীক্ষায় অংশ নেওয়া।" }
      ],
      examPattern: {
        type: "১০০ নম্বরের ১০০টি বহুনির্বাচনী (MCQ) প্রশ্ন।",
        duration: "১ ঘণ্টা (৬০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "১০০ নম্বরের মধ্যে ন্যূনতম ৪০ নম্বর।",
        distribution: [
          { subject: "পদার্থবিজ্ঞান (Physics)", marks: "২৫ নম্বর" },
          { subject: "রসায়ন (Chemistry)", marks: "২৫ নম্বর" },
          { subject: "উচ্চতর গণিত (Higher Math)", marks: "২৫ নম্বর" },
          { subject: "জীববিজ্ঞান (Biology) / বাংলা / ইংরেজি", marks: "২৫ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "JnU Official Admission Portal", url: "https://admission.jnu.ac.bd", badge: "জবি পোর্টাল", type: "official" }
      ],
      preparationTips: [
        "এইচএসসি মূল পাঠ্যবই এবং বিগত বছরের জবি ও ঢাবির প্রশ্ন সমাধান করুন।",
        "সময় ব্যবস্থাপনার দিকে বিশেষ নজর দিন।"
      ],
      faqs: [
        { q: "জগন্নাথ বিশ্ববিদ্যালয়ে কি সেকেন্ড টাইম আছে?", a: "হ্যাঁ, জবিতে সেকেন্ড টাইম শিক্ষার্থীরা আবেদন করতে পারেন।" }
      ]
    }
  },
  {
    itemNumber: 6,
    id: "jnu-e-unit-fine-arts-admission-guide-2026",
    slug: "jnu-e-unit-admission-guide-2026",
    title: "জগন্নাথ বিশ্ববিদ্যালয় (জবি), E (চারু): চারুকলা অনুষদ ভর্তি গাইড 2026",
    subtitle: "ড্রয়িং পরীক্ষা, নান্দনিকতা ও চারুকলা বিভাগের ৫০টি আসনের প্রস্তুতি গাইডলাইন",
    faculty: "fine_arts",
    facultyName: "🎨 চারুকলা অনুষদ (JnU E Unit)",
    universityName: "জগন্নাথ বিশ্ববিদ্যালয় (Jagannath University)",
    unitCode: "E Unit (চারুকলা অনুষদ)",
    readTime: "৬ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: false,
    coverGradient: "from-amber-700 via-orange-900 to-zinc-950",
    seoKeywords: ["JnU Fine Arts admission 2026", "জবি চারুকলা ভর্তি পরীক্ষা", "JnU E unit drawing test", "Jagannath charukola syllabus"],
    summary: "জগন্নাথ বিশ্ববিদ্যালয় চারুকলা অনুষদের ড্রয়িং ও সাধারণ জ্ঞান পরীক্ষার বিস্তারিত সিলেবাস ও অঙ্কন টিপস। সকল গ্রুপের শিক্ষার্থীদের আবেদনের সুযোগ।",
    quickHighlights: {
      duration: "আবেদন: জানুয়ারি - ফেব্রুয়ারি",
      eligibility: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৬.৫০ (উভয়টিতে ন্যূনতম ৩.০০)",
      examFormat: "৪০ নম্বরের MCQ + ৬০ নম্বরের মুক্তহস্ত অঙ্কন (ড্রয়িং) + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "৫০ টি আসন (চারুকলা বিভাগে)",
      resultStatus: "ড্রয়িং খাতা মূল্যায়নের পর মেধা তালিকা প্রকাশ"
    },
    content: {
      overview: "জগন্নাথ বিশ্ববিদ্যালয় চারুকলা বিভাগ দৃশ্যকলা, গ্রাফিক আর্ট, ভাস্কর্য ও পেইন্টিংয়ে আধুনিক দৃষ্টিভঙ্গি তৈরিতে ভূমিকা রাখছে।",
      facultiesAndUnits: [
        { unit: "চারুকলা বিভাগ", description: "Drawing, Painting, Sculpture, Printmaking, Graphic Art", seats: "৫০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা যেকোনো শাখা থেকে পাস।",
        subjectRequirements: "অঙ্কন ও শিল্পকলার প্রতি গভীর আগ্রহ।",
        secondTimeAllowed: "হ্যাঁ (সেকেন্ড টাইম শিক্ষার্থীরাও অংশ নিতে পারেন)।",
        minimumGpa: "মোট জিপিএ ৬.৫০ (উভয়টিতে ৩.০০)।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "অনলাইন পোর্টালে ফর্ম পূরণ", description: "admission.jnu.ac.bd তে আবেদন।" },
        { stepNumber: 2, title: "ফি প্রদান", description: "নির্ধারিত ফি জমা দিন।" },
        { stepNumber: 3, title: "MCQ ও ড্রয়িং পরীক্ষা", description: "একই দিনে অনুষ্ঠিত সাধারণ জ্ঞান ও অঙ্কন পরীক্ষায় অংশগ্রহণ।" }
      ],
      examPattern: {
        type: "৪০ নম্বরের MCQ + ৬০ নম্বরের ড্রয়িং পরীক্ষা।",
        duration: "১ ঘণ্টা ৩০ মিনিট",
        negativeMarking: "MCQ অংশে ০.২৫ নেগেটিভ মার্কিং।",
        passMarks: "MCQ এবং ড্রয়িং উভয় অংশে পৃথকভাবে ৪০% নম্বর।",
        distribution: [
          { subject: "শিল্প ও সংস্কৃতি সাধারণ জ্ঞান (MCQ)", marks: "৪০ নম্বর" },
          { subject: "মুক্তহস্ত অঙ্কন / স্কেচিং (Freehand Drawing)", marks: "৬০ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "JnU Admission Portal", url: "https://admission.jnu.ac.bd", badge: "জবি পোর্টাল", type: "official" }
      ],
      preparationTips: [
        "পেন্সিল শেডিং, পারসপেক্টিভ ও হিউম্যান ফিগার ড্রয়িং নিয়মিত প্র্যাকটিস করুন।"
      ],
      faqs: [
        { q: "ড্রয়িংয়ে কি রঙের ব্যবহার বাধ্যতামূলক?", a: "সাধারণত পেন্সিল স্কেচ করতে হয়, নির্দিষ্ট ইনস্ট্রাকশন পরীক্ষার প্রশ্নপত্রে দেওয়া থাকে।" }
      ]
    }
  },
  {
    itemNumber: 7,
    id: "jnu-b-unit-arts-admission-guide-2026",
    slug: "jnu-b-unit-admission-guide-2026",
    title: "জগন্নাথ বিশ্ববিদ্যালয় (জবি), B (মানবিক): কলা অনুষদ ভর্তি গাইড 2026",
    subtitle: "ইংরেজি, বাংলা, ইতিহাস, দর্শন ও ইসলামিক স্টাডিজ বিভাগের পূর্ণাঙ্গ ভর্তি গাইডলাইন",
    faculty: "jnu_cluster",
    facultyName: "🏛️ জগন্নাথ বিশ্ববিদ্যালয় (JnU)",
    universityName: "জগন্নাথ বিশ্ববিদ্যালয় (Jagannath University)",
    unitCode: "B Unit (কলা অনুষদ)",
    readTime: "৬ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: false,
    coverGradient: "from-violet-800 via-purple-950 to-slate-900",
    seoKeywords: ["JnU B Unit admission 2026", "জবি খ ইউনিট ভর্তি পরীক্ষা", "JnU Arts unit English Bangla cutoff"],
    summary: "জগন্নাথ বিশ্ববিদ্যালয় কলা অনুষদের ৮৫০টি আসনে ভর্তির জন্য বাংলা, ইংরেজি ও সাধারণ জ্ঞানের ১০০ নম্বরের পরীক্ষার গাইডলাইন ও বিষয়ভিত্তিক শর্তাবলী।",
    quickHighlights: {
      duration: "আবেদন: জানুয়ারি - ফেব্রুয়ারি",
      eligibility: "মানবিক শাখা থেকে মোট জিপিএ ৭.৫০ (উভয়টিতে ন্যূনতম ৩.০০)",
      examFormat: "১০০ নম্বরের ১০০টি MCQ পরীক্ষা (১ ঘণ্টা) + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "৮৫০ টি আসন",
      resultStatus: "মেধা তালিকার ভিত্তিতে বিষয় পছন্দক্রম প্রদান"
    },
    content: {
      overview: "জগন্নাথ বিশ্ববিদ্যালয় কলা অনুষদ প্রাচ্য ও পাশ্চাত্যের সাহিত্য, সংস্কৃতি ও ইতিহাসের এক সমৃদ্ধ কেন্দ্র। ইংরেজি, বাংলা ও ইতিহাসের মতো প্রাচীন বিভাগগুলো এখানে অন্তর্ভুক্ত।",
      facultiesAndUnits: [
        { unit: "কলা অনুষদ", description: "English, Bangla, History, Philosophy, Islamic Studies, Islamic History & Culture", seats: "৮৫০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "মানবিক শাখা থেকে উত্তীর্ণ শিক্ষার্থীরা অগ্রাধিকার পাবেন।",
        subjectRequirements: "ইংরেজিতে ভর্তির জন্য এইচএসসি ইংরেজিতে নির্দিষ্ট ন্যূনতম গ্রেড প্রয়োজন।",
        secondTimeAllowed: "হ্যাঁ (জবিতে সেকেন্ড টাইম গ্রহণযোগ্য)।",
        minimumGpa: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৭.৫০।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "অনলাইন আবেদন", description: "admission.jnu.ac.bd পোর্টাল এন্ট্রি।" },
        { stepNumber: 2, title: "ফি জমা", description: "বিকাশ বা নগদে নির্ধারিত ফি পরিশোধ।" },
        { stepNumber: 3, title: "পরীক্ষা সম্পন্ন", description: "MCQ পরীক্ষায় অংশ নেওয়া।" }
      ],
      examPattern: {
        type: "১০০ নম্বরের ১০০টি বহুনির্বাচনী (MCQ) প্রশ্ন।",
        duration: "১ ঘণ্টা (৬০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "১০০ নম্বরের মধ্যে ন্যূনতম ৪০ নম্বর।",
        distribution: [
          { subject: "বাংলা (Bangla)", marks: "৩৫ নম্বর" },
          { subject: "ইংরেজি (English)", marks: "৩৫ নম্বর" },
          { subject: "সাধারণ জ্ঞান (General Knowledge)", marks: "৩০ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "JnU Admission Portal", url: "https://admission.jnu.ac.bd", badge: "জবি পোর্টাল", type: "official" }
      ],
      preparationTips: [
        "এইচএসসি বাংলা ও ইংরেজি পাঠ্যবই এবং ব্যাকরণ অংশের ওপর সর্বোচ্চ গুরুত্ব দিন।",
        "সাম্প্রতিক জাতীয় ও আন্তর্জাতিক ঘটনাপ্রবাহ নিয়মিত রিভিশন দিন।"
      ],
      faqs: [
        { q: "ইংরেজি বিভাগে চান্স পাওয়ার শর্ত কী?", a: "ভর্তি পরীক্ষায় ইংরেজি অংশে নির্ধারিত ন্যূনতম পাস নম্বর পেতে হয়।" }
      ]
    }
  },
  {
    itemNumber: 8,
    id: "jnu-c-unit-commerce-admission-guide-2026",
    slug: "jnu-c-unit-admission-guide-2026",
    title: "জগন্নাথ বিশ্ববিদ্যালয় (জবি), C (বাণিজ্য): ব্যবসায় শিক্ষা অনুষদ ভর্তি গাইড 2026",
    subtitle: "অ্যাকাউন্টিং, ফিন্যান্স, মার্কেটিং ও ম্যানেজমেন্টের ৫২০টি আসনের নির্দেশিকা",
    faculty: "jnu_cluster",
    facultyName: "🏛️ জগন্নাথ বিশ্ববিদ্যালয় (JnU)",
    universityName: "জগন্নাথ বিশ্ববিদ্যালয় (Jagannath University)",
    unitCode: "C Unit (ব্যবসায় শিক্ষা)",
    readTime: "৬ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: false,
    coverGradient: "from-teal-800 via-emerald-950 to-slate-900",
    seoKeywords: ["JnU C Unit admission 2026", "জবি বাণিজ্য ইউনিট ভর্তি পরীক্ষা", "JnU BBA Accounting Finance cutoff"],
    summary: "জগন্নাথ বিশ্ববিদ্যালয় ব্যবসায় শিক্ষা অনুষদের ৫২০টি আসনে ভর্তির জন্য অ্যাকাউন্টিং, ব্যবসায় নীতি, বাংলা ও ইংরেজির ১০০ নম্বরের পরীক্ষার গাইডলাইন।",
    quickHighlights: {
      duration: "আবেদন: জানুয়ারি - ফেব্রুয়ারি",
      eligibility: "ব্যবসায় শিক্ষায় মোট জিপিএ ৭.৫০ (উভয়টিতে ন্যূনতম ৩.০০)",
      examFormat: "১০০ নম্বরের ১০০টি MCQ পরীক্ষা (১ ঘণ্টা) + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "৫২০ টি আসন",
      resultStatus: "মেধা তালিকার ভিত্তিতে বিষয় বণ্টন"
    },
    content: {
      overview: "জগন্নাথ বিশ্ববিদ্যালয় ব্যবসায় শিক্ষা অনুষদ বিবিএ গ্র্যাজুয়েটদের করপোরেট ও ব্যাংকিং জগতে দ্রুত পদায়নের জন্য সুপরিচিত।",
      facultiesAndUnits: [
        { unit: "ব্যবসায় শিক্ষা অনুষদ", description: "Accounting & Information Systems, Finance, Marketing, Management Studies", seats: "৫২০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "ব্যবসায় শিক্ষা শাখা থেকে পাস হতে হবে।",
        subjectRequirements: "হিসাববিজ্ঞান ও ব্যবসায় সংগঠনে ন্যূনতম ৩.০০ গ্রেড থাকা বাঞ্ছনীয়।",
        secondTimeAllowed: "হ্যাঁ (সেকেন্ড টাইম শিক্ষার্থীরা অংশ নিতে পারেন)।",
        minimumGpa: "এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৭.৫০।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "অনলাইন পোর্টাল আবেদন", description: "admission.jnu.ac.bd তে আবেদন সম্পন্ন করুন।" },
        { stepNumber: 2, title: "ফি প্রদান ও প্রবেশপত্র", description: "মোবাইল ব্যাংকিংয়ে ফি প্রদান করে প্রবেশপত্র সংগ্রহ।" },
        { stepNumber: 3, title: "পরীক্ষায় অংশগ্রহণ", description: "১০০ নম্বরের বহুনির্বাচনী পরীক্ষা।" }
      ],
      examPattern: {
        type: "১০০ নম্বরের ১০০টি বহুনির্বাচনী প্রশ্ন।",
        duration: "১ ঘণ্টা (৬০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।",
        passMarks: "১০০ নম্বরের মধ্যে ন্যূনতম ৪০ নম্বর।",
        distribution: [
          { subject: "হিসাববিজ্ঞান (Accounting)", marks: "৩০ নম্বর" },
          { subject: "ব্যবসায় নীতি ও প্রয়োগ (Business Studies)", marks: "৩০ নম্বর" },
          { subject: "ইংরেজি (English)", marks: "২০ নম্বর" },
          { subject: "বাংলা (Bangla)", marks: "২০ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "JnU Admission Portal", url: "https://admission.jnu.ac.bd", badge: "জবি পোর্টাল", type: "official" }
      ],
      preparationTips: [
        "অ্যাকাউন্টিংয়ের অঙ্কের জন্য শর্টকাট হিসাবের অভ্যাস গড়ে তুলুন।"
      ],
      faqs: [
        { q: "জবি সি ইউনিটে কি ক্যালকুলেটর নেওয়া যায়?", a: "না, সাধারণ বা সায়েন্টিফিক কোনো প্রকার ক্যালকুলেটর ব্যবহার করা যায় না।" }
      ]
    }
  },
  {
    itemNumber: 9,
    id: "jnu-d-unit-social-science-admission-guide-2026",
    slug: "jnu-d-unit-admission-guide-2026",
    title: "জগন্নাথ বিশ্ববিদ্যালয় (জবি), D (সমাজবিজ্ঞান): সামাজিক বিজ্ঞান অনুষদ ভর্তি গাইড 2026",
    subtitle: "অর্থনীতি, রাষ্ট্রবিজ্ঞান, সমাজবিজ্ঞান, আইন ও গণযোগাযোগ বিভাগের ৫৯০টি আসনের প্রস্তুতি",
    faculty: "jnu_cluster",
    facultyName: "🏛️ জগন্নাথ বিশ্ববিদ্যালয় (JnU)",
    universityName: "জগন্নাথ বিশ্ববিদ্যালয় (Jagannath University)",
    unitCode: "D Unit (সমাজবিজ্ঞান ও আইন)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: false,
    coverGradient: "from-cyan-900 via-blue-950 to-slate-900",
    seoKeywords: ["JnU D Unit admission 2026", "জবি ঘ ইউনিট ভর্তি পরীক্ষা", "JnU Social Science and Law cut off"],
    summary: "জগন্নাথ বিশ্ববিদ্যালয় সামাজিক বিজ্ঞান ও আইন অনুষদের ৫৯০টি আসনে ভর্তির জন্য বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা সব বিভাগের শিক্ষার্থীদের জন্য ১০০ নম্বরের ভর্তি নির্দেশিকা।",
    quickHighlights: {
      duration: "আবেদন: জানুয়ারি - ফেব্রুয়ারি",
      eligibility: "মানবিক (জিপিএ ৭.৫০), বিজ্ঞান (জিপিএ ৮.০০), বাণিজ্য (জিপিএ ৭.৫০)",
      examFormat: "১০০ নম্বরের ১০০টি MCQ পরীক্ষা (১ ঘণ্টা) + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "৫৯০ টি আসন (বিভাগ পরিবর্তনসহ)",
      resultStatus: "মেধা তালিকার মাধ্যমে চূড়ান্ত সাবজেক্ট অ্যালটমেন্ট"
    },
    content: {
      overview: "জগন্নাথ বিশ্ববিদ্যালয় সামাজিক বিজ্ঞান ও আইন অনুষদে অর্থনীতি, সমাজবিজ্ঞান, লোকপ্রশাসন, আন্তর্জাতিক সম্পর্ক, আইন ও সাংবাদিকতার মতো চাহিদাসম্পন্ন বিভাগ অন্তর্ভুক্ত।",
      facultiesAndUnits: [
        { unit: "সামাজিক বিজ্ঞান ও আইন অনুষদ", description: "Economics, Law, Sociology, Public Administration, Mass Communication, Political Science, Anthropology", seats: "৫৯০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা যেকোনো শাখা থেকে আবেদন করা যাবে।",
        subjectRequirements: "আইন ও অর্থনীতিতে ভর্তির জন্য ইংরেজি ও গণিতে নির্দিষ্ট গ্রেড প্রযোজ্য।",
        secondTimeAllowed: "হ্যাঁ (সেকেন্ড টাইম প্রযোজ্য)।",
        minimumGpa: "মানবিক ও বাণিজ্যে মোট জিপিএ ৭.৫০; বিজ্ঞানে মোট ৮.০০।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "অনলাইন পোর্টাল আবেদন", description: "admission.jnu.ac.bd তে আবেদন।" },
        { stepNumber: 2, title: "ফি প্রদান", description: "অনলাইন পেমেন্ট সম্পন্ন করা।" },
        { stepNumber: 3, title: "পরীক্ষায় অংশগ্রহণ", description: "১০০ নম্বরের MCQ পরীক্ষা।" }
      ],
      examPattern: {
        type: "১০০ নম্বরের ১০০টি বহুনির্বাচনী প্রশ্ন।",
        duration: "১ ঘণ্টা (৬০ মিনিট)",
        negativeMarking: "প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কর্তন।",
        passMarks: "১০০ নম্বরের মধ্যে ন্যূনতম ৪০ নম্বর।",
        distribution: [
          { subject: "বাংলা (Bangla)", marks: "৩০ নম্বর" },
          { subject: "ইংরেজি (English)", marks: "৩০ নম্বর" },
          { subject: "সাধারণ জ্ঞান (বাংলাদেশ ও আন্তর্জাতিক)", marks: "৪০ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "JnU Admission Portal", url: "https://admission.jnu.ac.bd", badge: "জবি পোর্টাল", type: "official" }
      ],
      preparationTips: [
        "সাধারণ জ্ঞানের জন্য সংবিধান, মুক্তিযুদ্ধ, আন্তর্জাতিক সংস্থা ও সাম্প্রতিক রিপোর্ট ভালোভাবে পড়ুন।"
      ],
      faqs: [
        { q: "ডি ইউনিটের মাধ্যমে কি আইনে ভর্তি হওয়া যায়?", a: "হ্যাঁ, জবির আইন অনুষদে ভর্তির জন্য ডি ইউনিট অন্যতম প্রধান মাধ্যম।" }
      ]
    }
  },
  {
    itemNumber: 10,
    id: "du-cha-unit-fine-arts-admission-guide-2026",
    slug: "du-cha-unit-admission-guide-2026",
    title: "ঢাকা বিশ্ববিদ্যালয় (ঢাবি), চ (চারু), 2026: চারুকলা অনুষদ ভর্তি গাইড",
    subtitle: "জয়নুল আবেদিনের স্মৃতিবিজড়িত চারুকলার অঙ্কন পরীক্ষা, পারসপেক্টিভ ও লাইট-শেড ড্রয়িং গাইডলাইন",
    faculty: "fine_arts",
    facultyName: "🎨 চারুকলা অনুষদ (DU Cha Unit)",
    universityName: "ঢাকা বিশ্ববিদ্যালয় (University of Dhaka)",
    unitCode: "চ ইউনিট (চারুকলা অনুষদ)",
    readTime: "৭ মিনিট পড়া",
    publishDate: "আগস্ট ২০২৬",
    featured: true,
    coverGradient: "from-amber-800 via-orange-950 to-stone-900",
    seoKeywords: ["DU Cha Unit admission 2026", "ঢাকা বিশ্ববিদ্যালয় চারুকলা ভর্তি পরীক্ষা", "DU Fine arts freehand drawing", "DU Charukola cutoff"],
    summary: "ঢাকা বিশ্ববিদ্যালয় চারুকলা অনুষদের ১৩০টি আসনে ভর্তির জন্য ৪০ নম্বরের সাধারণ জ্ঞান (শিল্প-সংস্কৃতি) ও ৬০ নম্বরের মুক্তহস্ত অঙ্কন পরীক্ষার সম্পূর্ণ নির্দেশিকা।",
    quickHighlights: {
      duration: "আবেদন: ডিসেম্বর - জানুয়ারি",
      eligibility: "যেকোনো বিভাগ থেকে এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ ৬.৫০ (উভয়টিতে ৩.০০)",
      examFormat: "৪০ নম্বরের MCQ + ৬০ নম্বরের ড্রয়িং পরীক্ষা + জিপিএ ২০ = ১২০ নম্বর",
      totalSeats: "১৩০ টি আসন (৮টি বিশেষায়িত বিভাগে)",
      resultStatus: "অঙ্কন খাতা মূল্যায়নের পর চূড়ান্ত মেধা তালিকা প্রকাশ"
    },
    content: {
      overview: "ঢাকা বিশ্ববিদ্যালয় চারুকলা অনুষদ বাংলাদেশের দৃশ্যকলা ও শিল্পচর্চার প্রধান কেন্দ্র। অঙ্কন ও চিত্রায়ণ, গ্রাফিক ডিজাইন, ভাস্কর্য, ছাপচিত্র, মৃৎশিল্প ও প্রাচ্যকলা বিভাগ এখানে অবস্থিত।",
      facultiesAndUnits: [
        { unit: "চারুকলা অনুষদ (৮টি বিভাগ)", description: "Drawing & Painting, Graphic Design, Printmaking, Sculpture, Ceramics, Craft, Oriental Art, History of Art", seats: "১৩০ টি আসন" }
      ],
      admissionRequirements: {
        ssc_hsc: "বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা যেকোনো শাখা থেকে পাস হতে হবে।",
        subjectRequirements: "শিল্পকলার প্রতি আগ্রহ এবং অঙ্কনে পারদর্শিতা।",
        secondTimeAllowed: "না (ঢাবিতে সেকেন্ড টাইম নেই)।",
        minimumGpa: "এসএসসি ও এইচএসসি পরীক্ষায় মোট জিপিএ ৬.৫০ (উভয়টিতে ন্যূনতম ৩.০০)।"
      },
      applicationProcess: [
        { stepNumber: 1, title: "ঢাবি কেন্দ্রীয় পোর্টালে আবেদন", description: "admission.eis.du.ac.bd তে রেজিস্ট্রেশন।" },
        { stepNumber: 2, title: "১ম পর্ব: সাধারণ জ্ঞান পরীক্ষা", description: "শিল্প-সংস্কৃতির ওপর ৪০ নম্বরের ৩০ মিনিটের MCQ পরীক্ষা।" },
        { stepNumber: 3, title: "২য় পর্ব: মুক্তহস্ত অঙ্কন পরীক্ষা", description: "৬০ নম্বরের সরাসরি দৃশ্য ও ফিগার ড্রয়িং পরীক্ষা।" }
      ],
      examPattern: {
        type: "৪০ নম্বরের MCQ + ৬০ নম্বরের মুক্তহস্ত ড্রয়িং পরীক্ষা।",
        duration: "MCQ ৩০ মিনিট + ড্রয়িং ৬০ মিনিট = মোট ৯০ মিনিট",
        negativeMarking: "MCQ তে ০.২৫ নম্বর নেগেটিভ মার্কিং।",
        passMarks: "MCQ তে ৪০% এবং ড্রয়িংয়ে ৪০% নম্বর।",
        distribution: [
          { subject: "শিল্প, সংস্কৃতি ও চারুকলার ইতিহাস (MCQ)", marks: "৪০ নম্বর" },
          { subject: "মুক্তহস্ত অঙ্কন (Freehand Drawing & Light-Shade)", marks: "৬০ নম্বর" }
        ]
      },
      importantLinks: [
        { label: "DU Admission Portal", url: "https://admission.eis.du.ac.bd", badge: "DU Portal", type: "official" }
      ],
      preparationTips: [
        "2B, 4B, 6B পেন্সিল দিয়ে মানব অবয়ব ও স্থির বস্তু (Still Life) আঁকার নিয়মিত অনুশীলন করুন।",
        "জয়নুল আবেদিন, কামরুল হাসান ও এস এম সুলতানের বিখ্যাত শিল্পকর্মগুলোর নাম ও প্রেক্ষাপট জেনে রাখুন।"
      ],
      faqs: [
        { q: "চারুকলায় কি সায়েন্সের ছাত্ররা ভর্তি হতে পারে?", a: "হ্যাঁ, যেকোনো বিভাগের শিক্ষার্থীরা সমানভাবে আবেদন করতে পারেন।" }
      ]
    }
  }
];
