import React, { useState, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import { Code, Database, Shield, Cpu, Cloud, Globe } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: string;
  icon: any;
  color: string;
  description: string;
  position: { x: number; y: number };
}

const SkillTree = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const skillNodes: SkillNode[] = [
    {
      id: 'react',
      name: 'React',
      level: 95,
      category: 'Frontend',
      icon: Code,
      color: 'cyan',
      description: 'Advanced React with hooks, context, and performance optimization',
      position: { x: 50, y: 20 }
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      level: 90,
      category: 'Frontend',
      icon: Code,
      color: 'blue',
      description: 'Strong typing and advanced TypeScript patterns',
      position: { x: 80, y: 40 }
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      level: 88,
      category: 'Backend',
      icon: Database,
      color: 'green',
      description: 'Server-side JavaScript with Express and middleware',
      position: { x: 20, y: 60 }
    },
    {
      id: 'python',
      name: 'Python',
      level: 85,
      category: 'Backend',
      icon: Database,
      color: 'teal',
      description: 'Flask, Django, and data processing',
      position: { x: 50, y: 80 }
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      level: 92,
      category: 'Security',
      icon: Shield,
      color: 'red',
      description: 'Penetration testing, OWASP, and security auditing',
      position: { x: 80, y: 60 }
    },
    {
      id: 'ai',
      name: 'AI/ML',
      level: 85,
      category: 'AI',
      icon: Cpu,
      color: 'purple',
      description: 'OpenAI API, chatbots, and natural language processing',
      position: { x: 20, y: 40 }
    },
    {
      id: 'devops',
      name: 'DevOps',
      level: 82,
      category: 'Infrastructure',
      icon: Cloud,
      color: 'orange',
      description: 'Docker, CI/CD, and cloud deployment',
      position: { x: 50, y: 60 }
    },
    {
      id: 'api',
      name: 'REST APIs',
      level: 90,
      category: 'Web',
      icon: Globe,
      color: 'emerald',
      description: 'API design, authentication, and documentation',
      position: { x: 80, y: 80 }
    }
  ];

  const connections = [
    { from: 'react', to: 'typescript' },
    { from: 'react', to: 'nodejs' },
    { from: 'nodejs', to: 'python' },
    { from: 'python', to: 'ai' },
    { from: 'ai', to: 'security' },
    { from: 'security', to: 'devops' },
    { from: 'devops', to: 'api' },
    { from: 'api', to: 'react' }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skill Tree
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Interactive visualization of my interconnected skills and expertise
          </p>
        </motion.div>

        <motion.div 
          className="relative bg-gray-900 rounded-xl border border-gray-700 p-4 sm:p-8 min-h-[400px] sm:min-h-[600px] overflow-hidden"
          variants={containerVariants}
        >
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const fromNode = skillNodes.find(n => n.id === connection.from);
              const toNode = skillNodes.find(n => n.id === connection.to);
              
              if (!fromNode || !toNode) return null;
              
              return (
                <motion.line
                  key={index}
                  x1={`${fromNode.position.x}%`}
                  y1={`${fromNode.position.y}%`}
                  x2={`${toNode.position.x}%`}
                  y2={`${toNode.position.y}%`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Skill Nodes */}
          {skillNodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <motion.div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  hoveredNode === node.id ? 'z-20' : 'z-10'
                }`}
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`
                }}
                variants={nodeVariants}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                <div className={`relative group`}>
                  {/* Node */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-${node.color}-500 to-${node.color}-600 flex items-center justify-center shadow-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300`}>
                    <IconComponent size={18} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  {/* Level indicator */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                    {node.level}
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg border border-gray-600 shadow-lg whitespace-nowrap ${
                      hoveredNode === node.id ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredNode === node.id ? 1 : 0, y: hoveredNode === node.id ? 0 : 10 }}
                  >
                    <div className="font-bold">{node.name}</div>
                    <div className="text-xs text-gray-400">{node.description}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            { category: 'Frontend', color: 'cyan', icon: Code },
            { category: 'Backend', color: 'green', icon: Database },
            { category: 'Security', color: 'red', icon: Shield },
            { category: 'AI/ML', color: 'purple', icon: Cpu }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.category}
                className="flex items-center gap-2 text-xs sm:text-sm"
                variants={itemVariants}
              >
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-${item.color}-500`}></div>
                <IconComponent size={14} className={`sm:w-4 sm:h-4 text-${item.color}-400`} />
                <span className="text-gray-400">{item.category}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 px-4"
          variants={itemVariants}
        >
          Hover over nodes to see details • Click to select • Lines show skill relationships
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillTree; 