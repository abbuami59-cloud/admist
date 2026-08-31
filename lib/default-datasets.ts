export interface TimelineItem {
  university: string;
  exam_date: string;
}

export interface InfoItem {
  university: string;
  circular_link?: string;
  mark_distribution: string;
  center: string;
  second_time: string;
  negative_mark: string;
  pass_mark?: string;
}

export interface ApplyItem {
  university: string;
  start_date?: string;
  end_date?: string;
  fee?: string;
  application_fee?: string;
  apply_link?: string;
  application_link?: string;
  application_period?: string;
}

export interface AdmitItem {
  university: string;
  period: string;
  link?: string;
}

export interface ResultItem {
  university: string;
  result_link?: string;
}

export const DEFAULT_TIMELINE_DATA: TimelineItem[] = [
  { university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET) - প্রাক-নির্বাচনী", exam_date: "2026-02-07T09:00:00" },
  { university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET) - চূড়ান্ত লিখিত", exam_date: "2026-03-07T09:00:00" },
  { university: "মেডিকেল ভর্তি পরীক্ষা (MBBS)", exam_date: "2026-01-16T10:00:00" },
  { university: "ডেন্টাল ভর্তি পরীক্ষা (BDS)", exam_date: "2026-02-27T10:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - বিজ্ঞান অনুষদ ('ক' ইউনিট)", exam_date: "2026-02-14T11:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - কলা, আইন ও সামাজিক বিজ্ঞান ('খ' ইউনিট)", exam_date: "2026-02-21T11:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - ব্যবসায় শিক্ষা অনুষদ ('গ' ইউনিট)", exam_date: "2026-02-28T11:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - চারুকলা অনুষদ ('চ' ইউনিট)", exam_date: "2026-02-07T11:00:00" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - 'A' ইউনিট (গাণিতিক ও পদার্থ)", exam_date: "2026-02-23T09:00:00" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - 'B' ইউনিট (সমাজবিজ্ঞান অনুষদ)", exam_date: "2026-02-24T09:00:00" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - 'C' ইউনিট (কলা ও মানবিক)", exam_date: "2026-02-25T09:00:00" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - 'D' ইউনিট (জীববিজ্ঞান অনুষদ)", exam_date: "2026-02-26T09:00:00" },
  { university: "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'A' ইউনিট (মানবিক ও আইন)", exam_date: "2026-03-02T09:30:00" },
  { university: "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'B' ইউনিট (ব্যবসায় শিক্ষা)", exam_date: "2026-03-03T09:30:00" },
  { university: "রাজশাহী বিশ্ববিদ্যালয় (RU) - 'C' ইউনিট (বিজ্ঞান অনুষদ)", exam_date: "2026-03-04T09:30:00" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - 'A' ইউনিট (বিজ্ঞান অনুষদ)", exam_date: "2026-03-08T10:00:00" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - 'B' ইউনিট (কলা ও মানববিদ্যা)", exam_date: "2026-03-10T10:00:00" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - 'C' ইউনিট (ব্যবসায় প্রশাসন)", exam_date: "2026-03-12T10:00:00" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - 'D' ইউনিট (সমাজবিজ্ঞান অনুষদ)", exam_date: "2026-03-15T10:00:00" },
  { university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster) - 'A' ইউনিট (বিজ্ঞান)", exam_date: "2026-03-20T11:00:00" },
  { university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster) - 'B' ইউনিট (মানবিক)", exam_date: "2026-03-27T11:00:00" },
  { university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster) - 'C' ইউনিট (বাণিজ্য)", exam_date: "2026-04-03T11:00:00" },
  { university: "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)", exam_date: "2026-04-10T10:00:00" },
  { university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)", exam_date: "2026-01-23T10:00:00" },
  { university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)", exam_date: "2026-03-13T09:30:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ - বিজ্ঞান ইউনিট", exam_date: "2026-04-17T10:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ - কলা ও সামাজিক বিজ্ঞান", exam_date: "2026-04-18T10:00:00" },
  { university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ - ব্যবসায় শিক্ষা ইউনিট", exam_date: "2026-04-24T10:00:00" },
  { university: "বিএসসি ও ডিপ্লোমা নার্সিং ভর্তি পরীক্ষা", exam_date: "2026-04-25T10:00:00" },
  { university: "আর্মড ফোর্সেস মেডিকেল কলেজ ও এএমসি (AFMC & AMC)", exam_date: "2026-01-30T10:00:00" }
];

export const DEFAULT_INFO_DATA: InfoItem[] = [
  {
    university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)",
    circular_link: "https://www.buet.ac.bd",
    mark_distribution: "প্রাক-নির্বাচনী: পদার্থবিজ্ঞান ৩৩, গণিত ৩৩, রসায়ন ৩৪ (মোট ১০০ MCQ)\nচূড়ান্ত লিখিত: পদার্থবিজ্ঞান ২০০, গণিত ২০০, রসায়ন ২০০ (মোট ৬০০ নম্বর)",
    center: "বুয়েট ক্যাম্পাস, ঢাকা",
    second_time: "নেই",
    negative_mark: "০.২৫ (প্রাক-নির্বাচনী)",
    pass_mark: "৪০%"
  },
  {
    university: "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)",
    circular_link: "http://dgme.teletalk.com.bd",
    mark_distribution: "জীববিজ্ঞান ৩০, রসায়ন ২৫, পদার্থবিজ্ঞান ২০, ইংরেজি ১৫, সাধারণ জ্ঞান ও মুক্তিযুদ্ধ ১০ (মোট ১০০ MCQ)",
    center: "সারাদেশের ১৯টি সরকারি মেডিকেল কলেজ কেন্দ্র",
    second_time: "আছে (৫ নম্বর কর্তন)",
    negative_mark: "০.২৫",
    pass_mark: "৪০ (৪০%)"
  },
  {
    university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'ক' ইউনিট (বিজ্ঞান অনুষদ)",
    circular_link: "https://admission.eis.du.ac.bd",
    mark_distribution: "MCQ ৬০ নম্বর (পদার্থ ১৫, রসায়ন ১৫, গণিত ১৫, জীববিজ্ঞান ১৫) + লিখিত ৪০ নম্বর (৪টি বিষয়ে ১০ করে)",
    center: "ঢাকাসহ ৮টি বিভাগীয় সরকারি বিশ্ববিদ্যালয় কেন্দ্র",
    second_time: "নেই",
    negative_mark: "০.২৫ (MCQ)",
    pass_mark: "৪০ (MCQ ২৪ + লিখিত ১২ বাধ্যতামূলক)"
  },
  {
    university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'খ' ইউনিট (কলা, আইন ও সামাজিক বিজ্ঞান)",
    circular_link: "https://admission.eis.du.ac.bd",
    mark_distribution: "MCQ ৬০ নম্বর (বাংলা/উন্নত বাংলা ২০, ইংরেজি ২০, সাধারণ জ্ঞান ২০) + লিখিত ৪০ নম্বর",
    center: "৮টি বিভাগীয় শহর কেন্দ্র",
    second_time: "নেই",
    negative_mark: "০.২৫",
    pass_mark: "৪০ নম্বর"
  },
  {
    university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)",
    circular_link: "https://juniv-admission.org",
    mark_distribution: "৮০ নম্বরের MCQ পরীক্ষা + ২০ নম্বর এসএসসি ও এইচএসসি জিপিএ স্কোর",
    center: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় ক্যাম্পাস, সাভার",
    second_time: "আছে",
    negative_mark: "০.২০",
    pass_mark: "৩৩% (২৭ নম্বর)"
  },
  {
    university: "রাজশাহী বিশ্ববিদ্যালয় (RU)",
    circular_link: "https://admission.ru.ac.bd",
    mark_distribution: "১০০ নম্বরের ১০০টি MCQ প্রশ্ন (প্রতি প্রশ্নের মান ১.০)",
    center: "রাজশাহী বিশ্ববিদ্যালয় ক্যাম্পাস",
    second_time: "আছে",
    negative_mark: "০.২০",
    pass_mark: "৪০ নম্বর"
  },
  {
    university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)",
    circular_link: "https://admission.cu.ac.bd",
    mark_distribution: "১০০ নম্বরের MCQ পরীক্ষা + এসএসসি ও এইচএসসি জিপিএ ২০ নম্বর",
    center: "চট্টগ্রাম বিশ্ববিদ্যালয় ক্যাম্পাস এবং ঢাকাসহ নির্বাচিত কেন্দ্র",
    second_time: "আছে (৫ নম্বর কর্তন)",
    negative_mark: "০.২৫",
    pass_mark: "৪০ নম্বর"
  },
  {
    university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)",
    circular_link: "https://gstadmission.ac.bd",
    mark_distribution: "১০০ নম্বরের একযোগে সমন্বিত MCQ পরীক্ষা (বিজ্ঞান, মানবিক ও বাণিজ্য আলাদা ইউনিট)",
    center: "দেশব্যাপী সকল গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের ক্যাম্পাস",
    second_time: "আছে",
    negative_mark: "০.২৫",
    pass_mark: "৩০ নম্বর"
  },
  {
    university: "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)",
    circular_link: "https://acas.edu.bd",
    mark_distribution: "১০০ নম্বরের MCQ (ইংরেজি ১০, উদ্ভিদবিজ্ঞান ১৫, প্রাণিবিজ্ঞান ১৫, পদার্থবিজ্ঞান ২০, রসায়ন ২০, গণিত ২০)",
    center: "৯টি কৃষি বিশ্ববিদ্যালয়ের ক্যাম্পাস কেন্দ্র",
    second_time: "আছে",
    negative_mark: "০.২৫",
    pass_mark: "৪০ নম্বর"
  },
  {
    university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)",
    circular_link: "https://admission.bup.edu.bd",
    mark_distribution: "অনুষদভেদে ১০০ নম্বরের লিখিত ও MCQ পরীক্ষা",
    center: "মিরপুর সেনানিবাস, ঢাকা",
    second_time: "আছে",
    negative_mark: "০.২৫",
    pass_mark: "৪০%"
  },
  {
    university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)",
    circular_link: "https://butex.edu.bd",
    mark_distribution: "লিখিত পরীক্ষা মোট ২০০ নম্বর (পদার্থ ৬০, রসায়ন ৬০, গণিত ৬০, ইংরেজি ২০)",
    center: "বুটেক্স ক্যাম্পাস, তেজগাঁও, ঢাকা",
    second_time: "নেই",
    negative_mark: "নেই",
    pass_mark: "৪০%"
  },
  {
    university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ",
    circular_link: "https://collegeadmission.eis.du.ac.bd",
    mark_distribution: "১০০ নম্বরের ১০০টি MCQ প্রশ্ন (এসএসসি ও এইচএসসি থেকে ২০ নম্বর)",
    center: "ঢাকা মহানগরের ৭টি কলেজের কেন্দ্রসমূহ",
    second_time: "আছে",
    negative_mark: "০.২৫",
    pass_mark: "৪০ নম্বর"
  }
];

