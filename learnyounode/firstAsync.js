let fs = require("fs");
let filePath = process.argv[2];

let numberOfLines;

fs.readFile(filePath,  (err, data) => {
    data = data.toString();
     numberOfLines = data.split('\n').length - 1;
     console.log(numberOfLines);
     
});
