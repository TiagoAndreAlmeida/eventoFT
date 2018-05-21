'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

//rota de participantes
router.get('/participantes', controller.getParticipantes);
router.get('/participantes/:id', controller.getParticipantesId);

//rota de eventos
router.get('/eventos', controller.getEventos);
router.get('/eventos/:id', controller.getEventosId);

//roda de inscricoes
router.get('/inscricoes', controller.getInscrioes);
router.get('/inscricoes/:id', controller.getInscrioesId);

module.exports = router;