/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 09/03/2024
 * Author: Matheus Moura
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res)=>{
    res.status(200).send({
        sucess: 'true',
        message: 'Conexão estabelecida, api pronta para uso!',
        version:'1.0.0',
    });
});

module.exports = router;