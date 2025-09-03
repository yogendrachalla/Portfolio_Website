'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  X, 
  Calendar,
  Users,
  Star,
  GitBranch
} from 'lucide-react'

// Project data with detailed information
const projectsData = [
  {
    id: 1,
    title: 'Recipe Finder',
    description: 'Recipe Finder is a web app built with HTML, CSS, Javascript and TheMealDB API that lets users search and explore recipes based on a chosen ingredient.',
    shortDescription: 'Recipe Finder is a web app built with HTML, CSS, and JavaScript that lets users search and explore recipes based on a chosen ingredient.',
    image: '/Gemini_Generated_Image_bpwvi9bpwvi9bpwv.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TheMealDB API'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/yogendrachalla/Find_Meal_for_Your_Ingredients',
    liveUrl: 'https://recipe-finder-demo.com',
    features: [
      'Ingredient-Based Search',
      'Dynamic Recipe Display',
      'Detailed Recipe Information',
      'API Integration',
      'YT Video Link',
      'Interactive UI'
    ],
    stats: {
      stars: 4,
      forks: 1,
      contributors: 2,
      lastUpdated: '12-01-2024'
    }
  },
  {
    id: 2,
    title: 'Supply Chain Management using Blockchain',
    description: 'A blockchain-based supply chain tracking system that ensures transparent, tamper-proof, and real-time traceability of products from origin to destination.',
    shortDescription: 'Blockchain-based supply chain tracking system',
    image: '/Gemini_Generated_Image_ww3159ww3159ww31.png',
    technologies: ['Node.js', 'Web3.js', 'SQL', 'Solidity', 'Ethereum'],
    category: 'Backend-Heavy',
    githubUrl: 'https://github.com/yogendrachalla/Supply_Chain_Management_using_Blockchain',
    liveUrl: 'https://supplychain-tracking-system.com',
    features: [
      'Product Traceability',
      'Tamper Proof Records',
      'Smart Contracts Automation',
      'Transaction Management',
      'Inventory Management',
      'Decentralized Data Storage'
    ],
    stats: {
      stars: 1,
      forks: 1,
      contributors: 3,
      lastUpdated: '20-05-2024'
    }
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features smooth animations, dark/light mode, and optimized performance.',
    shortDescription: 'Modern portfolio with smooth animations and responsive design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    category: 'Frontend',
    githubUrl: 'https://github.com/yogendrachalla/Portfolio_Website',
    liveUrl: 'https://challa-yogendra-portfolio.vercel.app/',
    features: [
      'Responsive UI',
      'Dark/light mode toggle',
      'Smooth animations',
      'Skills grid with Progress Bars',
      'Interactive Projects Showcase',
      'Contact + Resume Download'
    ],
    stats: {
      stars: 2,
      forks: 0,
      contributors: 1,
      lastUpdated: '10-01-2025'
    }
  },
  {
    id: 4,
    title: 'MindVault AI',
    description: 'MindVault AI is an intelligent note-taking and knowledge management platform that lets users upload sources, chat with AI, and generate study guides, FAQs, and timelines for deeper learning.',
    shortDescription: 'AI-powered note-taking and knowledge management platform',
    image: '/Gemini_Generated_Image_98snmi98snmi98sn.png',
    technologies: ['React', 'Node.js', 'OpenAI API', 'LangChain', 'PostgreSQL', 'Clerk'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://aichat-demo.com',
    features: [
      'AI-Powered Chat',
      'Conversation history',
      'File upload & processing',
      'User-Friendly Dashboard',
      'User authentication',
      'Notebook Management'
    ],
    stats: {
      stars: 2,
      forks: 2,
      contributors: 3,
      lastUpdated: '10-06-2025'
    }
  },
  {
    id: 5,
    title: 'Inventory Management System',
    description: 'An Inventory Management System is a database management project that helps track and manage an organization\'s inventory, ensuring accurate stock levels and efficient operations.',
    shortDescription: 'Inventory Management System with real-time data',
    image: '/Gemini_Generated_Image_l6ekm8l6ekm8l6ek.png',
    technologies: ['React', 'Python', 'MySQL', 'HTML'],
    category: 'Database',
    githubUrl: 'https://github.com/yogendrachalla/Inventory_Management_System',
    liveUrl: 'https://inventory-management-system.com',
    features: [
      'Real-time stock visibility',
      'Reporting and Alerts',
      'User-Friendly Dashboard',
      'Demand Forecasting',
      'Performance Analytics',
      'Automated Replenishment'
    ],
    stats: {
      stars: 1,
      forks: 0,
      contributors: 1,
      lastUpdated: '20-07-2024'
    }
  },
  {
    id: 6,
    title: 'DecoyVerse',
    description: 'DecoyVerse is a "HoneyToken as a Service" project that provides a scalable and automated platform for generating and deploying deceptive digital assets to detect and track unauthorized access and insider threats.',
    shortDescription: 'DecoyVerse is a "HoneyToken as a Service" project that provides a scalable and automated platform for generating and deploying deceptive digital assets to detect and track unauthorized access and insider threats.',
    image: '/Gemini_Generated_Image_8yo95r8yo95r8yo9.png',
    technologies: ['React', 'Node.js', 'Python', 'AWS S3', 'JWT', 'Redux'],
    category: 'Security',
    githubUrl: 'https://github.com/yogendrachalla/DecoyVerse',
    liveUrl: 'https://decoyverse.com',
    features: [
      'HoneyToken Generation',
      'Automated Deployment and Integration ',
      'Real-time Alerts',
      'Transaction Logs',
      'Multi-Platform Supported',
      'Intelligent Dashboard'
    ],
    stats: {
      stars: 0,
      forks: 0,
      contributors: 4,
      lastUpdated: '03-09-2025'
    }
  }
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend-Heavy', 'Database', 'AI/ML','Security']
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with attention to detail, 
            performance, and user experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                            transition-all duration-300 border border-gray-200 dark:border-dark-600">
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-2 bg-white text-dark-900 rounded-full font-medium flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      View Details
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-dark-600 dark:text-dark-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-dark-600 dark:text-dark-400 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="h-4 w-4" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.stats.contributors}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com/yogendrachalla', '_blank')}
            className="group"
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-dark-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                    Key Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-dark-600 dark:text-dark-400">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                    Project Stats
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.stars}
                      </div>
                      <div className="text-sm text-dark-600 dark:text-dark-400">Stars</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.forks}
                      </div>
                      <div className="text-sm text-dark-600 dark:text-dark-400">Forks</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.contributors}
                      </div>
                      <div className="text-sm text-dark-600 dark:text-dark-400">Contributors</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                      <div className="text-sm text-dark-600 dark:text-dark-400">Updated</div>
                      <div className="text-sm font-medium text-dark-800 dark:text-dark-200">
                        {new Date(selectedProject.stats.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open('https://github.com/yogendrachalla/Find_Meal_for_Your_Ingredients', '_blank')}
                    className="flex-1 group"
                  >
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    className="flex-1 group"
                  >
                    <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
