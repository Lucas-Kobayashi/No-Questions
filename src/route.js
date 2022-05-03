// Importando módulos necessarios
const express = require("express");
const QuestionController = require("./controllers/QuestionController");

// Iniciando a variavel route
const route = express.Router();

// Enviando a página para o navegador
route.get("/", (req, res) => res.render("index"));
route.get("/sala", (req, res) => res.render("room"));
route.get("/criar-sala", (req, res) => res.render("create-pass"));

// O uso de ":" significa no express que você está criando uma variável.
// Formato que o formulário de dentro da modal tem que passar a informação.
route.post("/sala/:room/:question/:action", QuestionController.index);

// Exportando o arquivo route.js
module.exports = route;
