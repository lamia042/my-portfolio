import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from "../components/Hero";
import MyIntro from "../components/MyIntro";
import MyJourney from "../components/MyJourney";
import Skills from "../components/Skills";
import GitHubStats from "../components/GitHubInfo";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // এখানে engine checkVersion error হবে না
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "#0f172a" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 120, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            particles: {
              number: { value: 90, density: { enable: true, area: 800 } },
              color: { value: ["#38bdf8", "#a855f7", "#f43f5e"] },
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true },
              size: { value: { min: 2, max: 5 }, random: true },
              links: {
                enable: true,
                distance: 150,
                color: "#64748b",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                random: true,
                straight: false,
                outModes: { default: "out" },
                attract: { enable: true, rotateX: 600, rotateY: 1200 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10">
        <Hero />
        <MyIntro />
        <MyJourney />
        <Skills />
        <GitHubStats username="lamia042" />
      </div>
    </section>
  );
};

export default Home;
