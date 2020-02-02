const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.port | 3000;

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales");

hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Edgar"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.listen(port, () => {
  console.log("Escuchando en el puerto 3000");
});
