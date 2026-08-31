const fs = require('fs');
const path = require('path');

// Helper to count words
function countWords(html) {
  const plainText = (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  return plainText.length > 0 ? plainText.split(/\s+/).length : 0;
}

console.log('Word count helper ready.');
