const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(process.cwd(), 'data', 'subject-reviews.json');
const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');

const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf8'));

const headingMap = [
  { id: 'overview', text: 'বিষয় পরিচিতি' },
  { id: 'curriculum', text: 'একাডেমিক পরিবেশ ও পাঠদান পদ্ধতি' },
  { id: 'academic-environment', text: 'একাডেমিক পরিবেশ ও ল্যাবরেটরি সুবিধা' },
  { id: 'higher-study', text: 'উচ্চশিক্ষা ও আন্তর্জাতিক গবেষণার সুযোগ' },
  { id: 'career-scope', text: 'কর্মক্ষেত্রের পরিধি ও ক্যারিয়ার সম্ভাবনা' },
  { id: 'advantages', text: 'বিষয়টির ইতিবাচক দিকসমূহ' },
  { id: 'challenges', text: 'বিষয়টির চ্যালেঞ্জ ও সীমাবদ্ধতা' },
  { id: 'guidelines', text: 'ভর্তিচ্ছুদের জন্য দিকনির্দেশনা' },
];

const advancedVocab = [
    { from: /এই সাবজেক্টে/g, to: 'এই বিষয়ে' },
    { from: /সাবজেক্টটির/g, to: 'বিষয়টির' },
    { from: /সাবজেক্টটা/g, to: 'বিষয়টি' },
    { from: /সাবজেক্ট/g, to: 'বিষয়' },
    { from: /চান্স পাওয়ার/g, to: 'ভর্তির সুযোগ পাওয়ার' },
    { from: /চান্স পেলে/g, to: 'ভর্তির সুযোগ পেলে' },
    { from: /চান্স পাওয়া/g, to: 'ভর্তির সুযোগ পাওয়া' },
    { from: /চান্স/g, to: 'ভর্তির সুযোগ' },
    { from: /টিচারদের/g, to: 'শিক্ষকমণ্ডলীর' },
    { from: /টিচাররা/g, to: 'শিক্ষকমণ্ডলী' },
    { from: /টিচার/g, to: 'শিক্ষক' },
    { from: /স্যারদের/g, to: 'শিক্ষকবৃন্দের' },
    { from: /স্যারেরা/g, to: 'শিক্ষকবৃন্দ' },
    { from: /স্টুডেন্টদের/g, to: 'শিক্ষার্থীদের' },
    { from: /স্টুডেন্টরা/g, to: 'শিক্ষার্থীরা' },
    { from: /স্টুডেন্ট/g, to: 'শিক্ষার্থী' },
    { from: /সিনিয়রদের/g, to: 'অগ্রজদের' },
    { from: /সিনিয়ররা/g, to: 'অগ্রজ শিক্ষার্থীরা' },
    { from: /জুনিয়ররা/g, to: 'অনুজ শিক্ষার্থীরা' },
    { from: /ভাইয়ারা/g, to: 'অগ্রজরা' },
    { from: /আপুরা/g, to: 'অগ্রজরা' },
    { from: /পড়তে চাইলে/g, to: 'অধ্যয়ন করতে চাইলে' },
    { from: /পড়ার সুযোগ/g, to: 'অধ্যয়নের সুযোগ' },
    { from: /পড়তে হবে/g, to: 'অধ্যয়ন করতে হবে' },
    { from: /পড়তে পারো/g, to: 'অধ্যয়ন করতে পারো' },
    { from: /পড়া যায়/g, to: 'অধ্যয়ন করা যায়' },
    { from: /পড়ালেখা/g, to: 'প্রাতিষ্ঠানিক শিক্ষা' },
    { from: /পড়াশোনার/g, to: 'অধ্যয়নের' },
    { from: /পড়াশোনা/g, to: 'অধ্যয়ন' },
    { from: /চাকরি-বাকরি/g, to: 'কর্মসংস্থান' },
    { from: /চাকরির বাজার/g, to: 'কর্মক্ষেত্রের পরিধি' },
    { from: /চাকুরীর বাজার/g, to: 'কর্মক্ষেত্রের পরিধি' },
    { from: /চাকরির সুযোগ/g, to: 'কর্মসংস্থানের সুযোগ' },
    { from: /চাকরি/g, to: 'কর্মসংস্থান' },
    { from: /জব সেক্টর/g, to: 'কর্মক্ষেত্র' },
    { from: /জব/g, to: 'কর্মসংস্থান' },
    { from: /স্যালারি/g, to: 'বেতন কাঠামো' },
    { from: /ডিমান্ড/g, to: 'চাহিদা' },
    { from: /ভ্যালু/g, to: 'মূল্যায়ন ও গুরুত্ব' },
    { from: /রিসার্চের/g, to: 'গবেষণার' },
    { from: /রিসার্চ/g, to: 'গবেষণা' },
    { from: /ল্যাব ফ্যাসিলিটি/g, to: 'ল্যাবরেটরি সুবিধা' },
    { from: /ফ্যাসিলিটি/g, to: 'সুবিধা' },
    { from: /ল্যাব/g, to: 'ল্যাবরেটরি' },
    { from: /বিদেশে যাওয়ার সুযোগ/g, to: 'উচ্চশিক্ষার্থে বিদেশে গমনের সুযোগ' },
    { from: /বিদেশে যাওয়ার/g, to: 'উচ্চশিক্ষার্থে বিদেশ গমনের' },
    { from: /বিদেশে যাওয়া/g, to: 'বিদেশ গমন' },
    { from: /অনেক প্যারা/g, to: 'অধিক মানসিক চাপ' },
    { from: /প্যারা/g, to: 'অতিরিক্ত চাপ' },
    { from: /চিল/g, to: 'স্বাচ্ছন্দ্যপূর্ণ' },
    { from: /কোপ/g, to: 'অভাবনীয় সাফল্য' },
    { from: /লাইফ সেট/g, to: 'ক্যারিয়ার সুনিশ্চিত' },
    { from: /মুখস্থবিদ্যা/g, to: 'মুখস্থনির্ভরতা' },
    { from: /মুখস্থ/g, to: 'মুখস্থনির্ভর' },
    { from: /মোটামুটি/g, to: 'সন্তোষজনক' },
    { from: /অনেক ভালো/g, to: 'অত্যন্ত সম্ভাবনাময়' },
    { from: /খুব ভালো/g, to: 'অত্যন্ত মানসম্মত' },
    { from: /খারাপ না/g, to: 'যথেষ্ট ইতিবাচক' },
    { from: /একদম/g, to: 'সম্পূর্ণরূপে' },
    { from: /দরকার/g, to: 'প্রয়োজন' },
    { from: /ট্রাই করলে/g, to: 'প্রচেষ্টা চালালে' },
    { from: /ট্রাই করা/g, to: 'প্রচেষ্টা চালানো' },
    { from: /ট্রাই/g, to: 'প্রচেষ্টা' },
    { from: /প্যাশন/g, to: 'গভীর আগ্রহ' },
    { from: /সবদিক চিন্তাভাবনা করে/g, to: 'সার্বিক দিক বিবেচনা করে' },
    { from: /চিন্তাভাবনা/g, to: 'বিবেচনা' },
    { from: /ফিউচার/g, to: 'ভবিষ্যৎ' },
    { from: /লাইফ/g, to: 'জীবন' },
    { from: /টানাটানি/g, to: 'সীমাবদ্ধতা' },
    { from: /কষ্ট করে/g, to: 'পরিশ্রম করে' },
    { from: /কষ্ট করতে/g, to: 'পরিশ্রম করতে' },
    { from: /কষ্ট/g, to: 'পরিশ্রম' },
    { from: /ইচ্ছে থাকলে/g, to: 'আগ্রহ থাকলে' },
    { from: /ইচ্ছে/g, to: 'আগ্রহ' },
    { from: /বুঝতে হবে/g, to: 'অনুধাবন করতে হবে' },
    { from: /বুঝতে পারা/g, to: 'অনুধাবন করা' },
    { from: /ধৈর্য্য/g, to: 'ধৈর্য' },
    { from: /বেস্ট/g, to: 'সর্বোত্তম' },
    { from: /স্কোপ/g, to: 'সুযোগ' },
    { from: /গ্যারান্টি/g, to: 'নিশ্চয়তা' },
    { from: /শিওর/g, to: 'নিশ্চিত' },
    { from: /অ্যালুমনাই/g, to: 'প্রাক্তন শিক্ষার্থী (Alumni)' }
];

