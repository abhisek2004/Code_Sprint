'use client'

import { motion } from 'framer-motion'
import { Plus, Edit2, Trash2, Eye, EyeOff, Search } from 'lucide-react'
import { useState } from 'react'

export default function AdminProjects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [projects, setProjects] = useState([
    { id: 1, name: 'E-Commerce Platform', level: 'Advanced', status: 'Active', featured: true, views: 2840, date: '2026-01-15' },
    { id: 2, name: 'Todo App', level: 'Beginner', status: 'Active', featured: false, views: 1240, date: '2026-01-20' },
    { id: 3, name: 'Blog CMS', level: 'Intermediate', status: 'Active', featured: true, views: 980, date: '2026-02-01' },
    { id: 4, name: 'Weather App', level: 'Beginner', status: 'Active', featured: false, views: 560, date: '2026-02-10' },
    { id: 5, name: 'Chat Application', level: 'Advanced', status: 'Pending', featured: false, views: 0, date: '2026-02-15' },
  ])

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: number) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  const toggleFeatured = (id: number) => {
    setProjects(projects.map(p =>
      p.id === id ? { ...p, featured: !p.featured } : p
    ))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Projects Management</h1>
          <p className="text-foreground/60">Manage and organize all CodeSprint projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all"
        >
          <Plus size={20} /> Add Project
        </motion.button>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-4 top-3.5 text-foreground/40" size={20} />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
      </motion.div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left text-sm font-semibold text-foreground/70">
                <th className="px-6 py-4">Project Name</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4">Featured</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProjects.map((project, i) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="text-sm hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{project.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      project.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{project.views.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => toggleFeatured(project.id)}
                      className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
                    >
                      {project.featured ? (
                        <Eye size={16} className="text-purple-400" />
                      ) : (
                        <EyeOff size={16} className="text-foreground/40" />
                      )}
                    </motion.button>
                  </td>
                  <td className="px-6 py-4 text-foreground/60">{project.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
                      >
                        <Edit2 size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDelete(project.id)}
                        className="p-2 rounded-lg glass-effect hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 size={16} className="text-red-400" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-foreground/60">No projects found matching your search.</p>
        </motion.div>
      )}
    </div>
  )
}
