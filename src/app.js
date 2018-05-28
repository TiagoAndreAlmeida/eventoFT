// ./app.js
'user strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

//rotas
const index = require('./routes/index');

const router = express.Router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use('/', index);
app.use(cors());

module.exports = app;