const fs = require('fs');


const data = fs.readFileSync('readme.md', 'utf-8');


// const arrayWords = data.split(' ');

// const contador = arrayWords.filter(word => word.toLowerCase().includes('react'));

// console.log(contador.length)

const reactWordCount = data.match(/react/gi ?? []);

console.log(reactWordCount.length);




