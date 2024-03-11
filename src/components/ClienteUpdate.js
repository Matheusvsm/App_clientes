import React, { useState } from 'react';

const UpdateCliente = ({ clienteSelecionado, setClienteSelecionado, handleClienteAtualizar }) => {
  const [modalOpen, setModalOpen] = useState(clienteSelecionado !== null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      {modalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Cliente</h5>
                <button type="button" className="btn-close" onClick={() => { toggleModal(); setClienteSelecionado(null); }}></button>
              </div>
              <div className="modal-body">
                <input className="form-control mb-3" type="text" value={clienteSelecionado.nome} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, nome: e.target.value })} />
                <input className="form-control mb-3" type="text" value={clienteSelecionado.email} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, email: e.target.value })} />
                <input className="form-control mb-3" type="text" value={clienteSelecionado.telefone} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, telefone: e.target.value })} />
                <input className="form-control mb-3" type="text" value={clienteSelecionado.x} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, x: e.target.value })} />
                <input className="form-control mb-3" type="text" value={clienteSelecionado.y} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, y: e.target.value })} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => { toggleModal(); setClienteSelecionado(null); }}>
                  Fechar
                </button>
                <button type="button" className="btn btn-success" onClick={() => { handleClienteAtualizar(clienteSelecionado); toggleModal(); }}>
                  Atualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCliente;
