'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookOpen, Video, Code, ExternalLink, Star, Award, Globe } from 'lucide-react'

export default function ResourcesPage() {
  const categories = [
    {
      title: 'Learning Platforms',
      icon: <BookOpen className="text-purple-400" size={28} />,
      resources: [
        { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Free online coding bootcamp' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Official web documentation' },
        { name: 'Codecademy', url: 'https://www.codecademy.com', desc: 'Interactive coding lessons' },
        { name: 'Udemy', url: 'https://www.udemy.com', desc: 'Online courses on various topics' }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: <Video className="text-pink-400" size={28} />,
      resources: [
        { name: 'YouTube - Traversy Media', url: 'https://www.youtube.com/@TraversyMedia', desc: 'Web development tutorials' },
        { name: 'YouTube - The Net Ninja', url: 'https://www.youtube.com/@NetNinja', desc: 'Comprehensive course playlists' },
        { name: 'YouTube - Fireship', url: 'https://www.youtube.com/@Fireship', desc: 'Quick tech tutorials' },
        { name: 'YouTube - Web Dev Simplified', url: 'https://www.youtube.com/@WebDevSimplified', desc: 'Simplified web dev concepts' }
      ]
    },
    {
      title: 'Tools & Libraries',
      icon: <Code className="text-yellow-400" size={28} />,
      resources: [
        { name: 'React', url: 'https://react.dev', desc: 'JavaScript library for UI' },
        { name: 'Next.js', url: 'https://nextjs.org', desc: 'React framework for production' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com', desc: 'Utility-first CSS framework' },
        { name: 'Vercel', url: 'https://vercel.com', desc: 'Platform for deploying apps' }
      ]
    },
    {
      title: 'Community & Forums',
      icon: <Globe className="text-blue-400" size={28} />,
      resources: [
        { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: 'Q&A for programmers' },
        { name: 'Reddit - r/webdev', url: 'https://www.reddit.com/r/webdev', desc: 'Web dev community' },
        { name: 'Dev.to', url: 'https://dev.to', desc: 'Developer community platform' },
        { name: 'Discord', url: 'https://discord.com', desc: 'Connect with other developers' }
      ]
    }
  ]

  const recommendedBooks = [
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', level: 'Beginner' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', level: 'Intermediate' },
    { title: 'Clean Code', author: 'Robert C. Martin', level: 'Advanced' },
    { title: 'Design Patterns', author: 'GoF', level: 'Advanced' }
  ]

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Curated list of learning resources, tools, and communities
          </p>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Resource Categories</h2>
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {category.resources.map((resource, j) => (
                  <motion.a
                    key={j}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all flex items-start gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        {resource.name}
                        <ExternalLink size={16} className="text-foreground/50" />
                      </h4>
                      <p className="text-foreground/60">{resource.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recommended Books */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20 border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Recommended Books</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedBooks.map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-purple-400" size={24} />
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300">{book.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-foreground/60">by {book.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribute Resources */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
        >
          <Star className="mx-auto text-purple-400 mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Contribute Resources</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Know a great resource we&apos;re missing? Help us expand this list by submitting your favorite tools, tutorials, or communities!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Submit a Resource
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
