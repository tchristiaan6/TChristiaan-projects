// Syntax-checks the inline script and PROJECTS array in index.html. Run: node scripts/check.js
const fs=require('fs');const s=fs.readFileSync('index.html','utf8');const m=s.match(/<script>([\s\S]*?)<\/script>/);new Function(m[1].replace(/render\(\);\s*$/,''));
const P=new Function(s.match(/const PROJECTS = \[[\s\S]*?\n\];/)[0]+';return PROJECTS')();console.log('home script parses;',P.length,'projects');
