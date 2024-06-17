const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    rut: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);
