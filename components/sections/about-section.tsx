'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download, ExternalLink } from 'lucide-react'

export function AboutSection() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
                Hello! I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
                I specialize in building modern web applications that not only look great but also provide exceptional user experiences.
              </p>
              
              <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
                With expertise in both frontend and backend technologies, I bring ideas to life through clean code and intuitive design. 
                I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible on the web.
              </p>
              
              <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python','Java', 'SQL', 'Power BI'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 
                             rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Let's Work Together
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  // Try to download resume first, fallback to scrolling
                  const resumeLink = document.createElement('a')
                  resumeLink.href = '/public/Resume (pdf).pdf' // Update this path to your actual resume file
                  resumeLink.download = 'Challa_Yogendra_Resume.pdf' // Update with your actual name
                  resumeLink.target = '_blank'
                  
                  // Check if file exists, if not scroll to resume section
                  fetch('/resume.pdf')
                    .then(response => {
                      if (response.ok) {
                        resumeLink.click()
                      } else {
                        // File not found, scroll to resume section
                        document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    })
                    .catch(() => {
                      // Error occurred, scroll to resume section
                      document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })
                    })
                }}
                className="group"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl blur-3xl" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 
                            rounded-3xl p-2 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Profile photo */}
                  <Image
                    src="/profile_photo.jpg"
                    alt="Profile photo"
                    width={1000}
                    height={1000}
                    className="w-full h-96 md:h-[500px] object-cover"
                    priority
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-white/90 dark:bg-dark-800/90 rounded-2xl 
                               shadow-lg flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 dark:bg-dark-800/90 rounded-xl 
                               shadow-lg flex items-center justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <span className="text-xl">💻</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Experience badges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
