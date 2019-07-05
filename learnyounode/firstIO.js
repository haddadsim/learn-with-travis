const fs = require('fs');
const fileContent = fs.readFileSync(process.argv[2]).toString();
const lines = fileContent.split('\n');
const numberOfLines = lines.length -1;

console.log(numberOfLines);