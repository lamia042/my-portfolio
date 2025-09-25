import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0f172a" },
        fpsLimit: 60,
        particles: {
          color: { value: "#38bdf8" },
          links: { enable: true, color: "#38bdf8" },
          move: { enable: true, speed: 2 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 -z-10"
    />
    
  );
}
