const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Clinica = new Schema({
    idClinica: {
        type: Number,
        required: true,
        trim: true
    },
    data:{
        type: Date,
        required: true
    },
    box: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Clinica', Clinica);