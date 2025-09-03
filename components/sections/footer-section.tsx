'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail, 
  Heart,
  ArrowUp
} from 'lucide-react'

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/yogendrachalla', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/challayogendra/', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
    { name: 'Website', icon: Globe, url: 'https://yourwebsite.com', color: 'hover:text-primary-600' }
  ]

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Challa Yogendra
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <a href="mailto:yogendrachalla.03@gmail.com" className="hover:text-primary-400 transition-colors">
                  yogendrachalla.03@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="h-4 w-4 text-primary-400" />
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  yourwebsite.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className={`w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center 
                             text-gray-400 transition-all duration-200 hover:scale-110 
                             border border-dark-700 ${social.color}`}
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>
              © {currentYear} Challa Yogendra. All rights reserved.
            </p>
            <p className="mt-1">
              Made with <Heart className="inline h-4 w-4 text-red-500" /> using Next.js & TailwindCSS
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg 
                     transition-colors duration-200 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 md:hidden z-40"
      >
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </footer>
  )
}
