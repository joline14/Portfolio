import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Competence from "../../components/competence/Competence";
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
      </div>
    </main>
  )
}

export default HomePage