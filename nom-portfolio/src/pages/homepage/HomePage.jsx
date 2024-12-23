import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Competence from "../../components/competence/Competence";
import Projet from "../../components/projets/Projets";
import Services from "../../components/sevices/Services";
import Footer from "../../components/footer/Footer"
import "./homepage.scss"


function HomePage() {
  return (
    <main className="main">
      <section className="banner-section">
        <Banner />
      </section>
      <div className="content">
        <section className="presentation-section">
          <About />
        </section>
        <section className="competence-section">
          <Competence/>
        </section>
        <section className="projet-section">
          <Projet/>
        </section>
        <section className="contact-section">
          <Services/>
        </section>
        <Footer/>
      </div>
    </main>
  )
}

export default HomePage