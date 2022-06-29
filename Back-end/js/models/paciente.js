const { Schema, model } = require('mongoose');

const pacienteSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    rut: String,
    edad: Number
}, {
    timestamps: true
});

module.exports = model('paciente', pacienteSchema, 'pacientes');