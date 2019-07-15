const express = require("express");
const app = express();
const port = Number(process.argv[2]);

app.get("/search", (request, result) => {
	const query = request.query;
	result.send(query);
});

app.listen(port);
