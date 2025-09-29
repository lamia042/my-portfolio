import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold mb-3">Lamia Aktar</h3>
          <p className="text-gray-300 mb-5 max-w-lg text-sm md:text-base leading-relaxed">
            MERN Stack Developer passionate about creating modern web
            applications and sharing knowledge through content creation and
            tutorials.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mstlamiaaktar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/lamia042"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-800 shadow-md hover:shadow-lg transition duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=z8coyfa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md hover:shadow-lg transition duration-300"
            >
              <FaInstagram />
            </a>
            {/* Email */}
            <a
              href="mailto:lamiaaktar1216@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-800 shadow-md hover:shadow-lg transition duration-300"
            >
              <MdEmail className="text-lg" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/16nn3Zbk72/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg transition duration-300"
            >
              <FaFacebookF className="text-lg" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            © {currentYear} All Rights Reserved. Made with{" "}
            <span className="text-red-500">❤</span> by{" "}
            <span className="text-indigo-400 font-medium">Lamia Aktar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
