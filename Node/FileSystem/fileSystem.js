let fs = require('fs')

let readFile = fs.readFileSync('readMe.txt','utf-8');
console.log(readFile);
console.log('synchronous read')