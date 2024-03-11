/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsavel pelas 'connectionStrings da Aplicação PostgreSql
 * Data: 09/03/2024
 * Author: MAtheus Moura
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com o DB:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
    console.log('Conexão estabelecida com sucesso!');
});
module.exports = {
    query: (text, params) => pool.query(text, params),
};