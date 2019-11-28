const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listTurma = async (req, res) => {
  try {
    const data = await AvaClinicas.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createTurma = async (req, res) => {
  try {

    await cria(req).save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});

  } catch (e) {

    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
}
function cria(req){
    const turma = new turma({
            idTurma: req.body.idTurma,
            disciplina: req.body.disciplina,
            horario: req.body.horario
    });
    return turma;
}