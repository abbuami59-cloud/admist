const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const BASE_URL = 'https://engineerdiary.com/tag/subject-review/';
const OUTPUT_FILE = path.join(__dirname, '../data/subject-reviews.json');

async function scrape() {
  let allLinks = new Set();
  let page = 1;
  let hasMore = true;

  console.log('Fetching post URLs...');
  while (hasMore) {
    const url = page === 1 ? BASE_URL : `${BASE_URL}page/${page}/`;
    console.log(`Fetching page ${page}: ${url}`);
    try {
      const response = await fetch(url);
      if (response.status === 404) {
        hasMore = false;
        break;
      }
      
      const html = await response.text();
      const $ = cheerio.load(html);
      const links = $('h2.entry-title a').map((i, el) => $(el).attr('href')).get();
      
      if (links.length === 0) {
        hasMore = false;
        break;
      }
      
      links.forEach(link => allLinks.add(link));
      page++;
    } catch (e) {
      console.error('Error fetching page', page, e);
      hasMore = false;
    }
  }

  const linkArray = Array.from(allLinks);
  console.log(`Found ${linkArray.length} posts. Fetching content...`);
  
  const posts = [];
  
  for (let i = 0; i < linkArray.length; i++) {
    const link = linkArray[i];
    console.log(`Fetching post ${i + 1}/${linkArray.length}: ${link}`);
    try {
      const response = await fetch(link);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const title = $('h1.entry-title').text().trim() || $('h2.entry-title').text().trim();
      
      // Select the main content
      const contentNode = $('.post-content');
      
      // Remove images and styling as requested
      contentNode.find('img').remove();
      contentNode.find('script').remove();
      contentNode.find('style').remove();
      contentNode.find('.fusion-meta-info').remove();
      contentNode.find('.fusion-sharing-box').remove();
      contentNode.find('#comments').remove();

      // Convert the content back to html
      const content = contentNode.html();
      
      if (title && content) {
        posts.push({
          id: i + 1,
          slug: link.split('/').filter(Boolean).pop(),
          title,
          content: content.trim(),
          url: link
        });
      }
    } catch (e) {
      console.error(`Error fetching post ${link}:`, e);
    }
    
    // Slight delay to avoid being blocked
    await new Promise(r => setTimeout(r, 200));
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`Successfully saved ${posts.length} posts to ${OUTPUT_FILE}`);
}

scrape();
