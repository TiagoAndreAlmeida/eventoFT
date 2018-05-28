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
//post 
exports.realizarInscricao = (req, res, next) => {

    console.log(req.body);
    console.log(req.body.idParticipante);
    console.log(req.body.idEvento);

    let idParticipante = req.body.idParticipante;
    let idEvento = req.body.idEvento;

    client.query('INSERT INTO INSCRICOES(participante, evento, data) VALUES($1, $2, CURRENT_TIMESTAMP)',[idParticipante, idEvento], (err, result) => {
        if(err){
            console.log(err.stack);
            res.status(400).send('{"retorno" : "Erro ao realizar inscrição"}');
        }else{
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send('{"retorno" : "Inscrição realizada com sucesso"}');
        }
    });
}