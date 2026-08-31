const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = './data/reviews';
const files = fs.readdirSync(REVIEWS_DIR).filter(f => f.endsWith('.json'));

const list = [];

files.forEach(file => {
  const filePath = path.join(REVIEWS_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  const slug = data.slug || file.replace('.json', '');

  list.push({
    slug: slug,
    title: data.title
  });
});

// Sort alphabetically by Bengali locale
list.sort((a, b) => a.title.localeCompare(b.title, 'bn', { sensitivity: 'base' }));

// Assign sequential IDs (1 to 160) based on alphabetical order
const indexedList = list.map((item, index) => ({
  id: index + 1,
  slug: item.slug,
  title: item.title
}));

// Also update the id inside individual JSON files if needed
indexedList.forEach(item => {
  const filePath = path.join(REVIEWS_DIR, `${item.slug}.json`);
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    data.id = item.id;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  }
});

const tsContent = 'export interface ReviewMeta {\n  id: number;\n  slug: string;\n  title: string;\n}\n\nexport const reviewsList: ReviewMeta[] = ' + JSON.stringify(indexedList, null, 2) + ';\n';

fs.writeFileSync('./data/reviews-list.ts', tsContent, 'utf-8');

console.log(`Successfully sorted ${indexedList.length} reviews alphabetically and updated data/reviews-list.ts!`);

console.log('\n--- First 15 Reviews in Alphabetical Order ---');
indexedList.slice(0, 15).forEach(item => {
  console.log(`${item.id}. ${item.title}`);
});

console.log('\n--- Last 10 Reviews in Alphabetical Order ---');
indexedList.slice(-10).forEach(item => {
  console.log(`${item.id}. ${item.title}`);
});
