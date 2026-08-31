const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');
const META_FILE = path.join(process.cwd(), 'scripts', 'reviews_meta.json');

const rawReviews = JSON.parse(fs.readFileSync(META_FILE, 'utf8'));

console.log(`Loaded ${rawReviews.length} reviews for upgrade.`);

function countWords(html) {
  const plainText = (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  return plainText.length > 0 ? plainText.split(/\s+/).length : 0;
}

// Clean any author/writer info or leftover scrape metadata
function cleanScrapedArtifacts(text) {
  if (!text) return '';
  return text
    .replace(/<div class="post-views[\s\S]*?<\/div>/gi, '')
    .replace(/<p>\s*\(?Facebook[\s\S]*?<\/p>/gi, '')
    .replace(/<p>\s*Write Review here[\s\S]*?<\/p>/gi, '')
    .replace(/লেখক\s*[:ঃ][\s\S]*?(?:<\/p>|<br>|\n)/gi, '')
    .replace(/লিখেছেন\s*[:ঃ][\s\S]*?(?:<\/p>|<br>|\n)/gi, '')
    .replace(/Credit\s*[:ঃ][\s\S]*?(?:<\/p>|<br>|\n)/gi, '');
}

module.exports = { REVIEWS_DIR, rawReviews, countWords, cleanScrapedArtifacts };
