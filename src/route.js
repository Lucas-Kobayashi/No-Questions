// Importando módulos necessarios
const express = require("express");

// Iniciando a variavel route
const route = express.Router();

// Enviando a página para o navegador
route.get("/", (req, res) => res.render("index"));

// Exportando o arquivo route.js
module.exports = route;
