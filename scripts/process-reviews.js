const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'data', 'reviews');
const reviewsListFile = path.join(process.cwd(), 'data', 'reviews-list.ts');

const listContent = fs.readFileSync(reviewsListFile, 'utf8');
const reviewsList = eval(listContent.replace('export const reviewsList =', ''));

// Subject keyword mapping for contextual internal linking
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

// Rich synonyms, paraphrase phrases, and academic tone refinements
const phrasingMap = [
  // Headings
  { from: /<h[23][^>]*>\s*চাক[ুু]রীর\s+সুযোগ\s*(?:কীরকম|কেমন|কী রকম|কি রকম)\??\s*<\/h[23]>/gi, to: '<h2>কর্মক্ষেত্রের পরিধি ও ক্যারিয়ার সম্ভাবনা</h2>' },
  { from: /<h[23][^>]*>\s*বিদেশে\s+উচ্চশিক্ষার\s+সুযোগ\s*(?:কীরকম|কেমন|কী রকম|কি রকম)\??\s*<\/h[23]>/gi, to: '<h2>উচ্চশিক্ষা ও আন্তর্জাতিক গবেষণার সুযোগ</h2>' },
  { from: /<h[23][^>]*>\s*পড়াশোনার\s+(?:সুযোগ|পরিবেশ|মান)\s*(?:কীরকম|কেমন|কী রকম|কি রকম)\??\s*<\/h[23]>/gi, to: '<h2>একাডেমিক পরিবেশ ও পাঠদান পদ্ধতি</h2>' },
  { from: /<h[23][^>]*>\s*(?:সাবজেক্টের\s+ভালো\s+দিক|সুবিধাসমূহ)\s*<\/h[23]>/gi, to: '<h2>বিষয়টির ইতিবাচক ও সম্ভাবনাময় দিকসমূহ</h2>' },
  { from: /<h[23][^>]*>\s*(?:সাবজেক্টের\s+খারাপ\s+দিক|সীমাবদ্ধতা)\s*<\/h[23]>/gi, to: '<h2>যেসব চ্যালেঞ্জ ও বিবেচ্য বিষয় রয়েছে</h2>' },
  { from: /<h[23][^>]*>\s*(?:শেষ\s*কথা|উপসংহার)\s*[:]?\s*<\/h[23]>/gi, to: '<h2>সারসংক্ষেপ ও ভর্তিচ্ছুদের জন্য দিকনির্দেশনা</h2>' },

  // Synonymous vocabularies and paraphrasing while keeping all facts
  { from: /চাকরি-বাকরি বগলদাবা করা/g, to: 'পছন্দসই পেশা ও ক্যারিয়ারে সফল হওয়া' },
  { from: /চাকরি-বাকরি/g, to: 'পেশাগত কর্মসংস্থান' },
  { from: /খুব বেশী/g, to: 'অত্যন্ত বিস্তৃত ও সম্ভাবনাময়' },
  { from: /খুব বেশি/g, to: 'অত্যন্ত সমৃদ্ধ ও সম্ভাবনাময়' },
  { from: /চাকুরীর বাজার/g, to: 'চাকরির বাজার ও কর্মক্ষেত্র' },
  { from: /চাকুরীর সুযোগ/g, to: 'ক্যারিয়ার ও কর্মসংস্থানের সুযোগ' },
  { from: /চাকরির সুযোগ/g, to: 'ক্যারিয়ারের সুযোগ' },
  { from: /হাই পেইড সেলারি/g, to: 'আকর্ষণীয় ও সম্মানজনক বেতন কাঠামো' },
  { from: /হাই পেইড সেলারির/g, to: 'উচ্চ বেতন ও আকর্ষণীয় সুযোগ-সুবিধার' },
  { from: /পড়াশোনা করতে চাইলে/g, to: 'উচ্চশিক্ষা গ্রহণ ও অধ্যয়ন করতে চাইলে' },
  { from: /পড়তে চাইলে/g, to: 'অধ্যয়ন করতে আগ্রহী হলে' },
  { from: /পড়ালেখা/g, to: 'লেখাপড়া ও প্রাতিষ্ঠানিক শিক্ষা' },
  { from: /স্কলারশিপের অসংখ্য সুযোগ/g, to: 'আন্তর্জাতিক স্কলারশিপ ও উচ্চতর ফেলোশিপের অপার সম্ভাবনা' },
  { from: /স্কলারশিপের সুযোগ/g, to: 'আন্তর্জাতিক শিক্ষাবৃত্তি ও স্কলারশিপের সুযোগ' },
  { from: /স্কলারশিপ নিয়ে পড়াশোনা/g, to: 'উচ্চশিক্ষার বৃত্তি নিয়ে উচ্চতর গবেষণা' },
  { from: /গবেষণার নতুন নতুন সুযোগ/g, to: 'উন্নত গবেষণার নিত্যনতুন দিগন্ত' },
  { from: /বিকাশমান বিষয়গুলোর মধ্যে/g, to: 'দ্রুত সম্প্রসারণশীল ও চাহিদাসম্পন্ন বিষয়গুলোর শীর্ষে' },
  { from: /অ্যালুমনাই এসোসিয়েশন/g, to: 'শক্তিশালী প্রাক্তন শিক্ষার্থী নেটওয়ার্ক (Alumni Network)' },
  { from: /সাবজেক্ট রিভিউ\s*:/g, to: 'বিষয় পরিচিতি ও একাডেমিক পর্যালোচনা:' },
  { from: /সাবজেক্ট চয়েজের ক্ষেত্রে/g, to: 'বিষয় নির্বাচনের ক্ষেত্রে' },
  { from: /প্যাশন আর প্রফেশন/g, to: 'ব্যক্তিগত আগ্রহ ও পেশাগত জীবনের চমৎকার মেলবন্ধন' },
  { from: /প্যাশনকে প্রফেশন/g, to: 'আগ্রহকে দীর্ঘমেয়াদি পেশায়' },
  { from: /সবদিক চিন্তাভাবনা করে/g, to: 'সার্বিক সম্ভাবনা ও ব্যক্তিগত সক্ষমতা বিশ্লেষণ করে' },
  { from: /শুভকামনা রইলো/g, to: 'সর্বাঙ্গীন সাফল্য ও শুভকামনা রইল' },
  { from: /শুভ কামনা ও অনেক অনেক দোয়া রইলো সবার জন্য/g, to: 'ভর্তিচ্ছু সকল শিক্ষার্থীর জন্য শুভকামনা ও সাফল্য কামনা রইল' }
];

