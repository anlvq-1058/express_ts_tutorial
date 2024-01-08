require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

module.exports = { pool };
