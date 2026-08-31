const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'data', 'reviews');

const linkTargets = [
  { match: /(?:Computer Science and Engineering|কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং|কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিং|কম্পিউটার সায়েন্স|কম্পিউটার প্রকৌশল|সিএসই|CSE)/g, slug: 'computer-science-and-engineering', label: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)' },
  { match: /(?:Electrical and Electronic Engineering|তড়িৎ ও ইলেকট্রনিক কৌশল|ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং|তড়িৎ প্রকৌশল|ট্রিপল ই|EEE)/g, slug: 'eee-cu', label: 'Electrical and Electronic Engineering (EEE)' },
  { match: /(?:Civil Engineering|পুরকৌশল|সিভিল ইঞ্জিনিয়ারিং|সিভিল প্রকৌশল)/g, slug: 'civil-engineering-kuet', label: 'সিভিল ইঞ্জিনিয়ারিং (Civil Engineering)' },
  { match: /(?:Mechanical Engineering|যন্ত্রকৌশল|মেকানিক্যাল ইঞ্জিনিয়ারিং|যন্ত্র প্রকৌশল)/g, slug: 'mechanical-engineering-me', label: 'মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering)' },
  { match: /(?:Software Engineering|সফটওয়্যার ইঞ্জিনিয়ারিং|সফটওয়্যার প্রকৌশল|SWE)/g, slug: 'swe-software-engineering', label: 'সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering)' },
  { match: /(?:Architecture|স্থাপত্যবিদ্যা|আর্কিটেকচার|স্থাপত্য প্রকৌশল)/g, slug: 'architecture-department-review', label: 'স্থাপত্যবিদ্যা (Architecture)' },
  { match: /(?:Biomedical Engineering|বায়োমেডিকেল ইঞ্জিনিয়ারিং|বায়োমেডিকেল|BME)/g, slug: 'biomedical-engineering-bme-bue', label: 'বায়োমেডিকেল ইঞ্জিনিয়ারিং (BME)' },
  { match: /(?:Genetic Engineering and Biotechnology|জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি|জেনেটিক ইঞ্জিনিয়ারিং|GEB)/g, slug: 'genetic-engineering-and-biotechnology', label: 'জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি (GEB)' },
  { match: /(?:Biochemistry and Molecular Biology|বায়োকেমিস্ট্রি অ্যান্ড মলিকুলার বায়োলজি|প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান|বায়োকেমিস্ট্রি|প্রাণরসায়ন|BMB)/g, slug: 'biochemistry-and-molecular-biology-bmb', label: 'বায়োকেমিস্ট্রি অ্যান্ড মলিকুলার বায়োলজি (BMB)' },
  { match: /(?:Microbiology|অণুজীববিজ্ঞান|মাইক্রোবায়োলজি)/g, slug: 'microbiology', label: 'অণুজীববিজ্ঞান (Microbiology)' },
  { match: /(?:Pharmacy|ফার্মেসি বিভাগ|ফার্মেসি)/g, slug: 'pharmacy-department-cu', label: 'ফার্মেসি (Pharmacy)' },
  { match: /(?:Industrial and Production Engineering|ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং|ইন্ডাস্ট্রিয়াল ইঞ্জিনিয়ারিং|IPE)/g, slug: 'ipe-ruet', label: 'ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE)' },
  { match: /(?:Materials Science and Engineering|ম্যাটেরিয়ালস সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং|ম্যাটেরিয়াল সায়েন্স|MSE)/g, slug: 'mse-kuet', label: 'ম্যাটেরিয়ালস সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE)' },
  { match: /(?:Petroleum and Mining Engineering|পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং|পেট্রোলিয়াম ইঞ্জিনিয়ারিং|PME)/g, slug: 'petroleum-and-mining-engineering', label: 'পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং (PME)' },
  { match: /(?:Aeronautical Engineering|অ্যারোনটিক্যাল ইঞ্জিনিয়ারিং|অ্যারোস্পেস|AE)/g, slug: 'aeronautical-engineering-ae-mist', label: 'অ্যারোনটিক্যাল ইঞ্জিনিয়ারিং (Aeronautical Engineering)' },
  { match: /(?:Textile Engineering Management|টেক্সটাইল ইঞ্জিনিয়ারিং|টেক্সটাইল প্রযুক্তি|TEM)/g, slug: 'textile-engineering-management-tem-butex', label: 'টেক্সটাইল ইঞ্জিনিয়ারিং (Textile Engineering)' },
  { match: /(?:Bachelor of Business Administration|ব্যবসায় প্রশাসন|বিবিএ|BBA)/g, slug: 'bachelor-of-business-administration-bba', label: 'ব্যবসায় প্রশাসন (BBA)' },
  { match: /(?:Accounting and Information Systems|হিসাববিজ্ঞান ও তথ্য ব্যবস্থা|হিসাববিজ্ঞান বিভাগ|একাউন্টিং)/g, slug: 'accounting-department-cu', label: 'হিসাববিজ্ঞান (Accounting)' },
  { match: /(?:Finance and Banking|ফিন্যান্স অ্যান্ড ব্যাংকিং|অর্থায়ন বিভাগ|ফিন্যান্স)/g, slug: 'finance-department-cu', label: 'ফিন্যান্স (Finance)' },
  { match: /(?:Marketing|মার্কেটিং বিভাগ|বিপণন বিদ্যা)/g, slug: 'marketing-department-cu', label: 'মার্কেটিং (Marketing)' },
  { match: /(?:Department of Management|ব্যবস্থাপনা বিভাগ|ম্যানেজমেন্ট)/g, slug: 'department-of-management-university-of', label: 'ব্যবস্থাপনা (Management)' },
  { match: /(?:Economics|অর্থনীতি বিভাগ|অর্থনীতি)/g, slug: 'economics-department-cu', label: 'অর্থনীতি (Economics)' },
  { match: /(?:Department of Law|আইন বিভাগ|আইনবিদ্যা)/g, slug: 'department-of-law-cu', label: 'আইন বিভাগ (Law)' },
  { match: /(?:Department of English|ইংরেজি সাহিত্য|ইংরেজি বিভাগ)/g, slug: 'department-of-english-university-of', label: 'ইংরেজি বিভাগ (English)' },
  { match: /(?:Public Administration|লোকপ্রশাসন বিভাগ|লোকপ্রশাসন)/g, slug: 'department-of-public-administration', label: 'লোকপ্রশাসন (Public Administration)' },
  { match: /(?:International Relations|আন্তর্জাতিক সম্পর্ক বিভাগ|আন্তর্জাতিক সম্পর্ক)/g, slug: 'international-relationship-department-cu', label: 'আন্তর্জাতিক সম্পর্ক (International Relations)' },
  { match: /(?:Agriculture|কৃষি অনুষদ|কৃষিবিজ্ঞান)/g, slug: 'agriculture-department-bau', label: 'কৃষিবিজ্ঞান (Agriculture)' },
  { match: /(?:Fisheries|মৎস্যবিজ্ঞান অনুষদ|মৎস্যবিজ্ঞান)/g, slug: 'fisheries-department-hstu', label: 'মৎস্যবিজ্ঞান (Fisheries)' },
  { match: /(?:Forestry and Environmental Science|বনবিদ্যা ও পরিবেশ বিজ্ঞান|বনবিদ্যা)/g, slug: 'department-of-forestry-and', label: 'বনবিদ্যা ও পরিবেশ বিজ্ঞান (Forestry)' },
  { match: /(?:Statistics|পরিসংখ্যান বিভাগ|পরিসংখ্যান)/g, slug: 'statistics-department-stat-cu', label: 'পরিসংখ্যান (Statistics)' },
  { match: /(?:Mathematics|গণিত বিভাগ|ফলিত গণিত)/g, slug: 'mathematics-department-math-cu', label: 'গণিত (Mathematics)' },
  { match: /(?:Physics|পদার্থবিজ্ঞান বিভাগ|পদার্থবিজ্ঞান)/g, slug: 'physics-department-phy-cu', label: 'পদার্থবিজ্ঞান (Physics)' },
  { match: /(?:Chemistry|রসায়ন বিভাগ|রসায়ন)/g, slug: 'chemistry-department-cu', label: 'রসায়ন (Chemistry)' },
  { match: /(?:Applied Chemistry and Chemical Engineering|ফলিত রসায়ন ও রাসায়নিক প্রকৌশল|ACCE)/g, slug: 'acce', label: 'ফলিত রসায়ন ও রাসায়নিক প্রকৌশল (ACCE)' },
  { match: /(?:Botany|উদ্ভিদবিজ্ঞান বিভাগ|উদ্ভিদবিজ্ঞান)/g, slug: 'botany-du', label: 'উদ্ভিদবিজ্ঞান (Botany)' },
  { match: /(?:Soil Science|মৃত্তিকাবিজ্ঞান বিভাগ|মৃত্তিকাবিজ্ঞান|সয়েল সায়েন্স)/g, slug: 'department-of-soil-science-cu', label: 'মৃত্তিকাবিজ্ঞান (Soil Science)' },
  { match: /(?:Psychology|মনোবিজ্ঞান বিভাগ|মনোবিজ্ঞান)/g, slug: 'psychology-department-cu', label: 'মনোবিজ্ঞান (Psychology)' },
  { match: /(?:Sociology|সমাজবিজ্ঞান বিভাগ|সমাজবিজ্ঞান)/g, slug: 'sociology-department-cu', label: 'সমাজবিজ্ঞান (Sociology)' },
  { match: /(?:Anthropology|নৃবিজ্ঞান বিভাগ|নৃবিজ্ঞান)/g, slug: 'department-of-anthropology-cu', label: 'নৃবিজ্ঞান (Anthropology)' },
  { match: /(?:Journalism|সাংবাদিকতা ও গণযোগাযোগ|সাংবাদিকতা)/g, slug: 'journalism-cu', label: 'সাংবাদিকতা ও গণযোগাযোগ (Journalism)' },
  { match: /(?:Fine Arts|চারুকলা ইনস্টিটিউট|চারুকলা)/g, slug: 'department-of-fine-art-cu', label: 'চারুকলা (Fine Arts)' },
  { match: /(?:Bachelor of Dental Surgery|ডেন্টাল সার্জারি|বিডিএস|BDS)/g, slug: 'bachelor-of-dental-and-surgery-bds', label: 'ডেন্টাল সার্জারি (BDS)' }
];

