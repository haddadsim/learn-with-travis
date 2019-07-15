const express = require("express");
const app = express();
const port = Number(process.argv[2]);

app.put("/message/:id", (request, result) => {
	const id = request.params.id;

	let message = require("crypto")
		.createHash("sha1")
		.update(new Date().toDateString() + id)
		.digest("hex");
	result.send(message);
});

app.listen(port);
