import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const titleRef = useRef(null);
  const webDevRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Entrance animations for title and button
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      titleRef.current,
      { y: "-5vh", opacity: 0 },
      { y: "0vh", opacity: 1, duration: 1 }
    ).fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Typing effect for "Web Developer" only
    const typeTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    typeTl.to(webDevRef.current, {
      duration: 4.5,
      text: "Full-Stack Developer",
      ease: "none",
    });
    typeTl.to(webDevRef.current, {
      duration: 1.8,
      text: "",
      ease: "none",
      delay: 1, // pause for 1 second before clearing
    });
  }, []);

  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 text-center">

      {/* Text Content */}
      <div className="max-w-xl">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-gray-300">
          Hi, I’m <span className="text-indigo-500 text-6xl md:text-8xl">Lamia</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 leading-relaxed">
          A passionate{" "}
          <span ref={webDevRef} className="text-indigo-400 font-semibold"></span>{" "}
          crafting modern, responsive & interactive experiences 🚀
        </p>
        <a
          ref={buttonRef}
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-800 text-gray-200 transition-transform transform hover:scale-110 shadow-lg"
        >
          View My Work
        </a>
      </div>

    </section>
  );
}
