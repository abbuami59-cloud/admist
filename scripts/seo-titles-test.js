const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');
const REVIEWS_LIST_FILE = path.join(process.cwd(), 'data', 'reviews-list.ts');

const linkTargets = [
  { slug: 'computer-science-and-engineering', label: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)' },
  { slug: 'cse-ruet', label: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)' },
  { slug: 'eee-cu', label: 'Electrical and Electronic Engineering (EEE)' },
  { slug: 'eee-ruet', label: 'Electrical and Electronic Engineering (EEE)' },
  { slug: 'eee-kuet', label: 'Electrical and Electronic Engineering (EEE)' },
  { slug: 'civil-engineering-kuet', label: 'সিভিল ইঞ্জিনিয়ারিং (Civil Engineering)' },
  { slug: 'ce-ruet', label: 'সিভিল ইঞ্জিনিয়ারিং (Civil Engineering)' },
  { slug: 'ce', label: 'সিভিল ইঞ্জিনিয়ারিং (Civil Engineering)' },
  { slug: 'cuet-civi', label: 'সিভিল ইঞ্জিনিয়ারিং (Civil Engineering)' },
  { slug: 'mechanical-engineering-me', label: 'মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering)' },
  { slug: 'mechanical-engineering-cuet', label: 'মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering)' },
  { slug: 'sust-mechanical-engineering', label: 'মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering)' },
  { slug: 'swe-software-engineering', label: 'সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering)' },
  { slug: 'subject-review-iit-institute-of', label: 'সফটওয়্যার ইঞ্জিনিয়ারিং (IIT/SWE)' },
  { slug: 'architecture-department-review', label: 'স্থাপত্যবিদ্যা (Architecture)' },
  { slug: 'ruet-architecture', label: 'স্থাপত্যবিদ্যা (Architecture)' },
  { slug: 'biomedical-engineering-bme-bue', label: 'বায়োমেডিকেল ইঞ্জিনিয়ারিং (BME)' },
  { slug: 'genetic-engineering-and-biotechnology', label: 'জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি (GEB)' },
  { slug: 'biochemistry-and-molecular-biology-bmb', label: 'বায়োকেমিস্ট্রি অ্যান্ড মলিকুলার বায়োলজি (BMB)' },
  { slug: 'bmb-sust', label: 'বায়োকেমিস্ট্রি অ্যান্ড মলিকুলার বায়োলজি (BMB)' },
  { slug: 'microbiology', label: 'অণুজীববিজ্ঞান (Microbiology)' },
  { slug: 'department-of-microbiology-mbio-cu', label: 'অণুজীববিজ্ঞান (Microbiology)' },
  { slug: 'pharmacy-department-cu', label: 'ফার্মেসি (Pharmacy)' },
  { slug: 'pharmacy-departmen', label: 'ফার্মেসি (Pharmacy)' },
  { slug: 'ipe-ruet', label: 'ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE)' },
  { slug: 'iem-kuet', label: 'ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE/IEM)' },
  { slug: 'mse-kuet', label: 'ম্যাটেরিয়ালস সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE)' },
  { slug: 'mse-ruet', label: 'ম্যাটেরিয়ালস সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE)' },
  { slug: 'petroleum-and-mining-engineering', label: 'পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং (PME)' },
  { slug: 'pme-sust', label: 'পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং (PME)' },
  { slug: 'aeronautical-engineering-ae-mist', label: 'অ্যারোনটিক্যাল ইঞ্জিনিয়ারিং (Aeronautical Engineering)' },
  { slug: 'textile-engineering-management-tem-butex', label: 'টেক্সটাইল ইঞ্জিনিয়ারিং (Textile Engineering)' },
  { slug: 'bachelor-of-business-administration-bba', label: 'ব্যবসায় প্রশাসন (BBA)' },
  { slug: 'accounting-department-cu', label: 'হিসাববিজ্ঞান (Accounting)' },
  { slug: 'finance-department-cu', label: 'ফিন্যান্স (Finance)' },
  { slug: 'marketing-department-cu', label: 'মার্কেটিং (Marketing)' },
  { slug: 'department-of-management-university-of', label: 'ব্যবস্থাপনা (Management)' },
  { slug: 'economics-department-cu', label: 'অর্থনীতি (Economics)' },
  { slug: 'department-of-law-cu', label: 'আইন বিভাগ (Law)' },
  { slug: 'department-of-english-university-of', label: 'ইংরেজি বিভাগ (English)' },
  { slug: 'department-of-public-administration', label: 'লোকপ্রশাসন (Public Administration)' },
  { slug: 'public-administration-department-pad', label: 'লোকপ্রশাসন (Public Administration)' },
  { slug: 'international-relationship-department-cu', label: 'আন্তর্জাতিক সম্পর্ক (International Relations)' },
  { slug: 'agriculture-department-bau', label: 'কৃষিবিজ্ঞান (Agriculture)' },
  { slug: 'fisheries-department-hstu', label: 'মৎস্যবিজ্ঞান (Fisheries)' },
  { slug: 'department-of-forestry-and', label: 'বনবিদ্যা ও পরিবেশ বিজ্ঞান (Forestry)' },
  { slug: 'statistics-department-stat-cu', label: 'পরিসংখ্যান (Statistics)' },
  { slug: 'mathematics-department-math-cu', label: 'গণিত (Mathematics)' },
  { slug: 'physics-department-phy-cu', label: 'পদার্থবিজ্ঞান (Physics)' },
  { slug: 'chemistry-department-cu', label: 'রসায়ন (Chemistry)' },
  { slug: 'acce', label: 'ফলিত রসায়ন ও রাসায়নিক প্রকৌশল (ACCE)' },
  { slug: 'botany-du', label: 'উদ্ভিদবিজ্ঞান (Botany)' },
  { slug: 'department-of-botany-cu', label: 'উদ্ভিদবিজ্ঞান (Botany)' },
  { slug: 'department-of-soil-science-cu', label: 'মৃত্তিকাবিজ্ঞান (Soil Science)' },
  { slug: 'psychology-department-cu', label: 'মনোবিজ্ঞান (Psychology)' },
  { slug: 'sociology-department-cu', label: 'সমাজবিজ্ঞান (Sociology)' },
  { slug: 'department-of-sociology-bup', label: 'সমাজবিজ্ঞান (Sociology)' },
  { slug: 'department-of-anthropology-cu', label: 'নৃবিজ্ঞান (Anthropology)' },
  { slug: 'subject-review-anthropology', label: 'নৃবিজ্ঞান (Anthropology)' },
  { slug: 'agri-engineering', label: 'এগ্রিকালচারাল ইঞ্জিনিয়ারিং (Agri Engineering)' },
  { slug: 'animal-science-and-veterinary-medicine', label: 'অ্যানিমেল সায়েন্স অ্যান্ড ভেটেরিনারি মেডিসিন (ASVM)' },
  { slug: 'applied-environmental-chemistry-aec-cu', label: 'এপ্লায়েড অ্যান্ড এনভায়রনমেন্টাল কেমিস্ট্রি (AEC)' },
  { slug: 'bachelor-of-dental-and-surgery-bds', label: 'ডেন্টাল সার্জারি (BDS)' },
  { slug: 'becm', label: 'বিল্ডিং ইঞ্জিনিয়ারিং অ্যান্ড কনস্ট্রাকশন ম্যানেজমেন্ট (BECM)' },
  { slug: 'butex-b-unit-review-with-video', label: 'টেক্সটাইল ইঞ্জিনিয়ারিং (BUTEX)' },
  { slug: 'ca', label: 'চার্টার্ড একাউন্টেন্সি (CA)' },
  { slug: 'civil-and-environmental-engineering', label: 'সিভিল অ্যান্ড এনভায়রনমেন্টাল ইঞ্জিনিয়ারিং (CEE)' },
  { slug: 'chemical-engineering', label: 'কেমিক্যাল ইঞ্জিনিয়ারিং (Chemical Engineering)' },
  { slug: 'blog-post_13-2', label: 'ফার্মাসিউটিক্যাল জব সেক্টর' },
  { slug: 'blog-post_56', label: 'কম্পিউটার সায়েন্স (CS)' },
  { slug: 'blog-post_85', label: 'মেকানিক্যাল জব সেক্টর (Power Plant)' },
  { slug: 'blog-post_95', label: 'পদার্থবিজ্ঞান (Physics)' },
  { slug: 'cu-2', label: 'মেরিন সায়েন্সেস (Marine Sciences)' },
  { slug: 'department-of-banking-insurance-cu', label: 'ব্যাংকিং অ্যান্ড ইন্স্যুরেন্স (Banking & Insurance)' },
  { slug: 'department-of-bengali-cu', label: 'বাংলা বিভাগ (Bengali)' },
  { slug: 'department-of-farsi-cu', label: 'ফার্সি ভাষা ও সাহিত্য (Persian)' },
  { slug: 'department-of-fine-art-cu', label: 'চারুকলা (Fine Arts)' },
  { slug: 'department-of-geography-environmenta', label: 'ভূগোল ও পরিবেশবিদ্যা (Geography & Environment)' },
  { slug: 'department-of-history-cu', label: 'ইতিহাস (History)' },
  { slug: 'ece-ruet', label: 'ইলেকট্রিক্যাল অ্যান্ড কম্পিউটার ইঞ্জিনিয়ারিং (ECE)' },
  { slug: 'eece-electrical-electronics-and', label: 'ইলেকট্রিক্যাল, ইলেকট্রনিক অ্যান্ড কমিউনিকেশন (EECE)' },
  { slug: 'environmental-science-engineering-ese', label: 'এনভায়রনমেন্টাল সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (ESE)' },
  { slug: 'ese-kuet', label: 'এনার্জি সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (ESE)' },
  { slug: 'ete-ruet', label: 'ইলেকট্রনিক্স অ্যান্ড টেলিকমিউনিকেশন ইঞ্জিনিয়ারিং (ETE)' },
  { slug: 'faculty-of-marin-sciences-and-fisheries', label: 'মেরিন সায়েন্সেস অ্যান্ড ফিশারিজ (Marine Sciences)' },
  { slug: 'food-engineering-and-tea-technology-fe', label: 'ফুড ইঞ্জিনিয়ারিং অ্যান্ড টি টেকনোলজি (FET)' },
  { slug: 'food-nutrition-du', label: 'খাদ্য ও পুষ্টিবিজ্ঞান (Food & Nutrition)' },
  { slug: 'forestry-and-environmental-science-fes', label: 'ফরেস্ট্রি অ্যান্ড এনভায়রনমেন্টাল সায়েন্স (FES)' },
  { slug: 'fwt-forestry-wood-technology-khulna', label: 'ফরেস্ট্রি অ্যান্ড উড টেকনোলজি (FWT)' },
  { slug: 'gce-ruet', label: 'গ্লাস অ্যান্ড সিরামিক ইঞ্জিনিয়ারিং (GCE)' },
  { slug: 'human-resource-management-department-cu', label: 'হিউম্যান রিসোর্স ম্যানেজমেন্ট (HRM)' },
  { slug: 'information-and-communication', label: 'ইনফরমেশন অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ICE)' },
  { slug: 'institute-of-education-and-research-ier', label: 'শিক্ষা ও গবেষণা ইনস্টিটিউট (IER)' },
  { slug: 'it-information-technology-du', label: 'ইনফরমেশন টেকনোলজি (IT)' },
  { slug: 'journalism-cu', label: 'গণযোগাযোগ ও সাংবাদিকতা (Journalism)' },
  { slug: 'le-kuet', label: 'লেদার ইঞ্জিনিয়ারিং (Leather Engineering)' },
  { slug: 'marine-fisheries-bsmrmu', label: 'মেরিন ফিশারিজ (Marine Fisheries)' },
  { slug: 'maritime-law-bsmrmu', label: 'মেরিটাইম ল (Maritime Law)' },
  { slug: 'mis-2', label: 'ম্যানেজমেন্ট ইনফরমেশন সিস্টেমস (MIS)' },
  { slug: 'mte-kuet', label: 'মেকাট্রনিক্স ইঞ্জিনিয়ারিং (Mechatronics)' },
  { slug: 'mte-ruet', label: 'মেকাট্রনিক্স ইঞ্জিনিয়ারিং (Mechatronics)' },
  { slug: 'naoe', label: 'নেভাল আর্কিটেকচার অ্যান্ড মেরিন ইঞ্জিনিয়ারিং (NAME)' },
  { slug: 'nstu-education-administration', label: 'এডুকেশন অ্যাডমিনিস্ট্রেশন (Education Administration)' },
  { slug: 'oceanography-hydrography-bsmrmu', label: 'ওশানোগ্রাফি অ্যান্ড হাইড্রোগ্রাফি (Oceanography)' },
  { slug: 'port-management-and-logistics-pml', label: 'পোর্ট ম্যানেজমেন্ট অ্যান্ড লজিস্টিকস (PML)' },
  { slug: 'pubd', label: 'প্রিন্টিং অ্যান্ড পাবলিকেশন স্টাডিজ (Printing & Publication)' },
  { slug: 'subject-review', label: 'যেকোনো বিষয় (Subject Review)' },
  { slug: 'sylebus-of-kue', label: 'KUET সিলেবাস' },
  { slug: 'syllabus-of-mechanical-kue', label: 'মেকানিক্যাল ইঞ্জিনিয়ারিং সিলেবাস' },
  { slug: 'tfd-butex', label: 'টেক্সটাইল ফ্যাশন ডিজাইন (TFD)' },
  { slug: 'tourism-and-hospitality-nstu', label: 'ট্যুরিজম অ্যান্ড হসপিটালিটি ম্যানেজমেন্ট (THM)' },
  { slug: 'urp', label: 'আরবান অ্যান্ড রিজিওনাল প্ল্যানিং (URP)' },
  { slug: 'why-biotechnology', label: 'বায়োটেকনোলজি (Biotechnology)' },
  { slug: 'wre', label: 'ওয়াটার রিসোর্সেস ইঞ্জিনিয়ারিং (WRE)' },
  { slug: 'zoology-departmen', label: 'প্রাণিবিদ্যা (Zoology)' },
  { slug: 'du-sociology', label: 'সমাজবিজ্ঞান (Sociology)' }
];

