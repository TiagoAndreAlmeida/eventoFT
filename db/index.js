'use strict';

const { Client } = require('pg');

const connectionString = 'postgresql://postgres:root@localhost:5432/eventoFT';

const client = new Client({connectionString});

module.exports = client;