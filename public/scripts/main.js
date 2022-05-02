import Modal from "./modal.js";

const modal = Modal();

// Pegar todos os botões que existem com a classe "check".
const checkButtons = document.querySelectorAll(".actions a.check");

// Quando o botão "marcar como lida" for clicado vai abrir a modal.
checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    // Receber quando o "marcar como lido" for clicado.
    modal.open();
  });
});

const deleteButtons = document.querySelectorAll(".actions a.delete");
// Quando o botão "excluir" for clicado vai abrir a modal.
deleteButtons.forEach(button => {
  button.addEventListener("click", event => {
    modal.open();
  });
});
