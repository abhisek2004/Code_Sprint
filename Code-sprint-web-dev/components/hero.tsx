'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'MERN Stack',
]

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTech = technologies[currentTechIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayedText.length < currentTech.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTech.slice(0, displayedText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentTechIndex((prev) => (prev + 1) % technologies.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, currentTechIndex, isDeleting])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl sm:text-7xl font-bold text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                CodeSprint-WebDev-Challenge
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-foreground/70 text-pretty font-light"
            >
              Master Web Development Through 62 Days of Real Projects
            </motion.p>

            {/* Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="h-20 flex items-center"
            >
              <div className="text-xl sm:text-2xl">
                <span className="text-foreground/50">Learn </span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent min-w-fit">
                  {displayedText}
                </span>
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-4 pt-2">
                <a
                  href="https://github.com/abhisek2004/62Days-CodeSprint-WebDev-Challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                    🚀 Explore Projects
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contribute">
                <button className="px-8 py-4 border border-purple-500/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto glass-effect">
                  💻 Start Contributing
                </button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 border border-yellow-500/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto glass-effect">
                  ⭐ GitHub Repository
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12"
          >
            {[
              { icon: '👨‍💻', label: 'Contributors', value: '500+' },
              { icon: '📂', label: 'Projects', value: '200+' },
              { icon: '⭐', label: 'GitHub Stars', value: '5K+' },
              { icon: '🔥', label: 'PRs Merged', value: '1K+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-effect p-4 rounded-xl text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
