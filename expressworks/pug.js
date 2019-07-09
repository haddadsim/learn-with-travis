const express = require("express");
const app = express();
const port = Number(process.argv[2]);

app.set("views", process.argv[3] || path.join(__dirname, "templates"));
app.set("view engine", "pug");

app.get("/home", (request, result) => {
	result.render("index", {
		date: new Date().toDateString()
	});
});

app.listen(port);