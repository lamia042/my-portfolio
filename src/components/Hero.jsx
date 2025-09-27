import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { NavLink } from "react-router"; // router-dom use করতে হবে
import heroImg from "../assets/hero.jpg";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const titleRef = useRef(null);
  const webDevRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Hero entrance animations (on load)
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: "-5vh", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        imgRef.current,
        { y: 100, opacity: 0, rotateY: 90 }, // new animation: 3D flip in
        { y: 0, opacity: 1, rotateY: 0, duration: 2, ease: "power3.out" },
        "-=0.5"
      );

    // Scroll animations (small effects every time visible)
    [titleRef.current, buttonRef.current, imgRef.current].forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // when element enters viewport
            toggleActions: "play none none reset", 
          },
        }
      );
    });

    // Typing effect loop
    const typeText = ["Full-Stack Developer", "Problem Solver"];
    let currentIndex = 0;

    function startTyping() {
      const text = typeText[currentIndex];
      const typeTl = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % typeText.length;
          startTyping();
        },
      });

      // Type letters
      typeTl.to(webDevRef.current, {
        duration: text.length * 0.1,
        text: text,
        ease: "none",
      });

      // Pause
      typeTl.to({}, { duration: 1 });

      // Backspace effect
      typeTl.to(webDevRef.current, {
        duration: text.length * 0.05,
        text: "",
        ease: "none",
      });
    }

    startTyping();
  }, []);
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-gray-300">
          Hi, I’m{" "}
          <span className="text-indigo-500 text-6xl md:text-8xl">Lamia</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 leading-relaxed">
          A passionate{" "}
          <span ref={webDevRef} className="text-indigo-400 font-semibold"></span>{" "}
          crafting modern, responsive & interactive experiences 🚀
        </p>

        {/* NavLink Button */}
        <NavLink
          ref={buttonRef}
          to="/projects"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-800 text-gray-200 transition-transform transform hover:scale-110 shadow-lg"
        >
          View My Work
        </NavLink>
      </div>

      {/* Image */}
      <div
        ref={imgRef}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500"
      >
        <img src={heroImg} alt="Lamia" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
