const { Schema, model } = require('mongoose');

const citaSchema = new Schema({
    tipo: String,
    psicologo: String,
    paciente: String,
    date: Date
}, {
    timestamps: true
});

module.exports = model('cita', citaSchema, 'citas');