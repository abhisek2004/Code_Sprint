'use client'

import { motion } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  name: string
  contributor: string
  description: string
  technologies: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  featured?: boolean
  githubUrl: string
  liveUrl?: string
  image?: string
}

const difficultyColors = {
  Beginner: 'from-green-400 to-green-600',
  Intermediate: 'from-yellow-400 to-yellow-600',
  Advanced: 'from-red-400 to-red-600',
}

export function ProjectCard({
  id,
  name,
  contributor,
  description,
  technologies,
  difficulty,
  category,
  featured,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden h-full flex flex-col hover:glass-secondary transition-all">
        {/* Image/Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl">{category === 'React' ? '⚛️' : category === 'Node.js' ? '🚀' : category === 'MongoDB' ? '🗄️' : '💻'}</div>
            </div>
          )}

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                Featured
              </div>
            </div>
          )}

          {/* Difficulty Badge */}
          <div className={`absolute top-4 left-4 bg-gradient-to-r ${difficultyColors[difficulty]} text-white px-3 py-1 rounded-full text-xs font-bold`}>
            {difficulty}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
            {name}
          </h3>

          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
            by{' '}
            <span className="text-purple-400 font-semibold">{contributor}</span>
          </p>

          <p className="text-sm text-foreground/70 mb-4 flex-1 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/80 border border-white/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/80 border border-white/20">
                +{technologies.length - 3}
              </span>
            )}
          </div>

          {/* Category Tag */}
          <div className="mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 font-semibold border border-purple-500/30">
              {category}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
                <GitBranch size={16} /> GitHub
              </button>
            </motion.a>

            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <button className="w-full px-4 py-2 border border-purple-500/50 text-foreground rounded-lg font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <ExternalLink size={16} /> Live
                </button>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
