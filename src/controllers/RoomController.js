// Módulo para controle de criação da sala.
module.exports = {
  create(req, res) {
    let roomId = 123456;

    res.redirect(`/sala/${roomId}`);
  }
};
