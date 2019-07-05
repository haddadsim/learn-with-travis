let fs = require("fs");
let path = require("path");
let fileDirectory = process.argv[2];
let extensionName = "." + process.argv[3];

fs.readdir(fileDirectory, (err, list) => {
  list.forEach(file => {
    
    let ext = path.extname(file);
    if (ext === extensionName) {
      console.log(file);
    }
  });
});

