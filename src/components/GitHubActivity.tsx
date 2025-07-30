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

  // Mock data for demonstration (in real app, you'd fetch from GitHub API)
  useEffect(() => {
    const mockRepos: GitHubRepo[] = [
      {
        id: 1,
        name: 'esports-talks',
        description: 'Comprehensive esports community platform for India\'s premier gaming community',
        html_url: 'https://github.com/Pranavfr/esports-talks',
        stargazers_count: 45,
        forks_count: 12,
        language: 'JavaScript',
        updated_at: '2024-01-15T10:30:00Z',
        topics: ['react', 'community', 'esports', 'gaming']
      },
      {
        id: 2,
        name: 'PersonalityTest',
        description: 'Advanced quiz-based application that analyzes user personalities using MBTI logic',
        html_url: 'https://github.com/Pranavfr/PersonalityTest',
        stargazers_count: 32,
        forks_count: 8,
        language: 'TypeScript',
        updated_at: '2024-01-10T14:20:00Z',
        topics: ['react', 'typescript', 'personality', 'quiz']
      },
      {
        id: 3,
        name: 'url-shortener',
        description: 'Military-grade URL shortener with advanced security features and analytics',
        html_url: 'https://github.com/Pranavfr/url-shortener',
        stargazers_count: 28,
        forks_count: 15,
        language: 'Python',
        updated_at: '2024-01-08T09:15:00Z',
        topics: ['python', 'flask', 'security', 'analytics']
      },
      {
        id: 4,
        name: 'glowhelpai-chatbot',
        description: 'AI-powered chatbot for personalized skincare guidance using OpenAI API',
        html_url: 'https://github.com/Pranavfr/glowhelpai-chatbot',
        stargazers_count: 38,
        forks_count: 6,
        language: 'JavaScript',
        updated_at: '2024-01-12T16:45:00Z',
        topics: ['ai', 'chatbot', 'skincare', 'openai']
      },
      {
        id: 5,
        name: 'portfolio-website',
        description: 'Modern portfolio website built with React, TypeScript, and Tailwind CSS',
        html_url: 'https://github.com/Pranavfr/portfolio-website',
        stargazers_count: 25,
        forks_count: 10,
        language: 'TypeScript',
        updated_at: '2024-01-14T11:30:00Z',
        topics: ['react', 'typescript', 'portfolio', 'tailwind']
      }
    ];

    const mockCommits: GitHubCommit[] = [
      {
        sha: 'abc123',
        message: 'feat: Add interactive skill tree component',
        date: '2024-01-15T10:30:00Z',
        repo: 'portfolio-website'
      },
      {
        sha: 'def456',
        message: 'fix: Resolve authentication issues in esports platform',
        date: '2024-01-14T16:20:00Z',
        repo: 'esports-talks'
      },
      {
        sha: 'ghi789',
        message: 'feat: Implement AI chatbot for skincare guidance',
        date: '2024-01-13T14:15:00Z',
        repo: 'glowhelpai-chatbot'
      },
      {
        sha: 'jkl012',
        message: 'docs: Update README with deployment instructions',
        date: '2024-01-12T09:45:00Z',
        repo: 'url-shortener'
      },
      {
        sha: 'mno345',
        message: 'feat: Add personality type analysis to quiz app',
        date: '2024-01-11T13:30:00Z',
        repo: 'PersonalityTest'
      }
    ];

    setRepos(mockRepos);
    setCommits(mockCommits);

    // Calculate stats - Updated to reflect 11 total repositories
    const totalStars = mockRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = mockRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

    setStats({
      totalRepos: 11, // Updated to show total of 11 repositories
      totalStars,
      totalForks,
      totalCommits: mockCommits.length
    });

    setLoading(false);
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading GitHub activity...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My latest contributions, repositories, and coding activity
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
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
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 text-${stat.color}-400`} />
                <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Repositories */}
          <motion.div variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" variants={itemVariants}>
              <Github size={24} className="text-cyan-400" />
              Recent Repositories
            </motion.h3>
            
            <div className="space-y-4">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-400">
                        <Star size={14} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <GitBranch size={14} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm ${getLanguageColor(repo.language)}`}>
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
            <motion.h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" variants={itemVariants}>
              <TrendingUp size={24} className="text-green-400" />
              Recent Commits
            </motion.h3>
            
            <div className="space-y-4">
              {commits.map((commit, index) => (
                <motion.div
                  key={commit.sha}
                  className="p-6 bg-gray-800 rounded-xl border border-gray-700"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-sm font-mono text-cyan-400">
                      {commit.sha.substring(0, 7)}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {formatDate(commit.date)}
                    </span>
                  </div>
                  
                  <p className="text-white mb-3 text-sm">
                    {commit.message}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Code size={12} />
                    {commit.repo}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubActivity; 