function processContent(rawHtml) {
  let content = rawHtml;

  // Cleanup from clean-headings
  content = content.replace(/<span class="w-2 h-6[^"]*"[^>]*><\/span>/gi, '');
  content = content.replace(/<span class="word_break"[^>]*><\/span>/gi, '');
  content = content.replace(/<span class="_47e3[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/<span aria-hidden="true"[^>]*>[\s\S]*?<\/span>/gi, '');
  
  content = content.replace(/<h2[^>]*>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<\/h2>/gi, '<h2>$1</h2>');
  content = content.replace(/<h2[^>]*>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<\/h2>/gi, '<h2>$1</h2>');
  
  content = content.replace(/\s*style="[^"]*word-wrap:[^"]*"/gi, '');
  content = content.replace(/\s*style="[^"]*text-align:\s*(left|justify|start)[^"]*"/gi, '');
  
  content = content.replace(/<p[^>]*>\s*লিখেছেন\s*:[^<]*<\/p>/gi, '');
  content = content.replace(/<div[^>]*>\s*লিখেছেন\s*:[^<]*<\/div>/gi, '');
  content = content.replace(/লিখেছেন\s*:[^\n<]{1,60}(?:<br\s*\/?>|\n)?(?:\d{4}-\d{2}\s*সেশন)?[^<]*/gi, '');
  
  content = content.replace(/(?:<br\s*\/?>\s*){3,}/gi, '<br/><br/>');

  // Assign clean ID and classes to all H2 tags
  let h2Index = 0;
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (match, inner) => {
    h2Index++;
    const cleanText = inner.replace(/<[^>]+>/g, '').trim();
    let id = `section-${h2Index}`;
    
    if (/পরিচিতি|একাডেমিক/i.test(cleanText)) id = 'overview';
    else if (/কোর্স|কারিকুলাম|পাঠদান|পদ্ধতি|সিলেবাস/i.test(cleanText)) id = 'curriculum';
    else if (/ল্যাব|পরিবেশ|সেশনজট/i.test(cleanText)) id = 'academic-environment';
    else if (/স্কলারশিপ|উচ্চশিক্ষা|গবেষণা/i.test(cleanText)) id = 'higher-study';
    else if (/ক্যারিয়ার|কর্মক্ষেত্র|চাকরি|বাজার|সম্ভাবনা/i.test(cleanText)) id = 'career-scope';
    else if (/সুবিধা|ইতিবাচক/i.test(cleanText)) id = 'advantages';
    else if (/চ্যালেঞ্জ|সীমাবদ্ধতা/i.test(cleanText)) id = 'challenges';
    else if (/দিকনির্দেশনা|পরামর্শ|সারসংক্ষেপ|উপসংহার/i.test(cleanText)) id = 'guidelines';
    
    return `<h2 id="${id}" class="review-h2">${cleanText}</h2>`;
  });

  // Apply Advanced Vocab (ignoring html tags)
  const parts = content.split(/(<[^>]+>)/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      let text = parts[i];
      for (const vocab of advancedVocab) {
        text = text.replace(vocab.from, vocab.to);
      }
      parts[i] = text;
    }
  }
  content = parts.join('');

  // Apply Standardized Headings
  content = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, text) => {
    const idMatch = attrs.match(/id=["']([^"']+)["']/);
    if (idMatch) {
      const id = idMatch[1];
      const mapped = headingMap.find(h => h.id === id);
      if (mapped) {
        return `<h2${attrs}>${mapped.text}</h2>`;
      }
    }
    return match;
  });

  return content.trim();
}

let count = 0;
for (const item of rawData) {
  const filePath = path.join(REVIEWS_DIR, `${item.slug}.json`);
  const finalContent = processContent(item.content);
  
  // Format the file
  const json = {
    id: item.id,
    slug: item.slug,
    title: item.title,
    content: finalContent
  };
  
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
  count++;
}

console.log(`Rebuilt, cleaned, and institutionalized ${count} reviews successfully!`);
