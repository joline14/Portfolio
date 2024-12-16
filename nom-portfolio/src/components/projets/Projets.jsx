import React, { useState,useEffect } from "react";
import Card from "../card/Card";
import Projets from "../../datas/projets.json";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
import "./projets.scss";

function Projet() {
    // Etat pour la technologie sélectionnée
    const [selectedTech, setSelectedTech] = useState("Tous");

    // Variables et Fonction pour la Modale
    const [modal, setModal] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState(null); // Etat pour le projet sélectionné

    const toggleModal = (projet) => {
        setModal(!modal); // Ouvre ou ferme la modale
        setSelectedProjet(projet || null);// Met à jour le projet sélectionné
    }

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal'); // Ajoute la classe quand modal est true
        } else {
            document.body.classList.remove('active-modal'); // Retire la classe quand modal est false
        }
    }, [modal]);

    return (
        <div className="projets">
            <h2>Projets</h2>
            {/* Passer la fonction setSelectedTech au composant Filter */}
            <Filter onFilterChange={setSelectedTech} selectedCategory={selectedTech} />
            <div className="projets_cards">
                {Projets.filter((projet) => {
                    // Si "Tous" est sélectionné, afficher tous les projets
                    if (selectedTech === "Tous") return true;

                    // Sinon, vérifier si le projet contient la technologie sélectionnée
                    return projet.technologies.includes(selectedTech);
                }).map((projet) => (
                    <Card projet={projet} key={projet.id} toggleModal={() => toggleModal(projet)} />
                ))}
            </div>
            {/* Affichage conditionnel de la modale */}
            {modal && <Modal projet={selectedProjet} toggleModal={toggleModal} isOpen={modal}/>}
        </div>
    );
}

export default Projet;
