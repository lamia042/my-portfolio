
import Hero from "../components/Hero";
import MyIntro from "../components/MyIntro";
import MyJourney from "../components/MyJourney";
import Skills from "../components/Skills";
import GitHubStats from "../components/GitHubInfo";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MyIntro />
        <MyJourney />
        <Skills />
        <Projects />
        <GitHubStats username="lamia042" />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
