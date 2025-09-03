'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileText, Award, Briefcase, GraduationCap, Calendar } from 'lucide-react'

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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

  const handleDownload = () => {
    // Create a dummy resume download
    const link = document.createElement('a')
    link.href = '/Resume (pdf).pdf' // Replace with actual resume path
    link.download = 'Challa_Yogendra_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Resume & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Download my detailed resume to learn more about my experience, education, and technical skills.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Resume Download Section */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-600">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <FileText className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                  Download Resume
                </h3>
                <p className="text-dark-600 dark:text-dark-400">
                  Get a comprehensive overview of my skills, experience, and achievements in PDF format.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                className="w-full lg:w-auto group"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume (PDF)
              </Button>

              <div className="mt-6 text-sm text-dark-500 dark:text-dark-400">
                <p>Last updated: September 2025</p>
                <p>File size: ~2.8 MB</p>
              </div>
            </div>
          </motion.div>

          {/* Experience Summary */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Experience Highlights
            </h3>

            {/* Work Experience */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-200 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Work Experience
              </h4>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Full-Stack Developer Intern',
                    company: 'Shadow Fox',
                    period: '2025 - 2025',
                    description: 'Built scalable web applications and contributed to product development and team growth.'
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-dark-700 rounded-xl p-4 border border-gray-200 dark:border-dark-600"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-dark-800 dark:text-dark-200">
                        {job.title}
                      </h5>
                      <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                      {job.company}
                    </p>
                    <p className="text-sm text-dark-500 dark:text-dark-500">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-200 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Education
              </h4>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white dark:bg-dark-700 rounded-xl p-4 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-dark-800 dark:text-dark-200">
                    Bachelor of Computer Science and Engineering
                  </h5>
                  <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                    2022 - 2026
                  </span>
                </div>
                <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                  Dayananda Sagar University
                </p>
                <p className="text-sm text-dark-500 dark:text-dark-500">
                  8.89 CGPA |
                  Graduating this year. Specialized in software engineering and web development.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white dark:bg-dark-700 rounded-xl p-4 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-dark-800 dark:text-dark-200">
                    Intermediate
                  </h5>
                  <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                    2020 - 2022
                  </span>
                </div>
                <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-1">
                  Sri Nalanda Jr College
                </p>
                <p className="text-sm text-dark-500 dark:text-dark-500">
                  8.95 CGPA |
                  Graduated with honors.
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-200 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                Certifications
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'AWS Certified Developer',
                  'TechA Linux Programming',
                  'Certified Full Stack Developer',
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="bg-white dark:bg-dark-700 rounded-lg p-3 border border-gray-200 dark:border-dark-600 text-center"
                  >
                    <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-600">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white text-center mb-8">
              Key Skills & Competencies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Frontend Development',
                  skills: ['React', 'Next.js', 'TailwindCSS']
                },
                {
                  category: 'Backend Development',
                  skills: ['Python', 'MySQL', 'REST APIs']
                },
                {
                  category: 'DevOps & Tools',
                  skills: ['AWS', 'Power BI', 'Performance Optimization']
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm text-dark-600 dark:text-dark-400 bg-gray-50 dark:bg-dark-600 rounded-lg py-2 px-3"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
