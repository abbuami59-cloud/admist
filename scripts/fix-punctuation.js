const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'data', 'reviews');

const files = fs.readdirSync(reviewsDir);
for (const file of files) {
  if (!file.endsWith('.json')) continue;
  const filePath = path.join(reviewsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  let content = data.content;
  // Fix "ড<br/>নুরুল" or "প্রফেসর<br/>" where dot was turned to br
  content = content.replace(/ড<br\s*\/?>\s*/g, 'ড. ');
  content = content.replace(/মোহাম্মদ<br\s*\/?>\s*/g, 'মোহাম্মদ ');
  content = content.replace(/মো<br\s*\/?>\s*/g, 'মো. ');
  content = content.replace(/প্রফেসর<br\s*\/?>\s*/g, 'প্রফেসর. ');
  content = content.replace(/৩<br\s*\/?>\s*৫/g, '৩.৫');
  content = content.replace(/৩<br\s*\/?>\s*৭/g, '৩.৭');
  content = content.replace(/৩<br\s*\/?>\s*৮/g, '৩.৮');
  content = content.replace(/৩<br\s*\/?>\s*৯/g, '৩.৯');
  content = content.replace(/৪<br\s*\/?>\s*০/g, '৪.০');

  // Clean empty tags
  content = content.replace(/<(div|p|span)[^>]*>\s*(?:&nbsp;|\s)*\s*<\/\1>/gi, '');
  content = content.replace(/<(div|p|span)[^>]*>\s*(?:&nbsp;|\s)*\s*<\/\1>/gi, '');

  data.content = content.trim();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('Cleaned typography and punctuation in all files.');