function cleanAllSignaturesAndCredits(html) {
  let content = html;

  // 1. Remove reader counts & post-views
  content = content.replace(/<div class="post-views[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  content = content.replace(/<span class="post-views[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/লেখাটির পাঠক সংখ্যা:[\s\S]*?(\d[\d,]*|[\u09E6-\u09EF][\u09E6-\u09EF,]*)/gi, '');

  // 2. Remove promo / facebook groups / links
  content = content.replace(/<p[^>]*>.*?facebook\.com\/groups\/ugadmission.*?<\/p>/gi, '');
  content = content.replace(/<p[^>]*>.*?facebook\.com\/EngineersDiary.*?<\/p>/gi, '');
  content = content.replace(/<a[^>]*href="https:\/\/mbasic\.facebook\.com\/hashtag\/[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  content = content.replace(/<a[^>]*href="https:\/\/engineerdiary\.com\/[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  content = content.replace(/ইঞ্জিনিয়ারস ডায়েরী – Engineers Diary/gi, '');

  // 3. Remove author signatures and university mentions at bottom
  // Remove "Thanking you- ...", "লিখেছেন : ...", "লেখক- ...", "সেশন ...", etc.
  const endCleaningRegexes = [
    /<div[^>]*>\s*Thanking you-[\s\S]*?<\/div>\s*<\/div>\s*$/gi,
    /<div[^>]*>\s*Thanking you-[\s\S]*?<\/div>\s*$/gi,
    /<p[^>]*>\s*Thanking you-[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*নিম্নোক্ত তিনজনের পাঠানো রিভিউ থেকে সংকলিত\s*[:]?\s*<\/p>\s*$/gi,
    /<p[^>]*>\s*–\s*সালেহ হাসান নাকিব[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*Fazla Rabbi Mashrur[\s\S]*?<\/p>\s*(?:<p>.*?<\/p>\s*)*$/gi,
    /<div[^>]*>\s*Muntasir Rubayet[\s\S]*?<\/div>\s*(?:<div>.*?<\/div>\s*)*$/gi,
    /<div[^>]*>\s*Saifullah Sakib[\s\S]*?<\/div>\s*$/gi,
    /<div[^>]*>\s*আবদুস ছামাদ[\s\S]*?<\/div>\s*(?:<\/div>\s*)*$/gi,
    /<p[^>]*>\s*Sohanur Rahman Sagor[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*Uttam Kumar[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*–\s*Muhit Ahmed Jamil\s*<\/p>\s*$/gi,
    /<p[^>]*>\s*Abdullah Al tasim[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*Md\.\s*[\w\s.]+(?:<br\s*\/?>|\n)?\s*Department of[\s\S]*?<\/p>\s*$/gi,
    /<p[^>]*>\s*[\u0980-\u09FF\s.]+(?:<br\s*\/?>|\n)?\s*(?:সেশন|সেশন:)\s*[\d০-৯\s-]+[\s\S]*?<\/p>\s*$/gi,
    /<div[^>]*>\s*(?:সেশন|সেশন:)\s*[\d০-৯\s-]+[\s\S]*?<\/div>\s*$/gi,
    /<p[^>]*>\s*(?:লেখক|লিখেছেন|লেখাঃ|লেখা|রাইটার|ক্রেডিট|Credit|Writer|Author)\s*[-:–—]?\s*[\s\S]*?<\/p>\s*$/gi,
    /<div[^>]*>\s*(?:লেখক|লিখেছেন|লেখাঃ|লেখা|রাইটার|ক্রেডিট|Credit|Writer|Author)\s*[-:–—]?\s*[\s\S]*?<\/div>\s*(?:<\/div>\s*)*$/gi,
    /<span[^>]*>\s*(?:লিখেছেন|লেখক)\s*[:\-][\s\S]*?<\/div>\s*$/gi,
    /<p[^>]*>\s*[-–—]\s*[A-Za-z\u0980-\u09FF\s.]+\s*<\/p>\s*$/gi
  ];

  for (let round = 0; round < 3; round++) {
    for (const reg of endCleaningRegexes) {
      content = content.replace(reg, '');
    }
  }

  // 4. Remove leftover trailing empty/spacer blocks
  content = content.replace(/<(div|p|span)[^>]*>\s*(&nbsp;|\.|\s)*\s*<\/\1>\s*$/gi, '');
  content = content.replace(/<(div|p|span)[^>]*>\s*(&nbsp;|\.|\s)*\s*<\/\1>\s*$/gi, '');

  return content.trim();
}

function processReview(html, slug) {
  let content = cleanAllSignaturesAndCredits(html);

  // Apply phrasing map
  for (const item of phrasingMap) {
    content = content.replace(item.from, item.to);
  }

  // Inject Contextual Internal Links
  for (const target of linkTargets) {
    if (target.slug === slug) continue;

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

  // Final trim and clean
  content = cleanAllSignaturesAndCredits(content);
  return content.trim();
}

// Run on all reviews
const files = fs.readdirSync(reviewsDir);
let count = 0;
for (const file of files) {
  if (!file.endsWith('.json')) continue;
  const filePath = path.join(reviewsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.content = processReview(data.content, data.slug);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  count++;
}

console.log(`Finished processing all ${count} reviews.`);
