/**
 * Arquivo: src/routes Clientes.routes.js
 * Descrição: arquivo responsavel pelas rotas da api relacionado a classe 'Cliente'.
 * Data: 09/03/2024
 * Author: Matheus Moura
 */

const Router = require('express-promise-router');
const router = Router();
const clienteController = require('../controllers/cliente.controller');

// ==> Definindo as rotas do Crud - 'cliente':

// ==> Rota responsável por criar novo 'Cliente': (Post): localhost:3000/api/clientes
router.post('/clientes', clienteController.createCliente);
// ==> Rota responsável por listar os 'Cliente': (Get): localhost:3000/api/clientes
router.get('/clientes',clienteController.getClientes );
// ==> Rota responsável por atualizar 'Cliente': (Put): localhost:3000/api/clientes/:id
router.put('/clientes/:id',clienteController.updateCliente);
// ==> Rota responsável por excluir 'Cliente' pelo 'Id': (DELETE): localhost:3000/api/clientes/:id
router.delete('/clientes/:id', clienteController.deleteCliente);
// Rota responsável por filtrar os 'Clientes' por nome, email ou telefone: (GET): localhost:3000/api/clientes/filtro?termo=xxxxx
router.get('/clientes/filtro', clienteController.filtrarClientes);
// Rota responsável por calcular a rota dos 'Clientes' (GET): localhost:3000/api/clientes/rotas
router.get('/clientes/rotas', clienteController.calcularRotaClientes);
module.exports = router;