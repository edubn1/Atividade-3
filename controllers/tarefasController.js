const express = require('express');
const router = express.Router();
const tarefas = require('../model/tarefas');

router.post('/', async (req, res) => {
    const { nome, data_inicio , data_conclusao, id_usuario} = req.body;
    const dtini =new Date(data_inicio);
    const dtcon =new Date(data_conclusao);
    
    const task = { nome, data_inicio:dtini, data_conclusao:dtcon, id_usuario };
    try {
        await tarefas.create(task);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const task = await tarefas.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const task = await tarefas.find({ _id_usuario: id });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.put("/:id", async (req,res) =>{
    const id = req.params.id;
    const {id_usuario} = req.body;
    try{
        const task = await tarefas.findOne({_id:id});
        task.id_usuario = id_usuario;
        await tarefas.updateOne({_id:id},task);
        res.status(200).json(task);

    }catch (error) {
        res.status(500).json({ erro: error });
    }
})


router.put("/:id", async (req,res) =>{
    const id = req.params.id;
    const {dtcon} = req.body;
    const data_conclusao =new Date(dtcon);
    try{
        const task = await tarefas.findOne({_id:id});
        task.data_conclusao = data_conclusao;
        await tarefas.updateOne({_id:id},task);
        res.status(200).json(task);

    }catch (error) {
        res.status(500).json({ erro: error });
    }
})


router.get('/data', async (req, res) => {
    const {dtinicio,dtfim} = req.body;
    const dataInicio = new Date(dtinicio);
    const dataFim = new Date(dtfim);

    try {
        const task = await tarefas.findOne(_data_conclusao>dataInicio &&  _data_conclusao<dataFim  );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

module.exports = router;