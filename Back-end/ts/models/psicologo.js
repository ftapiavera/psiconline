const { Schema, model } = require('mongoose');

const psicologoSchema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('psicologo', psicologoSchema, 'psicologos');