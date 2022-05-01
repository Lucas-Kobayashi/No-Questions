// Importando módulos usados
const express = require("express");
const route = require("./route");
const path = require("path");

// Iniciando o express
const server = express();

// Tornando o projeto visível para o navegador
server.set("view engine", "ejs");

// Tornando o conteúdo da pasta public visíivel
server.use(express.static("public"));

// Redirecionando o local padrão do views
server.set("views", path.join(__dirname, "views"));

// Tornando o arquivo route utilizavel para o node
server.use(route);

// Iniciando o servidor na porta 3000
server.listen(3000, () => console.log("Server tá on"));
