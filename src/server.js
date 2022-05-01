// Importando módulos usados
const express = require("express");
const route = require("./route");
const path = require("path");

// Iniciando o express
const server = express();

// Tornando o projeto visível para o navegador
server.set("view engine", "ejs");

// Redirecionando o local padrão do views
server.set("views", path.join(__dirname, "views"));

server.use(route);

// Iniciando o servidor na porta 3000
server.listen(3000, () => console.log("Server tá on"));
