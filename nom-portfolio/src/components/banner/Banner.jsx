import img from "../../../public/assets/img/lampe.jpg";
import "./banner.scss";

// Composant Banner
function Banner() {
  return (
    <div className="banner">
      <img src={img} alt="Lampe" className="banner_img" />
      <div className="banner_content">
        <h2 className="banner_heading">Hello,</h2>
        <p className="banner_title">
          Joline SINCI<br/> Développeur web front end
        </p>
        <a
          className="btn"
          href="/assets/CV_joline_sinci.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulter mon CV
        </a>
      </div>
    </div>
  );
}

export default Banner;