export const DEFAULT_APPLY_DATA: ApplyItem[] = [
  { 
    university: "ঢাকা বিশ্ববিদ্যালয় (DU) - সকল ইউনিট", 
    start_date: "2026-11-11 12:00:00", 
    end_date: "2026-11-25 23:59:00", 
    fee: "বিজ্ঞান, মানবিক, বাণিজ্য - ১০৫০ টাকা; IBA - ১৫০০ টাকা; চারুকলা - ১২৫০ টাকা", 
    apply_link: "https://admission.eis.du.ac.bd" 
  },
  { 
    university: "রাজশাহী বিশ্ববিদ্যালয় (RU) - সকল ইউনিট", 
    start_date: "2026-11-12 00:00:00", 
    end_date: "2026-11-27 23:59:00", 
    fee: "A, C ইউনিট - ১৩২০ টাকা; B ইউনিট - ১১০০ টাকা (প্রাথমিক ৫৫ টাকা)", 
    apply_link: "https://admission.ru.ac.bd" 
  },
  { 
    university: "জগন্নাথ বিশ্ববিদ্যালয় (JnU)", 
    start_date: "2026-11-15 12:00:00", 
    end_date: "2026-12-10 23:59:00", 
    fee: "A, B, C, D ইউনিট - ১০০০ টাকা; E ইউনিট - ১২০০ টাকা", 
    apply_link: "https://jnuadmission.com" 
  },
  { 
    university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)", 
    start_date: "2026-11-15 12:00:00", 
    end_date: "2026-12-10 22:59:00", 
    fee: "১০০০ টাকা (প্রতি ইউনিট / উপ-ইউনিট)", 
    apply_link: "https://admission.cu.ac.bd" 
  },
  { 
    university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)", 
    start_date: "2025-12-28", 
    end_date: "2026-01-18", 
    fee: "কা ইউনিট (প্রকৌশল) - ১০০০ টাকা; খা ইউনিট (স্থাপত্য) - ১২৫০ টাকা", 
    apply_link: "https://www.buet.ac.bd" 
  },
  { 
    university: "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)", 
    start_date: "2025-12-10", 
    end_date: "2025-12-25", 
    fee: "১০০০ টাকা (টেলিটক প্রিপেইড)", 
    apply_link: "http://dgme.teletalk.com.bd" 
  },
  { 
    university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)", 
    start_date: "2025-12-18", 
    end_date: "2026-01-15", 
    fee: "A, B, C, D ইউনিট - ৯০০ টাকা; C1, E, IBA-JU - ৬০০ টাকা", 
    apply_link: "https://juniv-admission.org" 
  },
  { 
    university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)", 
    start_date: "2026-01-20", 
    end_date: "2026-02-15", 
    fee: "১৫০০ টাকা", 
    apply_link: "https://gstadmission.ac.bd" 
  },
  { 
    university: "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)", 
    start_date: "2026-02-01", 
    end_date: "2026-02-28", 
    fee: "১২০০ টাকা", 
    apply_link: "https://acas.edu.bd" 
  },
  { 
    university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)", 
    start_date: "2025-11-15", 
    end_date: "2025-12-10", 
    fee: "১০০০ টাকা (প্রতি অনুষদ)", 
    apply_link: "https://admission.bup.edu.bd" 
  },
  { 
    university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)", 
    start_date: "2026-01-05", 
    end_date: "2026-01-28", 
    fee: "১০০০ টাকা", 
    apply_link: "https://butex.edu.bd" 
  },
  { 
    university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ", 
    start_date: "2026-02-10", 
    end_date: "2026-03-10", 
    fee: "৭০০ টাকা", 
    apply_link: "https://collegeadmission.eis.du.ac.bd" 
  },
  { 
    university: "বিএসসি ও ডিপ্লোমা নার্সিং ভর্তি পরীক্ষা", 
    start_date: "2026-02-15", 
    end_date: "2026-03-15", 
    fee: "বিএসসি ৭০০ টাকা, ডিপ্লোমা ও মিডওয়াইফারি ৫০০ টাকা", 
    apply_link: "http://bnmc.teletalk.com.bd" 
  }
];

