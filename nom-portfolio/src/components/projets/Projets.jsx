import React, { useState } from "react";
import Card from "../card/Card";
import Projets from "../../datas/projets.json";
import Filter from "../filter/Filter";
import "./projets.scss";

function Projet() {
    // Etat pour la technologie sélectionnée
    const [selectedTech, setSelectedTech] = useState("Tous");

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
                    <Card projet={projet} key={projet.id} />
                ))}
            </div>
        </div>
    );
}

export default Projet;
