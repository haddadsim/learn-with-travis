const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = Number(process.argv[2]);

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/form", (request, result) => {
	result.send(
		request.body.str
			.split("")
			.reverse()
			.join("")
	);
});

app.listen(port);