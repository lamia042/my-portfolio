import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLink, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const GitHubCommits = ({ username, commits }) => {
  const commitsRef = useRef([]);

  useEffect(() => {
    const targets = commitsRef.current.filter(Boolean);
    if (!targets.length) return;

    targets.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: true, // 👉 scroll er sathe sathe animation
          },
        }
      );
    });
  }, [commits]);

  if (!commits || commits.length === 0)
    return (
      <p className="text-gray-400 text-center">No recent commits available.</p>
    );

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-200 text-center">
        Recent Commits
      </h3>

      <div className="border rounded-lg p-8">
        {/* Profile Header */}
        <div className="flex gap-2 mb-8">
          <FaGithub className="text-white text-2xl" />
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-indigo-400 hover:underline flex items-center gap-2"
          >
            {username}
            <FaLink className="text-indigo-400" />
          </a>
        </div>

        {/* Commits Section */}
        <div className="grid grid-cols-1 gap-6">
          {commits.map((c, i) => (
            <div
              key={i}
              ref={(el) => (commitsRef.current[i] = el)}
              className="bg-gray-800 p-5 border rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition"
            >
              {/* Repo Link */}
              <div className="flex items-center gap-2 mb-3">
                <a
                  href={`https://github.com/${username}/${c.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
                >
                  <FaLink /> {c.repo}
                </a>
              </div>

              {/* Commit Message */}
              <p className="text-gray-300">
                {c.commit ? c.commit.commit.message : "No commits found"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubCommits;
