/**
 * Arquivo: src/controllers clientes.controller.js
 * Descrição: arquivo responsavel pelas rotas da api relacionado a classe 'clientes'.
 * Data: 09/03/2024
 * Author: Matheus Moura
 */

const db = require("../config/database");

// Método responsável por criar um novo cliente
exports.createCliente = async (req, res) => {
  try {
    const { nome, email, telefone, x, y } = req.body;

    const { rows } = await db.query(
      "INSERT INTO clientes (nome, email, telefone, x, y) VALUES ($1, $2 , $3, $4, $5)",
      [nome, email, telefone, x, y]
    );

    res.status(201).send({
      message: "Cliente adicionado com sucesso!",
      body: {
        cliente: { nome },
      },
    });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    res.status(500).send({
      message: "Erro interno do servidor ao criar cliente.",
    });
  }
};

// Método responsável por listar todos os clientes
exports.getClientes = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM clientes ORDER BY nome ASC");
    res.status(200).send(response.rows);
  } catch (error) {
    console.error("Erro ao obter clientes:", error);
    res.status(500).send({
      message: "Erro interno do servidor ao obter clientes.",
    });
  }
};
// Método responsável por atualizar um cliente
exports.updateCliente = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { nome, email, telefone, x, y } = req.body;
    
    const response = await db.query(
      "UPDATE clientes SET nome = $1, email = $2, telefone = $3, x = $4 , y = $5 WHERE id = $6",
      [nome, email, telefone, x, y, userId]
    );

    if (response.rowCount === 0) {
      return res.status(404).send({ message: "Cliente não encontrado" });
    }

    res.status(200).send({ message: "Cliente atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar Cliente:", error);
    res.status(500).send({ message: "Erro interno do servidor ao atualizar Cliente." });
  }
};

// Método responsável por apagar um Cliente
exports.deleteCliente = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const response = await db.query('DELETE FROM clientes WHERE id = $1', [userId]);

    if (response.rowCount === 0) {
      return res.status(404).send({ message: "Cliente não encontrado" });
    }

    res.status(200).send({ message: "Cliente deletado com sucesso!", userId });
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    res.status(500).send({ message: "Erro interno do servidor ao deletar cliente." });
  }
};

// Método responsável por filtrar os Clientes
exports.filtrarClientes = async (req, res) => {
  try {
    const termo = req.query.termo;
    const response = await db.query(`
      SELECT * FROM clientes
      WHERE nome ILIKE '%${termo}%'
      OR email ILIKE '%${termo}%'
      OR telefone ILIKE '%${termo}%'
    `);
    res.status(200).send(response.rows);
  } catch (error) {
    console.error('Erro ao filtrar clientes:', error);
    res.status(500).send({ message: 'Erro interno do servidor ao filtrar clientes.' });
  }
};


// Função para calcular a rota dos clientes
exports.calcularRotaClientes = async (req, res) => {
  try {
  
    const response = await db.query("SELECT * FROM clientes");
    const clientes = response.rows;

    if (clientes.length === 0) {
      return res.status(404).json({ message: 'Nenhum cliente encontrado' });
    }

    const ordemVisita = calcularRota(clientes);

    res.status(200).json(ordemVisita);
  } catch (error) {
    console.error('Erro ao calcular rota:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao obter clientes' });
  }
};


// Função para calcular a distância entre dois pontos no plano cartesiano
const calcularDistancia = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

// Função para calcular a rota 
const calcularRota = (clientes) => {
  // Ordena os clientes com base na distância em relação ao eixo inicial (0,0)
  const ordemVisita = clientes.sort((a, b) => {
    const distanciaA = calcularDistancia(0, 0, a.x, a.y);
    const distanciaB = calcularDistancia(0, 0, b.x, b.y);
    return distanciaA - distanciaB;
  });

  return ordemVisita;
};


