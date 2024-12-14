import img from "../../assets/img/lampe.jpg"
import "./banner.scss"

// Composant Banner
function Banner() {
  return (
    <div className="banner">
      <img src={img} alt="Lampe" className="banner_img" />
      <div className="banner_content">
        <h2 className="banner_heading">Développeur web Front-end</h2>
        <h1 className="banner_title">Joline SINCI</h1>
        <p className="banner_subtitle">
            Spécialisé dans le développement front-end, je mets en œuvre des solutions techniques innovantes pour créer des expériences digitales engageantes et modernes.
        </p>
        <button className="btn">Contactez-moi</button>
      </div>
    </div>
  );
};

export default Banner;