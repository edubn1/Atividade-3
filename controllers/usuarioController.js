const express = require('express');
const router = express.Router();
const usuario = require('../model/usuario');

router.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const user = { nome, email };
    try {
        await usuario.create(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await usuario.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

module.exports = router;