export const DEFAULT_ADMIT_DATA: AdmitItem[] = [
  { university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)", period: "২৫ জানুয়ারি ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://www.buet.ac.bd" },
  { university: "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)", period: "০৮ জানুয়ারি ২০২৬ হতে ১৫ জানুয়ারি ২০২৬", link: "http://dgme.teletalk.com.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - সকল ইউনিট", period: "২৩ জানুয়ারি ২০২৬ হতে সংশ্লিষ্ট ইউনিটের পরীক্ষার ১ ঘণ্টা পূর্ব পর্যন্ত", link: "https://admission.eis.du.ac.bd" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)", period: "০৫ ফেব্রুয়ারি ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://juniv-admission.org" },
  { university: "রাজশাহী বিশ্ববিদ্যালয় (RU)", period: "১৮ ফেব্রুয়ারি ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://admission.ru.ac.bd" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU)", period: "২৫ ফেব্রুয়ারি ২০২৬ হতে পরীক্ষা শুরুর দিন পর্যন্ত", link: "https://admission.cu.ac.bd" },
  { university: "জগন্নাথ বিশ্ববিদ্যালয় (JnU)", period: "০১ মার্চ ২০২৬ হতে পরীক্ষা শুরুর দিন পর্যন্ত", link: "https://jnuadmission.com" },
  { university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)", period: "০৫ মার্চ ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://gstadmission.ac.bd" },
  { university: "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)", period: "২৫ মার্চ ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://acas.edu.bd" },
  { university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)", period: "১৫ জানুয়ারি ২০২৬ হতে ২২ জানুয়ারি ২০২৬", link: "https://admission.bup.edu.bd" },
  { university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)", period: "০১ মার্চ ২০২৬ হতে ১০ মার্চ ২০২৬", link: "https://butex.edu.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ", period: "০৫ এপ্রিল ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://collegeadmission.eis.du.ac.bd" },
  { university: "ঢাকা সেন্ট্রাল ইউনিভার্সিটি (DCU)", period: "০৮ জুলাই ২০২৬ হতে পরীক্ষা শুরুর পূর্ব পর্যন্ত", link: "https://dcuadmission.org" }
];

