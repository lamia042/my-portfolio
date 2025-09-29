import React, { useRef, useEffect } from "react";
import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaPython, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter, SiNodedotjs, SiExpress, SiMongodb, SiNodemon, SiC,  SiCplusplus } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { FaBolt } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRefs = useRef({
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  });

  const addToRefs = (el, section) => {
    if (el && !sectionRefs.current[section].includes(el)) {
      sectionRefs.current[section].push(el);
    }
  };

  const frontendSkills = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiReactrouter className="text-cyan-400" />, name: "React Router" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  // { icon: <SiC className="text-gray-400" />, name: "C" },
  // { icon: <SiCplusplus className="text-blue-500" />, name: "C++" },
  { icon: <FaPython className="text-yellow-400" />, name: "Python" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },


// In frontendSkills:
{ icon: <FaBolt className="text-green-400" />, name: "GSAP" }

];

  const backendSkills = [
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiNodemon className="text-green-500" />, name: "Nodemon" },
  ];

  const databaseSkills = [{ icon: <SiMongodb className="text-green-500" />, name: "MongoDB" }];

  const toolsSkills = [
    { icon: <FaGit className="text-red-500" />, name: "Git" },
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  ];

  useEffect(() => {
    const animateSection = (refsArray) => {
      gsap.fromTo(
        refsArray,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refsArray[0],
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    animateSection(sectionRefs.current.frontend);
    animateSection(sectionRefs.current.backend);
    animateSection(sectionRefs.current.database);
    animateSection(sectionRefs.current.tools);
  }, []);

  const renderSkills = (skills, section) => (
  <div ref={(el) => addToRefs(el, section)} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-15 gap-y-4 mt-4 justify-center md:justify-start">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex items-center gap-x-2 text-gray-100 hover:scale-110 transition-transform cursor-default"
      >
        <div className="text-3xl md:text-4xl">{skill.icon}</div>
        <p className="text-sm md:text-base">{skill.name}</p>
      </div>
    ))}
  </div>
);


  return (
    <section className="py-20 px-6 md:px-20 text-gray-300">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-500 mb-12">My Skills</h2>

      {/* Frontend */}
      <div className="mb-15 md:flex gap-20">
        <h3 className="text-2xl font-semibold text-gray-200">Frontend</h3>
        {renderSkills(frontendSkills, "frontend")}
      </div>

      {/* Backend */}
      <div className="mb-15 md:flex gap-22">
        <h3 className="text-2xl font-semibold text-gray-200">Backend</h3>
        {renderSkills(backendSkills, "backend")}
      </div>

      {/* Database */}
      <div className="mb-15 md:flex gap-20">
        <h3 className="text-2xl font-semibold text-gray-200">Database</h3>
        {renderSkills(databaseSkills, "database")}
      </div>

      {/* Tools */}
      <div className="mb-15 md:flex gap-34">
        <h3 className="text-2xl font-semibold text-gray-200">Tools</h3>
        {renderSkills(toolsSkills, "tools")}
      </div>
    </section>
  );
};

export default Skills;
