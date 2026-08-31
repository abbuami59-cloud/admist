const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'data', 'reviews');

function cleanHtmlContent(rawHtml) {
  let content = rawHtml;

  // 1. Remove all spans with bg/rounded/color inside headings
  content = content.replace(/<span class="w-2 h-6[^"]*"[^>]*><\/span>/gi, '');
  content = content.replace(/<span class="word_break"[^>]*><\/span>/gi, '');
  content = content.replace(/<span class="_47e3[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  content = content.replace(/<span aria-hidden="true"[^>]*>[\s\S]*?<\/span>/gi, '');

  // 2. Flatten any nested <h2 ...><h2 ...>...</h2></h2>
  content = content.replace(/<h2[^>]*>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<\/h2>/gi, '<h2>$1</h2>');
  content = content.replace(/<h2[^>]*>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<\/h2>/gi, '<h2>$1</h2>');

  // 3. Remove inline styles like word-wrap and text-align
  content = content.replace(/\s*style="[^"]*word-wrap:[^"]*"/gi, '');
  content = content.replace(/\s*style="[^"]*text-align:\s*(left|justify|start)[^"]*"/gi, '');

  // 4. Remove writer/credit lines at bottom cleanly
  content = content.replace(/<p[^>]*>\s*লিখেছেন\s*:[^<]*<\/p>/gi, '');
  content = content.replace(/<div[^>]*>\s*লিখেছেন\s*:[^<]*<\/div>/gi, '');
  content = content.replace(/লিখেছেন\s*:[^\n<]{1,60}(?:<br\s*\/?>|\n)?(?:\d{4}-\d{2}\s*সেশন)?[^<]*/gi, '');

  // 5. Clean dots and spacers
  // removed dot replace
  content = content.replace(/(?:<br\s*\/?>\s*){3,}/gi, '<br/><br/>');

  // 6. Assign clean ID and classes to all H2 tags
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

  return content.trim();
}

const files = fs.readdirSync(reviewsDir);
let count = 0;
for (const file of files) {
  if (!file.endsWith('.json')) continue;
  const filePath = path.join(reviewsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.content = cleanHtmlContent(data.content);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  count++;
}

console.log(`Cleaned and structured ${count} files.`);
