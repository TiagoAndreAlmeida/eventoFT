'use strict';

const { Client } = require('pg');

const connectionString = 'postgres://zhetgorzqrgcxa:2d1926959c9d1f8fa066db0fe2619651d51407ccf532bfd449e3a530038000ec@ec2-23-21-129-50.compute-1.amazonaws.com:5432/da6i9aso20garc';

const client = new Client({connectionString});

module.exports = client;