const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORTY ?? 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});

app.post("/", urlencodedParser, function (req, res) {
    console.log(req.body);

});


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});
