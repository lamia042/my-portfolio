import React, { useState, useEffect } from "react";

const GitHubStats = ({ username, token }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [mostUsedLang, setMostUsedLang] = useState([]);
  const [recentCommits, setRecentCommits] = useState([]);

  useEffect(() => {
    const headers = token ? { Authorization: `token ${token}` } : {};

    // Fetch user data
    fetch(`https://api.github.com/users/${username}`, { headers })
      .then((res) => res.json())
      .then(setUserData);

    // Fetch repos
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers })
      .then((res) => res.json())
      .then((reposData) => {
        setRepos(reposData);

        // Most used language
        const languages = {};
        reposData.forEach((repo) => {
          if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
        });
        const sortedLang = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .map((lang) => lang[0])
          .slice(0, 5);
        setMostUsedLang(sortedLang);

        // Fetch recent commits (last 5)
        const commitPromises = reposData.slice(0, 5).map((repo) =>
          fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`, { headers })
            .then((res) => res.json())
            .then((commit) => ({ repo: repo.name, commit: commit[0] }))
        );
        Promise.all(commitPromises).then(setRecentCommits);
      });
  }, [username, token]);

  if (!userData) return <p>Loading GitHub data...</p>;

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  return (
    <section className="py-10 px-6 md:px-20 bg-gray-900 text-gray-300">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-500 mb-4 text-center">
        GitHub Activity
      </h2>
      <p className="text-center text-xl mb-8">My latest contributions and coding activity</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-10">
        <div className="bg-gray-800 p-6 border rounded-lg shadow-md">
          <p className="text-indigo-400 font-semibold text-xl">Repositories</p>
          <p className="text-2xl font-bold mt-2">{userData.public_repos}</p>
        </div>
        <div className="bg-gray-800 p-6 border rounded-lg shadow-md">
          <p className="text-indigo-400 font-semibold text-xl">Total Stars</p>
          <p className="text-2xl font-bold mt-2">{totalStars}</p>
        </div>
        <div className="bg-gray-800 border p-6 rounded-lg shadow-md">
          <p className="text-indigo-400 font-semibold text-xl">Followers</p>
          <p className="text-2xl font-bold mt-2">{userData.followers}</p>
        </div>
        <div className="bg-gray-800 p-6 border rounded-lg shadow-md">
          <p className="text-indigo-400 font-semibold text-xl">Recent Commits</p>
          <p className="text-2xl font-bold mt-2">{userData.recentCommits}</p>
        </div>
        
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Most Used Languages</h3>
        <div className="flex flex-wrap gap-4">
          {mostUsedLang.map((lang, i) => (
            <span key={i} className="bg-indigo-600 px-4 py-2 rounded-full">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Recent Commits</h3>
        <ul className="space-y-3">
          {recentCommits.map((item, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="font-semibold">{item.repo}</p>
              <p className="text-gray-300 text-sm">{item.commit?.commit?.message}</p>
              <p className="text-gray-400 text-xs">
                {item.commit?.commit?.author?.date
                  ? new Date(item.commit.commit.author.date).toLocaleString()
                  : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GitHubStats;
