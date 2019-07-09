const fs = require("fs");
const express = require("express");
const app = express();
const port = Number(process.argv[2]);
// const file = process.argv[3];

app.get("/books", (request, result) => {
	fs.readFile(process.argv[3] , (err, data) => {
        let jsonFile = JSON.parse(data.toString());
        result.json(jsonFile);
	});
	
});

app.listen(port);
