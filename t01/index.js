const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { appendFileSync } = require("fs");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORTY ?? 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});

app.post("/", urlencodedParser, function (req, res) {
  let counter = 0;
  Object.entries(req.body).forEach(([key, value]) => {
    if (value === "on" && key) {
      counter++;
    }
  });
  let purpose;
  switch (req.body.publicity) {
    case "unknown":
      purpose = 0;
      break;
    case "like-a-ghost":
      purpose = 1;
      break;
    case "i-am-in-comics":
      purpose = 2;
      break;
    case "i-have-fun-club":
      purpose = 3;
      break;
    case "superstar":
      purpose = 4;
      break;
  }

  res.render("success", { data: req.body, counter, purpose });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});
