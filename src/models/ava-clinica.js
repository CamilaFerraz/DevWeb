const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvaClinica = new Schema({
    idClinica: {
        type: Number,
        required: true,
        trim: true
    },
    idAluno: {
        type: Number,
        required: true
    },
    critAvaProntuario: {
        type: String,
        required: true
    },
    critAvaClinica: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AvaClinica', AvaClinica);