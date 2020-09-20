const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/menu', function (req, res) {
    res.render('menu');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

let port = process.env.PORT;
if(port == null || port == "") {
    port = 3000;
}

app.listen(port, function (req, res) {
    console.log("Serving running.");
});