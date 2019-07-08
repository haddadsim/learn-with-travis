const bl = require("bl");
 const http = require("http");

let count = 0;
let results = [];

process.argv.forEach((url, index) => {
  if (index >= 2) {
    http.get(url, res => {
      res.pipe(
        bl((err, data) => {
          if (err) {
            console.error(err);
          }

          results[index] = data.toString();
          count++;

          if (count == 3) {
            results.forEach(function(result) {
              console.log(result);
            });
          }
        })
      );
    });
  }
});
