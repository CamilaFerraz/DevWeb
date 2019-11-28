const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Turma = new Schema({
    idTurma: {
        type: Number,
        required: true,
        trim: true
    },
    disciplina: {
        type: String,
        required: true
    },
    horario: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Turma', Turma);