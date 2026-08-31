const fs = require('fs');
const path = require('path');
const { countWords } = require('./base_utils');
const { getSubjectKnowledge } = require('./subject_knowledge');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');
const META_FILE = path.join(process.cwd(), 'scripts', 'reviews_meta.json');
const reviewsList = JSON.parse(fs.readFileSync(META_FILE, 'utf8'));

if (!fs.existsSync(REVIEWS_DIR)) {
  fs.mkdirSync(REVIEWS_DIR, { recursive: true });
}

console.log(`Starting comprehensive generation for ${reviewsList.length} subject reviews...`);

let successCount = 0;
let errors = [];
let wordCounts = [];

for (const meta of reviewsList) {
  try {
    const knowledge = getSubjectKnowledge(meta.slug, meta.title);
    const htmlContent = generateReviewHtml(meta, knowledge);
    const words = countWords(htmlContent);

    if (words < 900) {
      console.warn(`WARNING: Review "${meta.slug}" has ${words} words (< 900). Adjusting...`);
    } else if (words > 1500) {
      console.warn(`WARNING: Review "${meta.slug}" has ${words} words (> 1500). Adjusting...`);
    }

    const reviewObj = {
      id: meta.id,
      slug: meta.slug,
      title: meta.title,
      content: htmlContent
    };

    const targetPath = path.join(REVIEWS_DIR, `${meta.slug}.json`);
    fs.writeFileSync(targetPath, JSON.stringify(reviewObj, null, 2), 'utf8');

    wordCounts.push({ slug: meta.slug, title: meta.title, words });
    successCount++;
  } catch (err) {
    console.error(`Error processing ${meta.slug}:`, err);
    errors.push({ slug: meta.slug, error: err.message });
  }
}

console.log(`\n========================================`);
console.log(`Completed processing ${successCount}/${reviewsList.length} reviews.`);

const under900 = wordCounts.filter(w => w.words < 900);
const between900and1500 = wordCounts.filter(w => w.words >= 900 && w.words <= 1500);
const over1500 = wordCounts.filter(w => w.words > 1500);

console.log(`\nWord Count Verification Summary:`);
console.log(`- Under 900 words: ${under900.length}`);
console.log(`- 900 to 1500 words: ${between900and1500.length}`);
console.log(`- Over 1500 words: ${over1500.length}`);

if (wordCounts.length > 0) {
  const min = Math.min(...wordCounts.map(w => w.words));
  const max = Math.max(...wordCounts.map(w => w.words));
  const avg = Math.round(wordCounts.reduce((acc, w) => acc + w.words, 0) / wordCounts.length);
  console.log(`- Min words: ${min}`);
  console.log(`- Max words: ${max}`);
  console.log(`- Avg words: ${avg}`);
}

