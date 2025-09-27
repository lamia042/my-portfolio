import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"}>
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: darkMode ? "#0f172a" : "#f0f0f0" },
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
              color: { value: darkMode ? ["#38bdf8", "#a855f7", "#f43f5e"] : ["#3b82f6", "#9333ea", "#ef4444"] },
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true },
              size: { value: { min: 2, max: 5 }, random: true },
              links: {
                enable: true,
                distance: 150,
                color: darkMode ? "#64748b" : "#94a3b8",
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
        />
      )}

      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
