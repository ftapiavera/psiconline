const { Schema, model } = require('mongoose');

const psicologoSchema = new Schema({
    email: String,
    password: String,
    nombre: String,
    tratamientos:{},
    tipoConsulta:{},
    universidad: String,
    direccion: String,
    telefono: String,
    rut: String,
    calificacion: Number
}, {
    timestamps: true
});

module.exports = model('psicologo', psicologoSchema, 'psicologos');