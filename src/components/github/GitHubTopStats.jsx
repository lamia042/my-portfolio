import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHubTopStats = ({ repos = 0, stars = 0, followers = 0, commits = 0 }) => {
  const statsRef = useRef([]);
  const numberRefs = useRef([]);

  useEffect(() => {
    const targets = statsRef.current.filter(Boolean);

    if (!targets.length) return;

    // ScrollTrigger animation for cards
    gsap.fromTo(
      targets,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: targets[0].parentNode, // পুরো grid কে trigger করা হচ্ছে
          start: "top 80%",
          toggleActions: "play none none reset", 
        },
      }
    );

    // Number count-up animation on scroll
    numberRefs.current.forEach((el) => {
      if (!el) return;
      const finalValue = parseInt(el.dataset.value, 10) || 0;

      let obj = { val: 0 };
      gsap.to(obj, {
        val: finalValue,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reset", // reset = আবার scroll এ গেলে আবার চলবে
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val);
        },
      });
    });
  }, [repos, stars, followers, commits]);

  const stats = [
    { label: "Repositories", value: repos ?? 0 },
    { label: "Total Stars", value: stars ?? 0 },
    { label: "Followers", value: followers ?? 0 },
    { label: "Recent Commits", value: commits ?? 0 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
      {stats.map((s, i) => (
        <div
          key={i}
          ref={(el) => (statsRef.current[i] = el)}
          className="bg-gray-900 border p-6 rounded-lg shadow-md transform transition hover:scale-110 hover:shadow-xl"
        >
          <p className="text-indigo-500 font-semibold text-xl mb-2">{s.label}</p>
          <p
            ref={(el) => (numberRefs.current[i] = el)}
            data-value={s.value}
            className="text-3xl text-white font-bold"
          >
            0
          </p>
        </div>
      ))}
    </div>
  );
};

export default GitHubTopStats;
