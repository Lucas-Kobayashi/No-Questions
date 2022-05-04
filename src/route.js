// Importando módulos necessarios
const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");

// Iniciando a variavel route
const route = express.Router();

// Enviando a página para o navegador
route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/criar-sala", (req, res) =>
  res.render("index", { page: "create-pass" })
);
route.get("/sala/:room", RoomController.open);

// O uso de ":" significa no express que você está criando uma variável.
// Formato que o formulário de dentro da modal tem que passar a informação.
route.post("/question/:room/:question/:action", QuestionController.index);
route.post("/create-room", RoomController.create);

// Exportando o arquivo route.js
module.exports = route;
