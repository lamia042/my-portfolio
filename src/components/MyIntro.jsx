import React, { useEffect, useRef } from "react";
import myImg from "../assets/myImg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDownload } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const MyIntro = () => {
  const imgRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  useEffect(() => {
    // Floating animation (continuous)
    gsap.to(imgRef.current, {
      y: -35,
      rotation: 5,
      scale: 1.05,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Scroll-triggered stagger animation for text
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRefs.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image pop-in when scrolled into view
    gsap.fromTo(
      imgRef.current,
      { x: -100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-20">
      {/* Profile Image */}
      <img
        ref={imgRef}
        src={myImg}
        alt="Profile"
        className="w-50 h-50 md:w-56 md:h-56 rounded-sm shadow-lg border-2 border-indigo-400 object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left space-y-4">
        <p
          ref={addToRefs}
          className="text-2xl md:text-4xl font-semibold text-gray-300"
        >
          I’m <span className="text-indigo-400 font-semibold">Lamia Aktar</span>
          , a <span className="font-semibold">Full Stack Developer</span>{" "}
          passionate about building creative and scalable web applications.
        </p>

        <p ref={addToRefs} className="text-gray-400 leading-relaxed">
          I specialize in{" "}
          <span className="animate-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-100 bg-clip-text text-transparent font-bold duration: 2">
            JavaScript
          </span>
          ,{" "}
          <span className="animate-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-100 bg-clip-text text-transparent font-bold duration: 2">
            React
          </span>
          ,{" "}
          <span className="animate-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-100 bg-clip-text text-transparent font-bold duration: 2">
            Node.js
          </span>{" "}
          and{" "}
          <span className="animate-text bg-gradient-to-r from-green-500 via-teal-400 to-lime-400 bg-clip-text text-transparent font-bold duration: 2">
            MongoDB
          </span>{" "}
          and love transforming ideas into functional digital experiences with
          smooth animations and performance in mind.
        </p>

        <p ref={addToRefs} className="text-gray-400 leading-relaxed">
          Outside of coding, I enjoy exploring new technologies, learning
          creative design, and experimenting with innovative projects 🚀.
        </p>

        {/* Social Links */}
        <div
          ref={addToRefs}
          className="flex items-center justify-center md:justify-start gap-5 text-2xl mt-4"
        >
          <a
            href="https://www.linkedin.com/in/mstlamiaaktar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lamia042"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=z8coyfa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:lamiaaktar1216@gmail.com"
            className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-125"
          >
            <MdEmail />
          </a>
        </div>

        {/* Resume Button */}
        <div ref={addToRefs}>
          <a
            href="/resume.pdf"
            download
            className="relative inline-flex items-center gap-2 mt-6 px-6 py-3 
                rounded-lg text-gray-100 
               transition-transform transform hover:scale-110 
               hover:bg-indigo-700 shadow-lg border-2 border-indigo-400 animate-shine"
          >
            <span className="relative z-10 text-lg">Resume</span>
            <MdDownload className="relative z-10 text-3xl rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyIntro;
