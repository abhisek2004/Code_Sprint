'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FileText, Code, FolderOpen, Terminal, BookOpen, GitBranch } from 'lucide-react'

export default function DocumentationPage() {
  const sections = [
    {
      title: 'Getting Started',
      icon: <BookOpen className="text-purple-400" size={28} />,
      items: [
        { title: 'Introduction', desc: 'Learn about CodeSprint and its purpose' },
        { title: 'Installation', desc: 'Step-by-step guide to set up your development environment' },
        { title: 'Quick Start', desc: 'Build your first project in 5 minutes' }
      ]
    },
    {
      title: 'Project Structure',
      icon: <FolderOpen className="text-pink-400" size={28} />,
      items: [
        { title: 'Folder Organization', desc: 'Understand the recommended folder structure' },
        { title: 'File Naming', desc: 'Best practices for naming your files and directories' },
        { title: 'Component Architecture', desc: 'How to structure your React components' }
      ]
    },
    {
      title: 'Development',
      icon: <Code className="text-yellow-400" size={28} />,
      items: [
        { title: 'Coding Standards', desc: 'Follow our coding conventions and style guide' },
        { title: 'Testing', desc: 'How to write and run tests for your projects' },
        { title: 'Debugging', desc: 'Tips and tools for effective debugging' }
      ]
    },
    {
      title: 'Deployment',
      icon: <Terminal className="text-blue-400" size={28} />,
      items: [
        { title: 'Build Process', desc: 'How to build your project for production' },
        { title: 'Hosting Options', desc: 'Different platforms to deploy your applications' },
        { title: 'CI/CD', desc: 'Continuous integration and deployment setup' }
      ]
    },
    {
      title: 'Contributing',
      icon: <GitBranch className="text-green-400" size={28} />,
      items: [
        { title: 'Pull Requests', desc: 'How to submit a pull request' },
        { title: 'Code Review', desc: 'Our code review process and guidelines' },
        { title: 'Issue Reporting', desc: 'How to report bugs and suggest features' }
      ]
    },
    {
      title: 'API Reference',
      icon: <FileText className="text-orange-400" size={28} />,
      items: [
        { title: 'Components', desc: 'Documentation for reusable components' },
        { title: 'Hooks', desc: 'Custom hooks and their usage' },
        { title: 'Utilities', desc: 'Helper functions and utilities' }
      ]
    }
  ]

  const quickLinks = [
    { title: 'Installation Guide', href: '#' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Examples', href: '/showcase' },
    { title: 'Changelog', href: '#' },
    { title: 'Contributing', href: '/contribute' },
    { title: 'Community', href: '#' }
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
              Documentation
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Comprehensive guides and references for CodeSprint
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <span className="text-foreground/80 font-semibold">{link.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Documentation Sections</h2>
          <div className="space-y-6">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {section.icon}
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {section.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      viewport={{ once: true }}
                      className="glass-effect rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-foreground/60 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribute to Docs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
        >
          <BookOpen className="mx-auto text-purple-400 mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Contribute to Documentation</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Help us improve our documentation by submitting corrections, adding examples, or writing new guides
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Edit Documentation
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
