import React, { useRef, useState } from 'react';
import { Panel } from 'rsuite';
import '../../styles/Card.css';
import Modal from 'react-modal';
import Rating from '../Rating';
import { FaCheck } from 'react-icons/fa';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: '999',
        overflowY: 'auto',

      },
    content: {  
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxHeight: '90%'
    },
  };

// trasformei o compomente que estava em classe em componete funcional por uma questão de estilo mesmo. :)

function Card({ card: { content, data_jul, data_pub, nome }, entity }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    const ementa = content.find(c => c.title === "Ementa")

    const handleClipboard = () => {
        navigator.clipboard.writeText(ementa.content)
        setCopySuccess(true)
    }

    return (
        <Panel className="turivius-card" shaded bordered>
            <h2>Tribunal: {entity.name}</h2>
            <h4>{nome}</h4>
            <br />
            <div className="content-rating">
                <div className="card-date">
                    <p className="date">{data_pub}</p>
                    <p className="date data_jul">{data_jul}</p>
                </div>
                <Rating/>
            </div>
        
            {content.map(c => {
                return ( 
                    <div className="ementa-desisao" key={c.title}>
                        <b>{c.title}</b>
                        <p>{c.content}</p>
                    </div>
                )}
            )}

            <div className="btns">
                <button
                    className="btn"
                    onClick={handleClipboard}
                >Copiar Ementa
                {copySuccess && <FaCheck />}
                </button>

                <button 
                    className="btn" 
                    onClick={openModal}>Expandir
                </button>

                {/* Optei por utilizar um modal, pois acredito que para a experiencia do usuario seria melhor do que entrar em uma nova guia por que como é apenas um card com as mesmas informações, acredito que não seria necessario abrir uma nova pagina. Assim, o usuario poderia navegar em um card sem precisar ir para uma nova guia. */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Tribunal: {entity.name}</h2>
                    <h3>{nome}</h3>
                    <br/>
                    <div className="content-rating">
                        <div className="card-date">
                            <p className="date">{data_pub}</p>
                            <p className="date data_jul">{data_jul}</p>
                        </div>
                        <Rating/>
                    </div>
                    {content.map(c => {
                        return ( 
                            <div className="ementa-desisao" key={c.title}>
                                <b>{c.title}</b>
                                <p>{c.content}</p>
                            </div>
                        )}
                    )}
                    <div className="btns">
                        <button
                            className="btn"
                            onClick={closeModal}
                        >
                            Fechar
                        </button>
                    </div>
                    
                </Modal>
            </div>
        </Panel>
    )
}

export default Card;