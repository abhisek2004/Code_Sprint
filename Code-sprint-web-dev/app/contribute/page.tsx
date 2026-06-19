'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, XCircle, Code, GitBranch, Share2, Upload, Zap } from 'lucide-react'

export default function ContributePage() {
  const steps = [
    {
      num: '1',
      title: 'Fork Repository',
      desc: 'Click the fork button on GitHub to create your own copy of the repository',
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      num: '2',
      title: 'Clone Repository',
      desc: 'Clone the repository to your local machine using git clone command',
      icon: <Code className="w-6 h-6" />,
    },
    {
      num: '3',
      title: 'Create Your Project',
      desc: 'Build your project following the guidelines in the appropriate folder structure',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      num: '4',
      title: 'Commit Changes',
      desc: 'Commit your changes with clear and descriptive commit messages',
      icon: <Upload className="w-6 h-6" />,
    },
    {
      num: '5',
      title: 'Push to GitHub',
      desc: 'Push your changes to your forked repository on GitHub',
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      num: '6',
      title: 'Open Pull Request',
      desc: 'Create a pull request to merge your project into the main repository',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ]

  const allowed = [
    'Working and tested code',
    'Proper README with instructions',
    'Clean folder structure',
    'Responsive design',
    'Well-commented code',
    'Original or properly attributed work',
  ]

  const notAllowed = [
    '.env files with credentials',
    'API keys and secrets',
    'Personal information',
    'node_modules directory',
    'Broken or incomplete projects',
    'Malicious or plagiarized code',
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
              Contribute
            </span>
          </h1>
          <p className="text-xl text-foreground/60">
            Join our community and share your amazing projects with the world
          </p>
        </motion.div>

        {/* How to Contribute */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">How to Contribute</h2>

          {/* Timeline */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 md:p-8"
              >
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
                      {step.num}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-400">{step.icon}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-foreground/60 text-lg">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20 border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Contribution Guidelines</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Allowed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={28} />
                What&apos;s Allowed
              </h3>
              <ul className="space-y-3">
                {allowed.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground/70 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* What's Not Allowed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <XCircle className="text-red-400" size={28} />
                What&apos;s Not Allowed
              </h3>
              <ul className="space-y-3">
                {notAllowed.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground/70 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
            {[
              {
                title: 'Code Quality',
                items: [
                  'Write clean, readable code',
                  'Follow naming conventions',
                  'Add comments for complex logic',
                  'Use meaningful variable names',
                ],
              },
              {
                title: 'Documentation',
                items: [
                  'Include a detailed README',
                  'Add setup instructions',
                  'Document dependencies',
                  'Provide usage examples',
                ],
              },
              {
                title: 'Project Structure',
                items: [
                  'Organize files logically',
                  'Separate concerns properly',
                  'Use consistent formatting',
                  'Include necessary files only',
                ],
              },
              {
                title: 'Testing & Quality',
                items: [
                  'Test your code thoroughly',
                  'Check for responsive design',
                  'Verify all links work',
                  'Test on different browsers',
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Contribute?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Start building amazing projects and make a difference in the developer community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              View Repository
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all glass-effect"
            >
              Read Full Guidelines
            </motion.button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
