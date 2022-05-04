// Módulo de controle para fazer o post de que botão foi clicado na sala.
module.exports = {
  index(req, res) {
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(
      `room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`
    );
  }
};
