const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (usado para filtros e paginação)
 * Route Params: Parâmetros usados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Acesso ao banco de dados SQL
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


app.listen(3333);