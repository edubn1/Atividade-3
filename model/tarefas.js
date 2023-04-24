const mongoose = require('mongoose');

const Tarefa = mongoose.model('Tarefa', {
    nome: String,
    data_inicio: Date,
    data_conclusao: Date,
    id_usuario: String,
});
module.exports = Tarefa;