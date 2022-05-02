// Função para controle da modal (abrir e fechar).
export default function Modal() {
  const modalWrapper = document.querySelector(".modal-wrapper");

  // Funcionalidade para fechar a modal quando cliclar em "cancelar".
  const cancelButton = document.querySelector(".button.cancel");
  cancelButton.addEventListener("click", close);

  function open() {
    // Funcionalidade de adicionar a classe "active" na modal.
    modalWrapper.classList.add("active");
  }
  function close() {
    // Funcionalidade de remover a classe "active" na modal.
    modalWrapper.classList.remove("active");
  }

  return {
    open,
    close
  };
}
