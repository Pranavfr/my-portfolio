import React, { useState, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import { Github, Star, GitBranch, Eye, Calendar, TrendingUp, Code, Users } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  repo: string;
}

const GitHubActivity = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    totalCommits: 0
  });

  // Fetch live data from GitHub API
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const username = 'Pranavfr';
        
        // Fetch User Data for total repositories
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user');
        const userData = await userRes.json();
        
        // Fetch Repositories
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const allRepos = await reposRes.json();
        
        if (Array.isArray(allRepos)) {
          // Calculate stats
          const totalStars = allRepos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
          const totalForks = allRepos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
          
          setStats({
            totalRepos: userData.public_repos || allRepos.length,
            totalStars,
            totalForks,
            totalCommits: 0 // Will update after fetching events
          });

          // Filter out forks for the recent display and grab top 5
          const activeRepos = allRepos.filter((repo: any) => !repo.fork);
          setRepos(activeRepos.slice(0, 5));

          // Fetch Recent Events for Commits
          let pushEvents: any[] = [];
          try {
            const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=30`);
            if (eventsRes.ok) {
              const events = await eventsRes.json();
              if (Array.isArray(events)) {
                pushEvents = events.filter((e: any) => e.type === 'PushEvent');
              }
            }
          } catch (e) {
            console.warn("Failed to fetch events for commits:", e);
          }
          
          const recentCommits: GitHubCommit[] = [];
          pushEvents.forEach((event: any) => {
            if (event.payload && Array.isArray(event.payload.commits)) {
              event.payload.commits.forEach((commit: any) => {
                recentCommits.push({
                  sha: commit.sha,
                  message: commit.message,
                  date: event.created_at,
                  repo: event.repo.name.split('/')[1] || event.repo.name
                });
              });
            }
          });
          
          // Show top 5 recent commits
          setCommits(recentCommits.slice(0, 5));
          
          // Update total commits stat block (using recent activity count as GitHub doesn't expose global commit count easily)
          setStats(prev => ({
            ...prev,
            totalCommits: recentCommits.length > 0 ? recentCommits.length : prev.totalCommits
          }));
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'text-yellow-400',
      'TypeScript': 'text-blue-400',
      'Python': 'text-green-400',
      'React': 'text-cyan-400',
      'HTML': 'text-orange-400',
      'CSS': 'text-purple-400'
    };
    return colors[language] || 'text-gray-400';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading GitHub activity...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            My latest contributions, repositories, and coding activity
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
        >
          {[
            { icon: Code, label: 'Total Repos', value: stats.totalRepos, color: 'cyan' },
            { icon: Star, label: 'Total Stars', value: stats.totalStars, color: 'yellow' },
            { icon: GitBranch, label: 'Total Forks', value: stats.totalForks, color: 'green' },
            { icon: Calendar, label: 'Recent Commits', value: stats.totalCommits, color: 'purple' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-${stat.color}-400`} />
                <div className={`text-lg sm:text-2xl font-bold text-${stat.color}-400 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Recent Repositories */}
          <motion.div variants={containerVariants}>
            <motion.h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" variants={itemVariants}>
              <Github size={20} className="sm:w-6 sm:h-6 text-cyan-400" />
              Recent Repositories
            </motion.h3>
            
            <div className="space-y-3 sm:space-y-4">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h4 className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h4>
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                      <span className="flex items-center gap-1 text-gray-400">
                        <Star size={12} className="sm:w-4 sm:h-4" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <GitBranch size={12} className="sm:w-4 sm:h-4" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className={`text-xs sm:text-sm ${getLanguageColor(repo.language)}`}>
                        {repo.language}
                      </span>
                      <span className="text-xs text-gray-500">
                        Updated {formatDate(repo.updated_at)}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Recent Commits */}
          <motion.div variants={containerVariants}>
            <motion.h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" variants={itemVariants}>
              <TrendingUp size={20} className="sm:w-6 sm:h-6 text-green-400" />
              Recent Commits
            </motion.h3>
            
            <div className="space-y-3 sm:space-y-4">
              {commits.length > 0 ? (
                commits.map((commit, index) => (
                  <motion.div
                    key={commit.sha}
                    className="p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm font-mono text-cyan-400">
                        {commit.sha.substring(0, 7)}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {formatDate(commit.date)}
                      </span>
                    </div>
                    
                    <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm">
                      {commit.message}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Code size={10} className="sm:w-3 sm:h-3" />
                      {commit.repo}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 text-center flex flex-col items-center justify-center min-h-[200px]">
                  <Github className="w-10 h-10 text-gray-600 mb-3" />
                  <p className="text-gray-400 text-sm">No recent public commits found.</p>
                  <a href="https://github.com/Pranavfr" target="_blank" rel="noopener noreferrer" className="mt-3 text-cyan-400 text-sm hover:underline hover:text-cyan-300 transition-colors">
                    View profile on GitHub →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubActivity; 