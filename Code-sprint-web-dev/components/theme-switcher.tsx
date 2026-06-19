'use client'

import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-lg glass-effect" />
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Moon size={20} className="text-purple-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Sun size={20} className="text-yellow-400" />
      </motion.div>
    </motion.button>
  )
}
