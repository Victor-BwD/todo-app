const express = require('express');
const app = express();

const dotenv = require("dotenv");
dotenv.config();



app.use("/static", express.static("public"));

//View engine configuration
app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
});

app.use(express.urlencoded({ extended: true }));

app.post('/',(req, res) => {
    console.log(req.body);
});

const mongoose = require("mongoose");
//connection to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});