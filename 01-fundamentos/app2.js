const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf-8');

const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('readme2.md', newData);

console.log(data);