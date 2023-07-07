const mongoose = require('mongoose') // Cria a const para chamar o mongoose

const UsuarioSchema = new mongoose.Schema({ // Instancia ele 
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    senha: {
        type: String, 
        required: true
    },
    eAdmin: { // Para usuarios ter niveis de permissão de acesso ao sistema
        type: Number, 
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const usuarios = mongoose.model('usuarios', UsuarioSchema) // exportar

module.exports = { usuarios };