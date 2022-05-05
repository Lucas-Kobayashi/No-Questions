// Módulo para controle de criação da sala.
const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;

    while (isRoom) {
      // Gera o número da sala
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }
      // Verifica se já existe o número da sala.
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      isRoom = roomsExistIds.some(roomExistid => roomExistid === roomId);
      if (!isRoom) {
        // Insere o número da sala no banco de dados.
        await db.run(`INSERT INTO rooms (
          id,
          pass
          ) VALUES(
            ${parseInt(roomId)},
            ${pass}
          )`);
      }
    }
    await db.close();

    res.redirect(`/sala/${roomId}`);
  },

  async open(req, res) {
    const db = await Database();
    const roomId = req.params.room;

    const questions = await db.all(
      `SELECT * FROM questions WHERE room  = ${roomId} and read = 0`
    );
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room  = ${roomId} and read = 1`
    );

    res.render("room", {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead
    });
  }
};
