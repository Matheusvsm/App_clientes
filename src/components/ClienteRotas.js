import React, { useState } from 'react';

const ClienteRotas = ({ ordemVisitaClientes, handleRotasCliente }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => { toggleModal(); handleRotasCliente(); }}>
        Calcular Rotas
      </button>

      {modalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Melhores Rotas</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <ul>
                  {ordemVisitaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={toggleModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClienteRotas;
