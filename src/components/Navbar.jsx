import React, { useState, useEffect } from "react";
import { FaGithub, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router"; // ঠিক path হবে react-router-dom

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // শুধু object array
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "GitHub Activity", href: "/githubactivity" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link.label);
    setIsOpen(false);

    // Smooth scroll
    if (link.href.startsWith("#")) {
      const section = document.querySelector(link.href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-full z-50 shadow-md backdrop-blur-md bg-opacity-70 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        {/* Left - Logo + Name */}
        <div
          className={`flex items-center space-x-2 cursor-pointer transition-all duration-300 ${
            activeLink === "Home" ? "glow" : ""
          }`}
          onClick={() => {
            setActiveLink("Home");
            const section = document.querySelector("#home");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-xl md:text-2xl font-bold text-indigo-500 dark:text-indigo-600">
            Lamia Aktar
          </span>
        </div>

        {/* Center - Nav Links */}
        <ul className="hidden md:flex flex-wrap justify-center gap-4 flex-1 mx-8 my-4 text-center">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.href.startsWith("#") ? "" : link.href}
              onClick={() => handleLinkClick(link)}
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap transition-colors duration-300 ${
                  activeLink === link.label || isActive
                    ? "text-indigo-400 font-semibold glow"
                    : "hover:text-indigo-500 dark:hover:text-indigo-600"
                }`
              }
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>

        {/* Right - GitHub + Dark Mode */}
        <div className="hidden md:flex items-center gap-4 transition-all duration-300 ">
          <a
            href="https://github.com/lamia042"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold transition text-white dark:text-gray-900 glow-button"
          >
            <FaGithub /> GitHub
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition text-white dark:text-gray-900"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" size={18} />
            ) : (
              <FaMoon size={18} />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-300 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.href.startsWith("#") ? "" : link.href}
                onClick={() => handleLinkClick(link)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeLink === link.label
                    ? "text-indigo-400 font-semibold glow"
                    : "hover:text-indigo-500 dark:hover:text-indigo-600"
                }`}
              >
                <li>{link.label}</li>
              </NavLink>
            ))}
            <li className="flex flex-col gap-2 mt-2">
              <a
                href="https://github.com/lamia042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold transition w-max text-white dark:text-gray-900 glow-button"
              >
                <FaGithub /> GitHub
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition w-max text-white dark:text-gray-900"
              >
                {darkMode ? <FiSun /> : <FaMoon />} Toggle Mode
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
