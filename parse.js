const fs = require('fs');
const html = fs.readFileSync('webo_nav.html', 'utf16le');

// Try to find the company menu
const companyIdx = html.indexOf('Company');
const megaStart = html.lastIndexOf('<ul', companyIdx + 500);
const megaEnd = html.indexOf('</ul>', megaStart + 10);
console.log(html.substring(megaStart, megaEnd + 200));

// find mega menu container
const megaClass = html.indexOf('mega-menu');
console.log(html.substring(megaClass - 50, megaClass + 1500));
