const { Schema, model } = require('mongoose');

const administradorSchema = new Schema({
    usuario: String,
    password: String,
}, {
    timestamps: true
});

module.exports = model('administrador', administradorSchema, 'administradores');