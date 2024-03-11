/**
 * Arquivo: src/App.js
 * Data: 09/03/2024
 * Author: Matheus Moura
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormNovoCliente from './components/ClienteForm.js';
import TabelaClientes from './components/ClienteList.js';
import UpdateCliente from './components/ClienteUpdate.js';
import ClienteRotas from './components/ClienteRotas.js';

const App = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [ordemVisitaClientes, setOrdemVisitaClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({ nome: '', email: '', telefone: '', x: '', y: '' });

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const handleFiltrarClientes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/clientes/filtro?termo=${filtro}`);
      setClientes(response.data);
    } catch (error) {
      console.error('Erro ao filtrar clientes:', error);
    }
  };

  const handleClienteEditar = (cliente) => {
    setClienteSelecionado(cliente);
  };

  const handleClienteAtualizar = async (clienteAtualizado) => {
    try {
      await axios.put(`http://localhost:3000/api/clientes/${clienteAtualizado.id}`, clienteAtualizado);
      fetchClientes();
      setClienteSelecionado(null);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    }
  };

  const handleClienteExcluir = async (clienteId) => {
    try {
      await axios.delete(`http://localhost:3000/api/clientes/${clienteId}`);
      fetchClientes();
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };

  const handleNovoClienteChange = (event) => {
    const { name, value } = event.target;
    setNovoCliente({ ...novoCliente, [name]: value });
  };

  const handleNovoClienteSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/api/clientes', novoCliente);
      fetchClientes();
      setNovoCliente({ nome: '', email: '', telefone: '', x: '', y: '' });
    } catch (error) {
      console.error('Erro ao criar novo cliente:', error);
    }
  };
  
  const handleRotasCliente = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/clientes/rotas');
      console.log('Ordem de visitas:', response.data);
      setOrdemVisitaClientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  return (
      <div className="container mt-4">
        <h1>Gerenciamento de Clientes</h1>
        <div className="mb-4 gap-5 d-flex">
            <FormNovoCliente
              novoCliente={novoCliente}
              handleNovoClienteChange={handleNovoClienteChange}
              handleNovoClienteSubmit={handleNovoClienteSubmit}
            />
            <ClienteRotas
              ordemVisitaClientes={ordemVisitaClientes}
              handleRotasCliente={handleRotasCliente}
            />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={filtro} onChange={handleFiltroChange} placeholder="Filtrar clientes" />
          <button className="btn btn-primary" type="button" onClick={handleFiltrarClientes}>Filtrar</button>
        </div>
        <TabelaClientes
          clientes={clientes}
          handleClienteEditar={handleClienteEditar}
          handleClienteExcluir={handleClienteExcluir}
        />
        {clienteSelecionado && (
          <UpdateCliente
            clienteSelecionado={clienteSelecionado}
            setClienteSelecionado={setClienteSelecionado}
            handleClienteAtualizar={handleClienteAtualizar}
          />
        )}
      </div>
  );
};

export default App;
