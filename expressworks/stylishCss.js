const express = require("express");
const app = express();
const port = Number(process.argv[2]);
const stylus = require("stylus");

app.use(
    require(
        "stylus").
        middleware(
            process.argv[3]));

app.use(
    express.static(
        process.argv[3]));

app.listen(port);