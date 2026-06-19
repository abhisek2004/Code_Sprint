'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BookOpen, MessageSquare, Award } from 'lucide-react'

export default function AdminAnalytics() {
  const metrics = [
    { label: 'Total Visitors', value: '24,582', icon: Users, change: '+12.5%', positive: true },
    { label: 'Active Users', value: '8,234', icon: Users, change: '+8.2%', positive: true },
    { label: 'Projects Completed', value: '342', icon: BookOpen, change: '+5.1%', positive: true },
    { label: 'Avg. Rating', value: '4.8/5', icon: Award, change: '+0.2', positive: true },
    { label: 'Comments/Day', value: '1,245', icon: MessageSquare, change: '+3.4%', positive: true },
    { label: 'Bounce Rate', value: '24.2%', icon: TrendingUp, change: '-2.1%', positive: true },
  ]

  const chartData = [
    { day: 'Mon', visitors: 2400, projects: 180 },
    { day: 'Tue', visitors: 3200, projects: 220 },
    { day: 'Wed', visitors: 2800, projects: 200 },
    { day: 'Thu', visitors: 3800, projects: 280 },
    { day: 'Fri', visitors: 4200, projects: 310 },
    { day: 'Sat', visitors: 3500, projects: 240 },
    { day: 'Sun', visitors: 2800, projects: 200 },
  ]

  const topProjects = [
    { name: 'E-Commerce Platform', views: 5284, rating: 4.9 },
    { name: 'Todo App', views: 4125, rating: 4.8 },
    { name: 'Blog CMS', views: 3842, rating: 4.7 },
    { name: 'Weather App', views: 2941, rating: 4.6 },
    { name: 'Chat App', views: 2123, rating: 4.5 },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-foreground/60">Platform statistics and insights for the last 30 days</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-sm font-semibold ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-foreground/60 text-sm mb-1">{metric.label}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Weekly Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Weekly Overview</h2>
        <div className="grid md:grid-cols-7 gap-3">
          {chartData.map((data, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="text-sm font-semibold mb-3">{data.day}</div>
              <motion.div
                whileHover={{ scaleY: 1.1 }}
                className="flex gap-1"
              >
                <div
                  className="w-6 rounded-t bg-gradient-to-t from-purple-500 to-purple-400"
                  style={{ height: `${(data.visitors / 5000) * 100}px` }}
                />
                <div
                  className="w-6 rounded-t bg-gradient-to-t from-pink-500 to-pink-400"
                  style={{ height: `${(data.projects / 350) * 100}px` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-6 mt-8 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded" />
            <span>Visitors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-500 rounded" />
            <span>Completions</span>
          </div>
        </div>
      </motion.div>

      {/* Top Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Top Performing Projects</h2>
        <div className="space-y-4">
          {topProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.05 }}
              className="flex items-center justify-between p-4 glass-secondary rounded-lg hover:bg-white/10 transition-colors"
            >
              <div>
                <h3 className="font-semibold mb-1">{project.name}</h3>
                <div className="flex gap-4 text-sm text-foreground/60">
                  <span>{project.views.toLocaleString()} views</span>
                  <span className="text-yellow-400">★ {project.rating}</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 relative"
              >
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={`${(project.views / 6000) * 113.1} 113.1`}
                    strokeLinecap="round"
                    transform="rotate(-90 20 20)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                  {Math.round((project.views / 6000) * 100)}%
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
