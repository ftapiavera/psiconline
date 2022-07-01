const { Schema, model } = require('mongoose');

const horarioSchema = new Schema({
    tipo: String,
    psicologo: String,
    date: Date
}, {
    timestamps: true
});

module.exports = model('horario', horarioSchema, 'horarios');