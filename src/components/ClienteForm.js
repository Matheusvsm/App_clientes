import React, { useState } from 'react';

const FormNovoCliente = ({ novoCliente, handleNovoClienteChange, handleNovoClienteSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button type="button" className="btn btn-success" onClick={toggleModal}>
        Novo Cliente
      </button>

      {modalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo Cliente</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body ">
                <input className="form-control mb-3" type="text" name="nome" value={novoCliente.nome} onChange={handleNovoClienteChange} placeholder="Nome" />
                <input className="form-control mb-3" type="email" name="email" value={novoCliente.email} onChange={handleNovoClienteChange} placeholder="Email" />
                <input className="form-control mb-3" type="text" name="telefone" value={novoCliente.telefone} onChange={handleNovoClienteChange} placeholder="Telefone" />
                <input className="form-control mb-3" type="text" name="x" value={novoCliente.x} onChange={handleNovoClienteChange} placeholder="Coordenada x" />
                <input className="form-control mb-3" type="text" name="y" value={novoCliente.y} onChange={handleNovoClienteChange} placeholder="Coordenada y" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={toggleModal}>
                  Fechar
                </button>
                <button type="button" className="btn btn-success" onClick={handleNovoClienteSubmit}>
                  Criar Novo Cliente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormNovoCliente;
