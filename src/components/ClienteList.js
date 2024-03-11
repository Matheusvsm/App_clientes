
import React from 'react';

const TabelaClientes = ({ clientes, handleClienteEditar, handleClienteExcluir }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>X</th>
          <th>Y</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => (
          <tr key={cliente.id}>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.x}</td>
            <td>{cliente.y}</td>
            <td>
              <button className="btn btn-info" onClick={() => handleClienteEditar(cliente)}>Editar</button>
              <button className="btn btn-danger" onClick={() => handleClienteExcluir(cliente.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaClientes;
