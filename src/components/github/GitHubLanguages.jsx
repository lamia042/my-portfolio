import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHubLanguages = ({ langs }) => {
  const langsRef = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const targets = langsRef.current.filter(Boolean);
    if (!targets.length) return;

    gsap.fromTo(
      targets,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          toggleActions: "play none none reset", // reset = scroll এ আবার animation হবে
        },
      }
    );
  }, [langs]);

  if (!langs || langs.length === 0)
    return <p className="text-gray-400 text-center">No language data available.</p>;

  return (
    <div ref={wrapperRef} className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-200 text-center">
        Most Used Languages
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {langs.map((lang, i) => (
          <div
            key={i}
            ref={(el) => (langsRef.current[i] = el)}
            className="border border-gray-700 text-center px-4 py-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            <p className="text-lg font-bold">{lang}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubLanguages;