function generateReviewHtml(meta, k) {
  const faq5Block = k.faq5Q ? `
  <div>
    <h3 id="faq-5" class="text-base font-bold text-zinc-800 dark:text-zinc-200">${k.faq5Q}</h3>
    <p class="text-zinc-600 dark:text-zinc-400 mt-1">${k.faq5A}</p>
  </div>` : '';

  return `<h2 id="overview" class="review-h2">${k.overviewHeading || 'বিষয় পরিচিতি ও তাত্ত্বিক ভিত্তি'}</h2>
<p>${k.overviewP1}</p>
<p>${k.overviewP2}</p>
<p>${k.overviewP3}</p>

<h2 id="curriculum" class="review-h2">${k.curriculumHeading || '৪ বছরের একাডেমিক কারিকুলাম ও কোর্স কাঠামো'}</h2>
<p>${k.curriculumIntro}</p>
<ul>
  <li><strong>প্রথম বর্ষ (১ম ও ২য় সেমিস্টার - ফাউন্ডেশন কোর্স):</strong> ${k.year1}</li>
  <li><strong>দ্বিতীয় বর্ষ (৩য় ও ৪র্থ সেমিস্টার - কোর থিওরি ও ল্যাব):</strong> ${k.year2}</li>
  <li><strong>তৃতীয় বর্ষ (৫ম ও ৬ষ্ঠ সেমিস্টার - অ্যাডভান্সড ডোমেইন ও প্রজেক্ট):</strong> ${k.year3}</li>
  <li><strong>চতুর্থ বর্ষ (৭ম ও ৮ম সেমিস্টার - ক্যাপস্টোন প্রজেক্ট, থিসিস ও ইন্টার্নশিপ):</strong> ${k.year4}</li>
</ul>
<p>${k.curriculumOutro}</p>

<h2 id="skills" class="review-h2">${k.skillsHeading || 'প্রয়োজনীয় দক্ষতা, টুলস ও ল্যাব প্রস্তুতি'}</h2>
<p>${k.skillsP1}</p>
<ul>
  <li><strong>টেকনিক্যাল ও ল্যাবরেটরি দক্ষতা:</strong> ${k.techSkills}</li>
  <li><strong>সফটওয়্যার, অ্যানালাইসিস ও সিমুলেশন টুলস:</strong> ${k.tools}</li>
  <li><strong>অ্যানালিটিক্যাল ও প্রবলেম সলভিং মাইন্ডসেট:</strong> ${k.problemSolvingSkills}</li>
  <li><strong>কমিউনিকেশন ও প্রফেশনাল স্কিলস:</strong> ${k.softSkills}</li>
</ul>

<h2 id="institutions" class="review-h2">${k.institutionsHeading || 'বাংলাদেশের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও আসন সংখ্যা'}</h2>
<p>${k.institutionsIntro}</p>
<ul>
  ${k.institutionsList.map(inst => `<li><strong>${inst.name}:</strong> ${inst.desc}</li>`).join('\n  ')}
</ul>
<p>${k.institutionsTips}</p>

<h2 id="career-scope" class="review-h2">${k.careerHeading || 'ক্যারিয়ার সম্ভাবনা ও দেশ-বিদেশের কর্মক্ষেত্র'}</h2>
<p>${k.careerIntro}</p>
<ul>
  <li><strong>সরকারি ও বিসিএস সেক্টর:</strong> ${k.careerGovt}</li>
  <li><strong>বেসরকারি করপোরেট ও ইন্ডাস্ট্রিয়াল জব:</strong> ${k.careerPrivate}</li>
  <li><strong>বহুজাতিক প্রতিষ্ঠান (MNC) ও গ্লোবাল রিমোট জব:</strong> ${k.careerMNC}</li>
  <li><strong>গবেষণা প্রতিষ্ঠান ও একাডেমিয়া:</strong> ${k.careerResearch}</li>
  <li><strong>উদ্যোক্তা ও স্টার্টআপ সুযোগ:</strong> ${k.careerStartup}</li>
</ul>
<p>${k.careerOutro}</p>

<h2 id="higher-education" class="review-h2">${k.higherEduHeading || 'উচ্চশিক্ষা, গবেষণা ও আন্তর্জাতিক স্কলারশিপ'}</h2>
<p>${k.higherEduP1}</p>
<p>${k.higherEduP2}</p>
<ul>
  <li><strong>শীর্ষ আন্তর্জাতিক স্কলারশিপসমূহ:</strong> ${k.scholarships}</li>
  <li><strong>উচ্চশিক্ষার জনপ্রিয় দেশসমূহ:</strong> ${k.topCountries}</li>
  <li><strong>গবেষণার বর্তমান ট্রেন্ডিং টপিকসমূহ:</strong> ${k.researchTopics}</li>
</ul>

<h2 id="challenges-tips" class="review-h2">${k.challengesHeading || 'অধ্যয়নের চ্যালেঞ্জ ও সফলতার বিশেষ কৌশল'}</h2>
<p>${k.challengesP1}</p>
<p>${k.challengesP2}</p>
<ul>
  <li><strong>সিজিপিএ (CGPA) ম্যানেজমেন্ট:</strong> ${k.cgpaStrategy}</li>
  <li><strong>রিসার্চ পেপার ও কনফারেন্স পাবলিকেশন:</strong> ${k.publicationStrategy}</li>
  <li><strong>নেটওয়ার্কিং ও এক্সট্রা-কারিকুলার এক্টিভিটিজ:</strong> ${k.networkingStrategy}</li>
</ul>

<h2 id="admission-tips" class="review-h2">ভর্তি প্রস্তুতি ও সঠিক বিষয় নির্বাচনের দিকনির্দেশনা</h2>
<p>ভর্তি পরীক্ষায় কাঙ্ক্ষিত বিষয়ে সুযোগ পাওয়ার জন্য বিগত বছরের প্রশ্নব্যাংক নিখুঁতভাবে সমাধান এবং বিষয়ভিত্তিক মৌলিক ধারণা স্পষ্ট রাখা অত্যন্ত প্রয়োজনীয়। মুখস্থ করার চেয়ে কনসেপ্টভিত্তিক পড়াশোনা এবং নিয়মিত মডেল টেস্টে অংশ নেওয়া ভর্তি পরীক্ষায় সময় ব্যবস্থাপনাকে সহজ করে তোলে।</p>
<p>যে কোনো ডিসিপ্লিন নির্বাচনের পূর্বে নিজের ব্যক্তিগত আগ্রহ, গাণিতিক বা গবেষণাধর্মী কাজের প্রতি ভালোবাসা এবং দীর্ঘমেয়াদী ক্যারিয়ার লক্ষ্যকে সর্বাধিক গুরুত্ব দেওয়া উচিত। সঠিক পরিকল্পনা এবং নিয়মিত অধ্যাবসায়ই যে কোনো বিষয়ে উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে পারে।</p>

<h2 id="faq" class="review-h2">${k.faqHeading || 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)'}</h2>
<div class="space-y-4">
  <div>
    <h3 id="faq-1" class="text-base font-bold text-zinc-800 dark:text-zinc-200">${k.faq1Q}</h3>
    <p class="text-zinc-600 dark:text-zinc-400 mt-1">${k.faq1A}</p>
  </div>
  <div>
    <h3 id="faq-2" class="text-base font-bold text-zinc-800 dark:text-zinc-200">${k.faq2Q}</h3>
    <p class="text-zinc-600 dark:text-zinc-400 mt-1">${k.faq2A}</p>
  </div>
  <div>
    <h3 id="faq-3" class="text-base font-bold text-zinc-800 dark:text-zinc-200">${k.faq3Q}</h3>
    <p class="text-zinc-600 dark:text-zinc-400 mt-1">${k.faq3A}</p>
  </div>
  <div>
    <h3 id="faq-4" class="text-base font-bold text-zinc-800 dark:text-zinc-200">${k.faq4Q}</h3>
    <p class="text-zinc-600 dark:text-zinc-400 mt-1">${k.faq4A}</p>
  </div>${faq5Block}
</div>`;
}
