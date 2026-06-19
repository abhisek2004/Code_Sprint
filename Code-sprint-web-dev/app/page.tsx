'use client'

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="relative min-h-screen">
        <Hero />

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Why Join CodeSprint?
                </span>
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Learn from real projects, build your portfolio, and become part of a vibrant developer community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Structured Learning',
                  description: '62 days of carefully curated projects progressing from beginner to advanced',
                },
                {
                  icon: '🌐',
                  title: 'Full Stack Skills',
                  description: 'Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and MERN stack',
                },
                {
                  icon: '👥',
                  title: 'Community Support',
                  description: 'Learn together with mentors, contributors, and fellow developers',
                },
                {
                  icon: '📚',
                  title: 'Portfolio Building',
                  description: 'Create real projects you can showcase to potential employers',
                },
                {
                  icon: '🚀',
                  title: 'Open Source',
                  description: 'Contribute to open source and grow your GitHub profile',
                },
                {
                  icon: '🏆',
                  title: 'Recognition',
                  description: 'Get featured, recognized, and rewarded for your contributions',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-effect p-6 rounded-2xl group cursor-pointer"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join hundreds of developers already learning and building with CodeSprint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://github.com/abhisek2004/62Days-CodeSprint-WebDev-Challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    🚀 Explore All Projects
                  </button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/about-ssoc">
                  <button className="px-8 py-4 border border-purple-500/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all glass-effect">
                    Learn About SSoC
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
