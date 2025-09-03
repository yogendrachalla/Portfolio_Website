'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  image: string; // URL or path to skill image
  category: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'Next.js', proficiency: 60, image: '/Nextjs.jpeg', category: 'Frontend' },
  { name: 'HTML/CSS', proficiency: 98, image: '/html.png', category: 'Frontend' },
  { name: 'JavaScript', proficiency: 40, image: '/JavaScript.jpg', category: 'Frontend' },
  
  // Backend
  { name: 'Java', proficiency: 70, image: '/Java.png', category: 'Backend' },
  { name: 'Python', proficiency: 80, image: '/Python.jpeg', category: 'Backend' },
  { name: 'MySQL', proficiency: 89, image: '/MySQL.jpeg', category: 'Backend' },

  // DevOps & Tools
  { name: 'Power BI', proficiency: 40, image: '/PowerBI.jpeg', category: 'DevOps & Tools' },
  
  // Mobile & Others
  { name: 'Figma', proficiency: 30, image: '/Figma.png', category: 'Mobile & Others' },
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'Mobile & Others'];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of my technical skills and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Skill Box with Image and Progress */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Skill Image */}
                <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback to a colored div if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback colored div */}
                  <div className="w-10 h-10 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm hidden">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                
                {/* Skill Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full relative"
                    >
                      {/* Percentage Label */}
                      <span className="absolute -top-8 right-0 text-xs font-medium text-gray-600 dark:text-gray-300">
                        {skill.proficiency}%
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="text-right">
                <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Currently Learning */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Learning
            </h3>
            <div className="space-y-3">
              {['Data Analytics', 'Amazon Web Services', 'Machine Learning'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="space-y-3">
              {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