function cleanAllAuthorSignatures(text) {
  let content = text;

  // Remove reader counts and views
  content = content.replace(/<div class="post-views[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  content = content.replace(/<span class="post-views[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/লেখাটির পাঠক সংখ্যা:[\s\S]*?(\d[\d,]*|[\u09E6-\u09EF][\u09E6-\u09EF,]*)/gi, '');
  content = content.replace(/ইঞ্জিনিয়ারস ডায়েরী – Engineers Diary/gi, '');
  content = content.replace(/<a[^>]*href="https:\/\/[^"]*facebook[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');

  // Strip trailing writer info patterns even inside inner divs
  const signaturePatterns = [
    /(?:<br\s*\/?>|\n|\.)*\s*(?:লিখেছেন|লেখক|রাইটার|কৃতজ্ঞতা|সংকলন|সংকলনে|লেখা|সৌজন্যে|Writer|Author|Credit)\s*[:\-–—]?\s*(?:<[^>]+>|[^\n<]){3,150}(?:<br\s*\/?>|\n)?\s*(?:সেশন|ব্যাচ|সেশন:|ব্যাচ:)?\s*[\d০-৯\s\-\/,A-Za-z\u0980-\u09FF.]*$/gi,
    /(?:<br\s*\/?>|\n|\.)*\s*(?:–|-|—)\s*[A-Za-z\u0980-\u09FF\s.]+(?:<br\s*\/?>|\n)?\s*(?:Department of|বিভাগ|সেশন|ব্যাচ|বিশ্ববিদ্যালয়|University|RUET|KUET|CUET|BUET|DU|CU|JU|SUST)[\s\S]*?$/gi,
    /(?:<br\s*\/?>|\n|\.)*\s*Thanking you-[\s\S]*?$/gi,
    /(?:<br\s*\/?>|\n|\.)*\s*সেশন\s*[:]?\s*[\d০-৯\s\-–]+(?:<br\s*\/?>|\n)?\s*(?:সিএসই|ইইই|চবি|ঢাবি|রাবি|কুয়েট|রুয়েট|চুয়েট|শাবিপ্রবি|বিভাগ)?[\s\S]*?$/gi
  ];

  for (let r = 0; r < 3; r++) {
    for (const pat of signaturePatterns) {
      content = content.replace(pat, '');
    }
  }

  return content.trim();
}

function cleanHtmlJunk(html) {
  let content = html;

  // Remove word_break and Facebook emotion spans
  content = content.replace(/<span class="word_break"[^>]*><\/span>/gi, '');
  content = content.replace(/<span class="_47e3[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/<span aria-hidden="true"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/style="[^"]*word-wrap:[^"]*"/gi, '');
  content = content.replace(/style="[^"]*text-align:\s*(left|justify|start)[^"]*"/gi, '');
  
  // Clean repeated dots/spacers like <br>.<br> or <p>.</p>
  content = content.replace(/(?:<br\s*\/?>|\n)\s*\.\s*(?:<br\s*\/?>|\n)/gi, '<br/>');
  content = content.replace(/(?:<br\s*\/?>|\n)\s*\.\s*(?:<br\s*\/?>|\n)/gi, '<br/>');
  content = content.replace(/<p>\s*\.\s*<\/p>/gi, '');
  content = content.replace(/<div>\s*\.\s*<\/div>/gi, '');
  content = content.replace(/<span>\s*\.\s*<\/span>/gi, '');

  return content;
}

function formatHeadings(html) {
  let content = html;

  // Convert typical sections into clean h2 with IDs
  const headingReplacements = [
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:১\.\s*)?(?:বিষয় পরিচিতি ও একাডেমিক পর্যালোচনা|বিষয় পরিচিতি|বিভাগ পরিচিতি|সাবজেক্ট পরিচিতি|ডিপার্টমেন্ট পরিচিতি|About Department)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="overview" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>বিষয় পরিচিতি ও একাডেমিক পর্যালোচনা</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:২\.\s*)?(?:শিক্ষাপদ্ধতি|পাঠদান পদ্ধতি|কোর্স কারিকুলাম|সিলেবাস ও পড়াশোনা|কী কী পড়ানো হয়|একাডেমিক পরিবেশ ও পাঠদান পদ্ধতি)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="curriculum" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>কোর্স কারিকুলাম ও শিক্ষা পদ্ধতি</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:সেশনজট|সেশনজট ও রেজাল্ট|ল্যাব সুবিধা ও পরিবেশ)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="academic-environment" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>একাডেমিক পরিবেশ ও ল্যাবরেটরি সুবিধা</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:স্কলারশিপ|বিদেশে উচ্চশিক্ষার সুযোগ|উচ্চশিক্ষা ও আন্তর্জাতিক গবেষণার সুযোগ|উচ্চশিক্ষা ও স্কলারশিপ|উচ্চশিক্ষা)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="higher-study" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>উচ্চশিক্ষা ও আন্তর্জাতিক স্কলারশিপের সুযোগ</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:জবসেক্টর|চাকরির সুযোগ|ক্যারিয়ার ও কর্মসংস্থানের সুযোগ|কর্মক্ষেত্রের পরিধি ও ক্যারিয়ার সম্ভাবনা|ক্যারিয়ার সম্ভাবনা|চাকরির বাজার)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="career-scope" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>কর্মক্ষেত্রের পরিধি ও ক্যারিয়ার সম্ভাবনা</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:সুবিধাসমূহ|বিষয়টির ইতিবাচক ও সম্ভাবনাময় দিকসমূহ|ভালো দিক)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="advantages" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>বিষয়টির ইতিবাচক ও আকর্ষণীয় দিকসমূহ</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:সীমাবদ্ধতা|যেসব চ্যালেঞ্জ ও বিবেচ্য বিষয় রয়েছে|খারাপ দিক|চ্যালেঞ্জ)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="challenges" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>যেসব চ্যালেঞ্জ ও বিবেচ্য বিষয় রয়েছে</h2>'
    },
    {
      regex: /(?:<br\s*\/?>|\n|<p>|<div>)?\s*(?:<b>|<strong>)?\s*(?:শেষ কথা|সবশেষে বলা যায়|সারসংক্ষেপ ও ভর্তিচ্ছুদের জন্য দিকনির্দেশনা|ভর্তিচ্ছুদের জন্য পরামর্শ|উপসংহার)\s*[:]?\s*(?:<\/b>|<\/strong>)?\s*(?:<\/p>|<\/div>)?/gi,
      to: '<h2 id="guidelines" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>সারসংক্ষেপ ও ভর্তিচ্ছুদের জন্য দিকনির্দেশনা</h2>'
    }
  ];

  for (const item of headingReplacements) {
    content = content.replace(item.regex, item.to);
  }

  // Ensure any standard <h2> that does not have an ID gets one
  let h2Count = 0;
  content = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, innerText) => {
    h2Count++;
    if (/id=["'][^"']+["']/.test(attrs)) {
      return match;
    }
    const cleanId = 'section-' + h2Count;
    return `<h2 id="${cleanId}" class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-white/10"><span class="w-2 h-6 bg-emerald-500 rounded-full inline-block"></span>${innerText}</h2>`;
  });

  return content;
}

