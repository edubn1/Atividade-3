const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const usuario = require('./controllers/usuarioController');
const tarefas = require('./controllers/tarefasController');

app.use('/usuario',usuario);
app.use('/tarefas',tarefas);

const db_user = 'edubnastri';
const db_pass = 'Eduardo649';

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.sfgo8u8.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen('3000', () => {
            console.log('MongoDB conectado!!!')
            console.log('Servidor iniciado na porta 3000');
        })
    }).catch((error) => {
        console.log(error);
    });