export const DEFAULT_RESULT_DATA: ResultItem[] = [
  { university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)", result_link: "https://www.buet.ac.bd" },
  { university: "মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS & BDS)", result_link: "http://result.dghs.gov.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'ক' ইউনিট (বিজ্ঞান)", result_link: "https://admission.eis.du.ac.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'খ' ইউনিট (কলা, আইন ও সামাজিক বিজ্ঞান)", result_link: "https://admission.eis.du.ac.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'গ' ইউনিট (ব্যবসায় শিক্ষা)", result_link: "https://admission.eis.du.ac.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - 'চ' ইউনিট (চারুকলা অনুষদ)", result_link: "https://admission.eis.du.ac.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় (DU) - আইবিএ (IBA)", result_link: "https://admission.eis.du.ac.bd" },
  { university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU) - সকল ইউনিট", result_link: "https://juniv-admission.org" },
  { university: "রাজশাহী বিশ্ববিদ্যালয় (RU) - A, B, C ইউনিট", result_link: "https://admission.ru.ac.bd" },
  { university: "চট্টগ্রাম বিশ্ববিদ্যালয় (CU) - A, B, C, D ইউনিট", result_link: "https://admission.cu.ac.bd" },
  { university: "জগন্নাথ বিশ্ববিদ্যালয় (JnU) - A, C ইউনিট", result_link: "https://jnuadmission.com" },
  { university: "সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ (GST Cluster - ২৪ বিশ্ববিদ্যালয়)", result_link: "https://gstadmission.ac.bd" },
  { university: "কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা (৯টি কৃষি বিশ্ববিদ্যালয়)", result_link: "https://acas.edu.bd" },
  { university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস (BUP)", result_link: "https://admission.bup.edu.bd" },
  { university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয় (BUTEX)", result_link: "https://butex.edu.bd" },
  { university: "ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত ৭ সরকারি কলেজ", result_link: "https://collegeadmission.eis.du.ac.bd" }
];

export const DEFAULT_DATASETS: Record<string, any[]> = {
  timeline: DEFAULT_TIMELINE_DATA,
  info: DEFAULT_INFO_DATA,
  apply: DEFAULT_APPLY_DATA,
  admit: DEFAULT_ADMIT_DATA,
  result: DEFAULT_RESULT_DATA
};
