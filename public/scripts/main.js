import Modal from "./modal.js";

const modal = Modal();

// Seleção de tags para a mudança no modal de "marcar como lido".
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// Pegar todos os botões que existem com a classe "check".
const checkButtons = document.querySelectorAll(".actions a.check");

// Quando o botão "marcar como lida" for clicado vai abrir a modal.
checkButtons.forEach(button => {
  // Receber quando o "marcar como lido" for clicado.
  button.addEventListener("click", handleCLick);
});

const deleteButtons = document.querySelectorAll(".actions a.delete");
// Quando o botão "excluir" for clicado vai abrir a modal.
deleteButtons.forEach(button => {
  button.addEventListener("click", event => handleCLick(event, false));
});

// A função "event" além de trazer o elemento desejado tras consigo todos os atributos do elemento selecionado, como classe, id...
// Realiza verificação se o foi clicado em algum botão relacionado a modal.
function handleCLick(event, check = true) {
  event.preventDefault();
  const text = check ? "Marcar como lida" : "Excluir";
  const slug = check ? "check" : "delete";

  // Busca os ID's de cada sala.
  const roomId = document.querySelector("#room-id").dataset.id;

  // Busca o ID de cada pergunta.
  const questionId = event.target.dataset.id;

  // Envia os dados de ID da sala e pergunta, também capta qual botão foi clicado na pergunta.
  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/sala/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta? `;
  modalButton.innerHTML = `Sim, ${text}`;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");
  //Abir modal
  modal.open();
}
