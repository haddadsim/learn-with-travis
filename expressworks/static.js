const express = require("express");
const app = express();
const port = Number(process.argv[2]);
// const filePath = Number(process.argv[3]);

app.use(
    express.static(
        process.argv[3] || path.join(
            __dirname, "public")));

app.listen(port);
