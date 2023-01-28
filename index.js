const express = require('express');
const app = express();

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


app.listen(3000, () => console.log("Server up and running!"));