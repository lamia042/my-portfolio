import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: "2025",
    title: "Started Learning Web Development",
    description:
      "Began learning web development with HTML, CSS, JavaScript, and React, building small projects to apply practical skills.",
  },
  {
    year: "July 2023",
    title: "Enhanced Problem-Solving Skills",
    description:
      "Improved algorithmic thinking and coding problem-solving through practice on competitive platforms, building a foundation for web development.",
  },
  {
    title: "Started B.Sc in ICT",
    year: "February 2023 - Present",
    description:
      "Joined Islamic University, Bangladesh and began my journey in Information and Communication Technology (ICT).",
  },

  {
    year: "Kushtia Govt. College, Kushtia",
    title: "Higher Secondary Education",
    description:
      "Completed higher secondary education in 2021 (Science), building analytical skills and exploring basic web technologies like HTML and CSS.",
  },
  {
    year: "Nilmonigong Secondary High School, Chuadanga",
    title: "Secondary School Certificate",
    description:
      "Completed SSC with a focus on Science, building a strong foundation for future studies and interest in technology.",
  },
];

const MyJourney = () => {
  const journeyRefs = useRef([]);
  journeyRefs.current = [];

  const addToRefs = (el) => {
    if (el && !journeyRefs.current.includes(el)) {
      journeyRefs.current.push(el);
    }
  };

  useEffect(() => {
    journeyRefs.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100; // slide from left/right
      gsap.fromTo(
        el,
        { opacity: 0, x: direction, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-gray-300">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-500 mb-12">
        My Journey
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-600"></div>

        {/* Timeline Items */}
        {journeyData.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className={`flex flex-col md:flex-row items-start md:items-center relative mb-12 md:mb-0 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute md:left-1/2 left- transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-gray-900 z-10"></div>

            {/* Content Box */}
            <div
              className={`bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transform transition-transform duration-500 w-full md:w-2/5 ${
                index % 2 === 0 ? "md:ml-10 text-left" : "md:mr-10"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-gray-100">
                {item.title}
              </h3>
              <p className="text-indigo-400 font-semibold">{item.year}</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
