import "./filter.scss";

function Filter({ onFilterChange, selectedCategory }) {
    // Liste des catégories disponibles
    const categories = ["Tous", "HTML", "CSS", "Sass", "JavaScript", "React"];

    return (
        <div className="filter">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`filter_button ${
                        selectedCategory === category ? "active" : ""
                    }`} // Ajouter la classe active si la catégorie est sélectionnée
                    onClick={() => onFilterChange(category)} // Mettre à jour la catégorie sélectionnée
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Filter;
