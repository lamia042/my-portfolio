import React, { useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCopy,
  FaPaperPlane,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const infoRefs = useRef([]);
  const formRef = useRef();

  // Copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  // Send Email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent!");
          form.current.reset();
        },
        (error) => alert("❌ Failed: " + error.text)
      );
  };

  // Scroll-triggered animation
  useEffect(() => {
    // Animate info cards
    infoRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reset", // scroll up-down re-trigger
          },
        }
      );
    });

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 pt-20 text-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Let’s Connect
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Left Side */}
        <div>
          {/* Intro */}
          <div className="flex flex-col gap-2 mb-12 bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-row gap-4">
              <FaHandshake className="text-indigo-400 text-4xl" />
              <p className="text-indigo-500 font-bold text-2xl">
                Let's connect
              </p>
            </div>
            <p className="text-md text-gray-300 text-center md:text-left max-w-lg">
              I'm interested in freelance projects, internships, and
              collaborations that help me grow my skills. If you have a project
              idea, need a helping hand, or just want to talk about technology,
              feel free to reach out!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-6">
            {/* Email */}
            <div
              ref={(el) => (infoRefs.current[0] = el)}
              className="flex items-center justify-between bg-gray-800 p-5 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 w-full"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-400 p-5 rounded-sm flex-shrink-0">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-indigo-500 font-bold md
                  
                  :text-lg">
                    Email
                  </span>
                  <span className="text-gray-300 break-all">
                    lamiaaktar1216@gmail.com
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("lamiaaktar1216@gmail.com")}
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 ml-4 flex-shrink-0"
              >
                <FaCopy className="text-xl" />
              </button>
            </div>

            {/* Phone */}
            <div
              ref={(el) => (infoRefs.current[1] = el)}
              className="flex items-center justify-between bg-gray-800 p-5 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 w-full"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-400 p-5 rounded-sm flex-shrink-0">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-indigo-500 font-bold md:text-lg">
                    Phone Number
                  </span>
                  <span className="text-gray-300 break-all">
                    +8801996002586
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("+8801996002586")}
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 ml-4 flex-shrink-0"
              >
                <FaCopy className="text-xl" />
              </button>
            </div>

            {/* Location */}
            <div
              ref={(el) => (infoRefs.current[2] = el)}
              className="flex items-center gap-3 bg-gray-800 p-5 rounded-lg shadow-md hover:scale-[1.02] transition"
            >
              <div className="bg-red-400 p-6 rounded-sm">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-indigo-500 font-bold">Location</span>
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="max-w-3xl mx-auto w-full bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-indigo-600">
            Send Me a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="grid gap-6">
            <div className="md:flex gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="from_name">Your Name*</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter Your Full Name"
                  required
                  className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-400"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="from_email">Your Email*</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="your.email@example.com"
                  required
                  className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                required
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Your Message*</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition hover:scale-[1.03]"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
