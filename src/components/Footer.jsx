import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <span className="text-2xl font-bold text-indigo-500 cursor-pointer">
            Lamia Aktar
          </span>
          <p className="text-gray-400 text-sm">
            Full-Stack Developer | Problem Solver | Building interactive & responsive web experiences.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/lamia042" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lamia042" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/lamia042" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h3 className="text-indigo-500 font-semibold text-lg">Quick Links</h3>
          <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/about" className="hover:text-white transition-colors">About</NavLink>
          <NavLink to="/skills" className="hover:text-white transition-colors">Skills</NavLink>
          <NavLink to="/projects" className="hover:text-white transition-colors">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h3 className="text-indigo-500 font-semibold text-lg">Contact</h3>
          <span>Email: <a href="mailto:lamiaaktar1216@gmail.com" className="hover:text-white transition-colors">lamiaaktar1216@gmail.com</a></span>
          <span>Phone: <a href="tel:+8801996002586" className="hover:text-white transition-colors">+8801996002586</a></span>
          <span className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} Lamia Aktar. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
