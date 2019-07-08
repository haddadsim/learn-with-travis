    
var bl = require('bl');
var http = require('http');

var count = 0;
var results = [];

process.argv.forEach((url, index) => {
    if (index >= 2) {
        http.get(url, (res) => {
            res.pipe(bl( (err, data) => {
                if (err) {
                    console.error(err);
                }
                
                results[index] = data.toString();
                count++;

                if (count == 3) {
                    results.forEach(function(result){
                        console.log(result);
                    });
                }
            }))
        });
    }
});