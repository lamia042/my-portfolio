import React from "react";
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiGreensock,
  SiReactrouter,
} from "react-icons/si";
import { motion } from "framer-motion";

import portfolioImg from "../assets/port.png";
import smartpickImg from "../assets/ass11.png";
import recipebookImg from "../assets/ass10.png";
import learnnestImg from "../assets/ass9.png";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    img: portfolioImg,
    live: "https://your-portfolio-link.com",
    github: "https://github.com/your-username/portfolio",
    desc: "A personal portfolio website built to showcase my skills, projects, and achievements. It includes a modern responsive design with smooth animations, dedicated sections for about, skills, projects, and contact.",
    skills: [
      { icon: <FaReact />, color: "#61DBFB" }, // React
      { icon: <SiTailwindcss />, color: "#38BDF8" }, // Tailwind
      { icon: <SiGreensock />, color: "#88CE02" }, // GSAP
      { icon: <SiReactrouter />, color: "#CA4245" }, // React Router
    ],
  },
  {
    id: 2,
    title: "SmartPick",
    img: smartpickImg,
    live: "https://smartpick-client.surge.sh/",
    github: "https://github.com/lamia042/smartPick-client",
    desc: "An advanced e-commerce platform that allows users to browse, filter, and purchase products with ease. It includes product categorization, a shopping cart system, secure checkout, and responsive UI.",
    skills: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
      { icon: <FaNodeJs />, color: "#339933" },
      { icon: <SiExpress />, color: "#000000" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    id: 3,
    title: "RecipeBook",
    img: recipebookImg,
    live: "https://my-recipe-app.surge.sh/",
    github: "https://github.com/lamia042/recipeBook-client-side",
    desc: "A full-stack recipe management web application where users can create, view, update, and delete recipes. It includes authentication, personalized dashboards, and Firebase integration.",
    skills: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
      { icon: <FaNodeJs />, color: "#339933" },
      { icon: <SiExpress />, color: "#000000" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    id: 4,
    title: "LearnNest",
    img: learnnestImg,
    live: "https://learnnest.surge.sh/",
    github: "https://github.com/your-username/learnnest",
    desc: "An online learning platform designed for students and professionals to access structured courses. It provides course listing, enrollment, progress tracking, and user authentication.",
    skills: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
      { icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 pt-20 bg-gray-900 text-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex items-center gap-4 text-lg">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-500"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                    title="GitHub Repo"
                  >
                    <FaGithub size={26} className="text-white" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className="flex gap-3 text-2xl">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    className="p-2 rounded-lg bg-gray-700"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
