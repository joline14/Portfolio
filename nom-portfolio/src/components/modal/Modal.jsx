import React, { useEffect, useState } from 'react';
import "./modal.scss"

function Modal({ projet, toggleModal, isOpen }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setVisible(true), 10); // Petit délai pour permettre le montage du DOM
        } else {
            const timer = setTimeout(() => setVisible(false), 400); // Délai de 400ms pour la fermeture
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div className={`modal ${visible ? 'is-open' : ''}`}>
            <div className='modal_container' onClick={toggleModal}>
                <img src={projet.cover} alt={projet.title} />
                <div className='modal_content'>
                    <h4>{projet.title}</h4>
                    <div className='modal_content-description'>
                        {projet.description.map((descrip, index) => (
                            <li key={index}>{descrip}</li>))}
                    </div>
                    <div className="modal_content-buttons">
                        {/* Bouton pour le lien GitHub */}
                        <a href={projet.github} target="_blank" rel="noopener noreferrer">
                                Lien Github
                        </a>

                        {/* Bouton conditionnel pour le site, uniquement si "projet.site" existe */}
                        {projet.site && (
                            <a href={projet.site} target="_blank" rel="noopener noreferrer">
                                Consultez le site
                            </a>
                        )}
                    </div>
                </div>
                <i className='fa-solid fa-xmark close-modal' onClick={toggleModal}></i>
            </div>
        </div>
    )
}

export default Modal