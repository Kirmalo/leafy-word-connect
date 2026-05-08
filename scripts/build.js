const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, '..', 'www'), { recursive: true });
fs.copyFileSync(
  path.join(__dirname, '..', 'wordconnect.html'),
  path.join(__dirname, '..', 'www', 'index.html')
);
console.log('Built www/index.html');
