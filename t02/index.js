const express = require('express')
const bodyParser = require("body-parser");
const bcrypt = require ('bcrypt');

let urlencodedParser = bodyParser.urlencoded({ extended: true });

const PORT = process.env.PORTY ?? 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});

app.get('/',  (req, res) => {
    res.render('index.ejs')
})

 app.post('/', urlencodedParser, async (req, res) => {
    const salt = await bcrypt.genSalt(Number(req.body.salt))
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPassword);
     

     res.render('saved.ejs' , {hashedPassword})


 })