'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, XCircle, AlertCircle, FileText, Code, GitBranch, Users, ShieldCheck } from 'lucide-react'

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: 'Code Style',
      icon: <Code className="text-purple-400" size={32} />,
      items: [
        { text: 'Use consistent indentation (2 spaces)', allowed: true },
        { text: 'Follow naming conventions (camelCase for variables, PascalCase for components)', allowed: true },
        { text: 'Write meaningful comments for complex logic', allowed: true },
        { text: 'Keep functions small and focused', allowed: true },
        { text: 'Avoid code duplication', allowed: true }
      ]
    },
    {
      title: 'Git Workflow',
      icon: <GitBranch className="text-pink-400" size={32} />,
      items: [
        { text: 'Create descriptive branch names', allowed: true },
        { text: 'Write clear commit messages', allowed: true },
        { text: 'Make small, focused commits', allowed: true },
        { text: 'Sync with main branch regularly', allowed: true },
        { text: 'Force push to main branch', allowed: false }
      ]
    },
    {
      title: 'Documentation',
      icon: <FileText className="text-yellow-400" size={32} />,
      items: [
        { text: 'Include a detailed README.md', allowed: true },
        { text: 'Document dependencies and setup steps', allowed: true },
        { text: 'Provide usage examples', allowed: true },
        { text: 'Update documentation when code changes', allowed: true },
        { text: 'Skip documentation for small projects', allowed: false }
      ]
    },
    {
      title: 'Testing',
      icon: <ShieldCheck className="text-blue-400" size={32} />,
      items: [
        { text: 'Test your code thoroughly before submission', allowed: true },
        { text: 'Check for responsive design', allowed: true },
        { text: 'Verify all links and functionality work', allowed: true },
        { text: 'Test on multiple browsers', allowed: true },
        { text: 'Submit untested code', allowed: false }
      ]
    }
  ]

  const bestPractices = [
    {
      title: 'Accessibility',
      desc: 'Ensure your projects are accessible to all users',
      items: [
        'Use semantic HTML elements',
        'Add proper alt text to images',
        'Ensure sufficient color contrast',
        'Make all functionality keyboard accessible'
      ]
    },
    {
      title: 'Performance',
      desc: 'Optimize your projects for speed and efficiency',
      items: [
        'Optimize images and assets',
        'Minify and bundle your code',
        'Lazy load components when possible',
        'Reduce unnecessary re-renders'
      ]
    },
    {
      title: 'Security',
      desc: 'Follow security best practices',
      items: [
        'Never commit secrets or API keys',
        'Sanitize user input',
        'Use HTTPS in production',
        'Keep dependencies updated'
      ]
    },
    {
      title: 'Collaboration',
      desc: 'Work effectively with others',
      items: [
        'Be respectful in code reviews',
        'Give constructive feedback',
        'Document decisions clearly',
        'Celebrate contributions'
      ]
    }
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
              Guidelines
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Best practices and guidelines for contributing to CodeSprint
          </p>
        </motion.div>

        {/* Guidelines Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Contribution Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {guidelines.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {section.icon}
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      {item.allowed ? (
                        <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={20} />
                      ) : (
                        <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                      )}
                      <span className={`text-lg ${item.allowed ? 'text-foreground/70' : 'text-foreground/50'}`}>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20 border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((practice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
                <p className="text-foreground/60 mb-4">{practice.desc}</p>
                <ul className="space-y-2">
                  {practice.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="glass-effect rounded-2xl p-8 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-4">Important Notes</h3>
                <ul className="space-y-3">
                  <li className="text-foreground/70 text-lg flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>All contributions are subject to review</span>
                  </li>
                  <li className="text-foreground/70 text-lg flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Be respectful and constructive in all interactions</span>
                  </li>
                  <li className="text-foreground/70 text-lg flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Plagiarism will not be tolerated</span>
                  </li>
                  <li className="text-foreground/70 text-lg flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Have fun and learn something new!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
        >
          <Users className="mx-auto text-purple-400 mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Community Guidelines</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Our community thrives on respect, collaboration, and inclusivity. We welcome everyone to contribute and learn together.
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
