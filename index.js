const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// View engine 
app.set('view engine', 'ejs');

// Files Static
app.set(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
  res.render("index");
});



// Servidor
app.listen(8080, () => {
  console.log("O servidor está rodando!");
});