function processAll() {
  const files = fs.readdirSync(reviewsDir);
  let count = 0;

  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const filePath = path.join(reviewsDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    let content = data.content;
    content = cleanAllAuthorSignatures(content);
    content = cleanHtmlJunk(content);
    content = formatHeadings(content);
    content = cleanAllAuthorSignatures(content);

    // Apply internal links carefully
    for (const target of linkTargets) {
      if (target.slug === data.slug) continue;
      let replaced = false;
      content = content.replace(target.match, (matchedText, offset, fullStr) => {
        if (replaced) return matchedText;

        const prevStr = fullStr.substring(0, offset);
        const openTag = prevStr.lastIndexOf('<');
        const closeTag = prevStr.lastIndexOf('>');
        if (openTag > closeTag) return matchedText;

        const openAnchor = prevStr.lastIndexOf('<a');
        const closeAnchor = prevStr.lastIndexOf('</a>');
        if (openAnchor > closeAnchor) return matchedText;

        const openHeading = prevStr.lastIndexOf('<h');
        const closeHeading = prevStr.lastIndexOf('</h');
        if (openHeading > closeHeading) return matchedText;

        replaced = true;
        return `<a href="/subject-review/${target.slug}" class="text-emerald-600 dark:text-emerald-400 font-semibold underline decoration-emerald-300 dark:decoration-emerald-700 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" title="${target.label}">${matchedText}</a>`;
      });
    }

    data.content = content.trim();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    count++;
  }

  console.log(`Successfully upgraded and formatted ${count} subject reviews.`);
}

processAll();