function generateSeoTitle(originalTitle, slug) {
  let base = "";
  const mapping = linkTargets.find(t => t.slug === slug);
  
  if (mapping) {
    base = mapping.label;
    if (base === 'Electrical and Electronic Engineering (EEE)') {
       base = 'ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE)';
    }
  } else {
    // URL Encoded ones
    if (slug.includes('%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%bf')) base = 'ক্রিমিনোলজি (Criminology)';
    else if (slug.includes('%e0%a6%97%e0%a6%a3%e0%a6%bf%e0%a6%a4')) base = 'পদার্থবিজ্ঞান (Physics)';
    else if (slug.includes('%e0%a6%af%e0%a7%87-%e0%a6%85%e0%a6%a8%e0%a6%a8%e0%a7%8d%e0%a6%af')) base = 'ইলেকট্রনিক্স অ্যান্ড কমিউনিকেশন (ECE)';
    else if (slug.includes('%e0%a6%b8%e0%a6%ae%e0%a6%be%e0%a6%9c%e0%a6%ac%e0%a6%bf')) base = 'সমাজবিজ্ঞান (Sociology)';
    else if (slug.includes('%e0%a6%ab%e0%a6%bf%e0%a6%9c%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b8')) base = 'পদার্থবিজ্ঞান (Physics)';
    else if (originalTitle.includes('MEC EEE')) base = 'ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE)';
    else {
      let cleanTitle = originalTitle;
      cleanTitle = cleanTitle.replace(/\s*-\s*CUET|\s*-\s*DU|\s*\(.*?\)\s*RUET|\s*RUET/ig, '');
      cleanTitle = cleanTitle.replace(/,\s*KUET|,\s*BSMRMU/ig, '');
      cleanTitle = cleanTitle.replace(/Subject Review.*/i, '').trim();
      cleanTitle = cleanTitle.replace(/বিভাগ,\s*ঢাবি/ig, '');
      base = cleanTitle;
    }
  }
  
  return base + ' Subject Review | ক্যারিয়ার ও পড়াশোনা';
}

const files = fs.readdirSync(REVIEWS_DIR).filter(f => f.endsWith('.json'));
let updatedCount = 0;
const newList = [];

for (const file of files) {
  const filePath = path.join(REVIEWS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const seoTitle = generateSeoTitle(data.title, data.slug);
  
  data.title = seoTitle;
  //fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  
  newList.push({
    id: data.id,
    slug: data.slug,
    title: seoTitle
  });
  updatedCount++;
}

newList.sort((a, b) => a.id - b.id);

const tsContent = `export interface ReviewMeta {\n  id: number;\n  slug: string;\n  title: string;\n}\n\nexport const reviewsList: ReviewMeta[] = ${JSON.stringify(newList, null, 2)};\n`;
//fs.writeFileSync(REVIEWS_LIST_FILE, tsContent, 'utf8');

console.log(`Updated SEO titles for ${updatedCount} reviews and rebuilt reviews-list.ts!`);
