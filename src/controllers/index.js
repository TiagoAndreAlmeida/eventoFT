'use strict';

const client = require('../../db/index');

client.connect();

exports.getParticipantes = (req, res, next) => {
    client.query('SELECT * FROM participantes', (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send('error no banco');
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.getParticipantesId = (req, res, next) => {
    client.query('SELECT * FROM participantes WHERE id=$1',[req.params.id], (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send('error no banco');
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    })
};

exports.getEventos = (req, res, next) => {
    client.query('SELECT * FROM eventos', (err, result) => {
        if(err){
            console.log(err.stack);
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.getEventosId = (req, res, next) => {
    client.query('SELECT * FROM eventos WHERE id=$1',[req.params.id], (err, result) => {
        if(err){
            console.log(err.stack);
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.getInscrioes = (req, res, next) => {
    client.query('SELECT * FROM inscricoes', (err, result) => {
        if(err){
            console.log(err.stack);
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};

exports.getInscrioesId = (req, res, next) => {
    client.query('SELECT * FROM inscricoes WHERE id=$1',[req.params.id], (err, result) => {
        if(err){
            console.log(err.stack);
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(
                result.rows
            );
        }
    });
};