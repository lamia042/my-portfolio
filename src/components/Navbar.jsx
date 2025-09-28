import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router"; // ✅ ঠিক করা হলো

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "GitHub Activity", href: "/githubact" }, // ✅ আলাদা নাম
    { label: "Experience", href: "/experience" },
    // { label: "Certificates", href: "/certificates" },
    // { label: "Education", href: "/education" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link.label);
    setIsOpen(false);
    if (link.href.startsWith("#")) {
      const section = document.querySelector(link.href);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkClasses = (label) =>
    label === activeLink
      ? "text-indigo-400 font-semibold"
      : "text-gray-300 hover:text-indigo-500";

  return (
    <nav className="fixed w-full z-50 shadow-md bg-gray-900 text-white duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleLinkClick({ label: "Home", href: "/" })}
        >
          <span className="text-xl md:text-2xl font-bold text-indigo-400">
            Lamia Aktar
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 flex-1 mx-8 my-4 text-center">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.href}
              onClick={() => handleLinkClick(link)}
              className={getLinkClasses(link.label)}
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>

        {/* GitHub Profile Button (Desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/lamia042"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold text-white"
          >
            <FaGithub /> GitHub
          </a>
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
        <div className="md:hidden backdrop-blur-lg text-white duration-300">
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.href}
                onClick={() => handleLinkClick(link)}
                className={getLinkClasses(link.label)}
              >
                <li>{link.label}</li>
              </NavLink>
            ))}
            {/* GitHub Profile (Mobile) */}
            <li className="flex flex-col gap-2 mt-2">
              <a
                href="https://github.com/lamia042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold w-max text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
