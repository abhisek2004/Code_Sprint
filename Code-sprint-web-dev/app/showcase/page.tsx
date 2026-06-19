'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { Search, X } from 'lucide-react'

const PROJECTS = [
  {
    id: '1',
    name: 'Personal Portfolio Website',
    contributor: 'Abhisek Panda',
    description: 'A stunning portfolio website built with React and Tailwind CSS showcasing projects and skills.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    difficulty: 'Beginner' as const,
    category: 'React',
    featured: true,
    githubUrl: 'https://github.com/abhisek2004/portfolio',
    liveUrl: 'https://abhisekpanda072.vercel.app',
  },
  {
    id: '2',
    name: 'E-Commerce Platform',
    contributor: 'John Doe',
    description: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
    technologies: ['MERN', 'Stripe', 'MongoDB', 'Node.js'],
    difficulty: 'Advanced' as const,
    category: 'MERN',
    featured: true,
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    name: 'To-Do Application',
    contributor: 'Jane Smith',
    description: 'Interactive to-do app with local storage and beautiful animations.',
    technologies: ['React', 'JavaScript', 'CSS'],
    difficulty: 'Beginner' as const,
    category: 'React',
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    name: 'Weather Dashboard',
    contributor: 'Mike Johnson',
    description: 'Real-time weather dashboard using OpenWeather API with beautiful UI.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    difficulty: 'Intermediate' as const,
    category: 'JavaScript',
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    name: 'Social Media App',
    contributor: 'Sarah Williams',
    description: 'Full-stack social media application with real-time notifications.',
    technologies: ['MERN', 'Socket.io', 'MongoDB'],
    difficulty: 'Advanced' as const,
    category: 'MERN',
    featured: false,
    githubUrl: 'https://github.com',
  },
  {
    id: '6',
    name: 'Calculator App',
    contributor: 'David Brown',
    description: 'Scientific calculator with keyboard support and history tracking.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    difficulty: 'Beginner' as const,
    category: 'JavaScript',
    featured: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '7',
    name: 'Blog Platform',
    contributor: 'Lisa Anderson',
    description: 'Content management system for bloggers with markdown support.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    difficulty: 'Intermediate' as const,
    category: 'Node.js',
    featured: false,
    githubUrl: 'https://github.com',
  },
  {
    id: '8',
    name: 'Chat Application',
    contributor: 'Robert Taylor',
    description: 'Real-time chat application with user authentication and message history.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    difficulty: 'Advanced' as const,
    category: 'MERN',
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'MERN']
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function ShowcasePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.contributor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty
      const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech)

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTech
    })
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTech])

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Explore amazing projects built by our community members
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50" size={20} />
            <input
              type="text"
              placeholder="Search by project name, contributor, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-foreground placeholder-foreground/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-7xl mx-auto mb-12 space-y-4"
        >
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/70 mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                      : 'glass-effect hover:glass-secondary'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/70 mb-3">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((diff) => (
                <motion.button
                  key={diff}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedDifficulty === diff
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                      : 'glass-effect hover:glass-secondary'
                  }`}
                >
                  {diff}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/70 mb-3">Technology</h3>
            <div className="flex flex-wrap gap-2">
              {['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'].map((tech) => (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedTech === tech
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                      : 'glass-effect hover:glass-secondary'
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {filteredProjects.length > 0 ? (
            <>
              <div className="mb-6 text-foreground/60">
                Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-foreground/60 mb-6">
                Try adjusting your filters or search query
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                  setSelectedDifficulty('All')
                  setSelectedTech('All')
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
