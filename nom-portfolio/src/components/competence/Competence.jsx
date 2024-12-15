import Icon from "../icon/Icon"
import "./competence.scss"

function Competence() {

    // Liste des logos avec le nom de chaque fichier d'image (sans extension)
    const listIconNames1 = ['html5', 'css3', 'javascript', 'react'];
    const listIconNames2 = ['redux', 'sass', 'notion', 'github'];


    return (
        <div className='competences'>
            <h2>Compétences</h2>
            <div className='competences-logos'>
                <div className="logos">
                    {listIconNames1.map((listIconNames1, index) => {
                        const imagePath = `/assets/icones/${listIconNames1}.png`;
                        return (
                            <Icon key={index} src={imagePath} alt={listIconNames1} />
                        )
                    })}
                </div>
                <div className="logos">
                    {listIconNames2.map((listIconNames2, index) => {
                        const imagePath = `/assets/icones/${listIconNames2}.png`;
                        return (
                            <Icon key={index} src={imagePath} alt={listIconNames2} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Competence