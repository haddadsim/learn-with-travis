const fs = require("fs");
const filePath = process.argv[2];

const numberOfLines;

fs.readFile(filePath,  (err, data) => {
    data = data.toString();
     numberOfLines = data.split('\n').length - 1;
     console.log(numberOfLines);
     
});
