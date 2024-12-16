import React, { useState } from "react";
import "./card.scss"

function Card ({ projet}){

    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

    // Calculer la position de la souris et ajuster la transformation
    const handleMouseMove = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const centerX = card.width / 2;
        const centerY = card.height / 2;
        const x = e.clientX - card.left - centerX;
        const y = e.clientY - card.top - centerY;

        const rotateX = (y / centerY) * 10; // Inclinaison sur l'axe X
        const rotateY = (x / centerX) * -10; // Inclinaison sur l'axe Y

        setTransform({ rotateX, rotateY });
    };

     // Réinitialiser la transformation lorsque la souris quitte la carte
     const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            className="card"
            style={{
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img src={projet.cover} alt={projet.title} />
            <div className="card_content">
                <h3>{projet.title}</h3>
                <div className="card_content-category">
                    {projet.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card