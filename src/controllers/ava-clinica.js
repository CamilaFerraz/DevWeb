const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listAvaClinicas = async (req, res) => {
  try {
    const data = await AvaClinicas.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createAvaClinica = async (req, res) => {
  try {

    await cria(req).save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});

  } catch (e) {

    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
}
function cria(req){
    const avaClinica = new avaClinica({
        idClinica: req.body.idClinica,
        idAluno: req.body.idAluno,
        critAvaProntuario: req.body.critAvaProntuario,
        critAvaClinica: req.body.critAvaClinica
    });
    return avaClinica;
}