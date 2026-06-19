'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, Star, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Projects',
      value: '48',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      trend: '+12%',
    },
    {
      label: 'Contributors',
      value: '256',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      trend: '+8%',
    },
    {
      label: 'Avg Rating',
      value: '4.8',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      trend: '+0.3%',
    },
    {
      label: 'Page Views',
      value: '12.4K',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      trend: '+24%',
    },
  ]

  const recentProjects = [
    { id: 1, name: 'E-Commerce Platform', status: 'Active', level: 'Advanced', contributors: 12 },
    { id: 2, name: 'Todo App', status: 'Active', level: 'Beginner', contributors: 8 },
    { id: 3, name: 'Blog CMS', status: 'Pending', level: 'Intermediate', contributors: 5 },
    { id: 4, name: 'Weather App', status: 'Active', level: 'Beginner', contributors: 6 },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-foreground/60">Welcome back! Here's your project overview.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-effect p-6 rounded-2xl cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-green-400">{stat.trend}</span>
              </div>
              <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <a href="/admin/projects">
            <button className="px-4 py-2 text-sm bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/50">
              View All
            </button>
          </a>
        </div>

        <div className="space-y-3">
          {recentProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex items-center justify-between p-4 glass-secondary rounded-lg hover:bg-white/20 transition-colors cursor-pointer group"
            >
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-purple-400 transition-colors">{project.name}</h3>
                <div className="flex gap-3 mt-1 text-sm text-foreground/60">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <span>{project.level}</span>
                  <span>{project.contributors} contributors</span>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-purple-400">→</motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
