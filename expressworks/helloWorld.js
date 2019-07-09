const express = require("express");
const app = express();
const port = Number(process.argv[2]);

app.get("/home", (request, result) => {
  result.end("Hello World!");
});

app.listen(port);
