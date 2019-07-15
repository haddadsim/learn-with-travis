const fs = require("fs");
const path = require("path");
const fileDirectory = process.argv[2];
const extensionName = "." + process.argv[3];

fs.readdir(fileDirectory, (err, list) => {
  list.forEach(file => {
    let ext = path.extname(file);
    if (ext === extensionName) {
      console.log(file);
    }
  });
});
