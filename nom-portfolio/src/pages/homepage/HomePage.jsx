import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Competence from "../../components/competence/Competence";
import Projet from "../../components/projets/Projets";
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
      </div>
    </main>
  )
}

export default HomePage