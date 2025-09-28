import React, { useState, useEffect } from "react";
import GitHubTopStats from "./github/GitHubTopStats";
import GitHubLanguages from "./github/GitHubLanguages";
import GitHubCommits from "./github/GitHubCommits";

const GitHubInfo = ({ username, token }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [mostUsedLang, setMostUsedLang] = useState([]);
  const [recentCommits, setRecentCommits] = useState([]);
  const [error, setError] = useState(null);

  const headers = token ? { Authorization: `token ${token}` } : {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ User data
        const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
        const userJson = await userRes.json();
        if (userJson.message) throw new Error(userJson.message);
        setUserData(userJson);

        // 2️⃣ Repos
        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );
        const repoJson = await repoRes.json();
        if (!Array.isArray(repoJson)) throw new Error(repoJson.message || "Failed to fetch repos");
        setRepos(repoJson);

        // 3️⃣ Most used languages
        const languages = {};
        repoJson.forEach((repo) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });
        setMostUsedLang(
          Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .map(([lang]) => lang)
            .slice(0, 5)
        );

        // 4️⃣ Recent commits (last 5 updated repos)
        const sortedRepos = [...repoJson].sort(
          (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
        );

        const commitPromises = sortedRepos.slice(0, 5).map(async (repo) => {
          try {
            const commitRes = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
              { headers }
            );
            if (!commitRes.ok) return { repo: repo.name, commit: null };
            const commitData = await commitRes.json();
            return { repo: repo.name, commit: Array.isArray(commitData) ? commitData[0] : null };
          } catch {
            return { repo: repo.name, commit: null };
          }
        });

        const commits = await Promise.all(commitPromises);
        setRecentCommits(commits);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [username, token]);

  if (error) {
    if (error.includes("API rate limit")) {
      return <p className="text-center text-red-400">⚠️ API rate limit exceeded. Please add a token.</p>;
    }
    return <p className="text-center text-red-400">⚠️ {error}</p>;
  }

  if (!userData) {
    return <p className="text-center text-gray-400">Loading GitHub data...</p>;
  }

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <section className="py-10 px-6 md:px-20 text-gray-300">
      <h2 className="text-3xl my-20 md:text-5xl font-bold text-gray-200 mb-4 text-center">
        GitHub Activity
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 text-gray-400">
        My coding journey at a glance
      </p>

      {/* Top Stats */}
      <GitHubTopStats
        repos={userData?.public_repos || 0}
        stars={totalStars || 0}
        followers={userData?.followers || 0}
        commits={recentCommits.filter((c) => c.commit !== null).length}
      />

      {/* Languages */}
      <GitHubLanguages langs={mostUsedLang} />

      {/* Recent Commits */}
      <GitHubCommits
        username={username}
        commits={recentCommits.filter((c) => c.commit !== null)}
      />
    </section>
  );
};

export default GitHubInfo;
