'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GitBranch, Mail, Globe, Code2, Users, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Admin Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full -mr-48 -mt-48 blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  About Admin
                </span>
              </h1>

              <div className="space-y-8 mt-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Meet Abhisek Panda</h2>
                  <p className="text-xl text-foreground/70 mb-4">
                    Frontend Enthusiast | MERN Stack Developer | Python Developer | Open Source Contributor
                  </p>
                  <p className="text-foreground/60 leading-relaxed mb-4">
                    Hi, I&apos;m Abhisek Panda — a passionate developer from Odisha, India. I completed my Bachelor of Technology (B.Tech) in Computer Science Engineering from GIET University. I&apos;m deeply interested in full-stack web development, open-source contribution, and building real-world applications that solve practical problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code2 className="text-purple-400" />
                    My Expertise
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Full Stack Web Development',
                      'MERN Stack (MongoDB, Express, React, Node.js)',
                      'Python Programming',
                      'RESTful API Development',
                      'Database Design & Optimization',
                      'UI/UX Development',
                      'Git & Version Control',
                      'Cloud Deployment',
                    ].map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 glass-effect rounded-lg"
                      >
                        <span className="text-purple-400">▸</span>
                        <span className="text-foreground/70">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Rocket className="text-purple-400" />
                    What Drives Me
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mb-4">
                    I&apos;m passionate about building innovative solutions, learning modern technologies, and contributing to the open-source community. I believe in continuous learning and sharing knowledge with other developers to help them grow in their careers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-purple-400" />
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://abhisekpanda072.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 glass-effect rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                    >
                      <Globe size={20} /> Portfolio
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://github.com/abhisek2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 glass-effect rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                    >
                      <GitBranch size={20} /> GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://linkedin.com/in/abhisekpanda2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 glass-effect rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                    >
                      <Mail size={20} /> LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Disclaimer & Acknowledgement
            </span>
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Important Note</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                This website has been developed as a personal learning project to sharpen my skills in full-stack web development — specifically using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform was created purely for educational and practice purposes, not as an official website for any organization.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                The CodeSprint-WebDev-Challenge is a fan-made and personal demo project designed to showcase my skills in web development, while also providing a platform for developers to learn, contribute, and build their portfolios through open-source contributions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Purpose of This Project</h3>
              <ul className="space-y-3">
                {[
                  'To explore real-world data scraping and API usage',
                  'To practice routing, dynamic UI rendering, and component design',
                  'To experiment with responsive and clean UI/UX design',
                  'To build a complete application from scratch as a learning challenge',
                  'To showcase full-stack development capabilities',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-purple-400 mt-1">▸</span>
                    <span className="text-foreground/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Content & Attribution</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Any data, media, or design inspiration used in this project is solely for demonstration and learning purposes. I do not claim any ownership over external assets, nor is the content used commercially. All third-party references and resources belong to their respective owners.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                This site is <strong>not affiliated with, endorsed by, or officially connected to any company or organization</strong>. It is a fan-made or personal demo and a portfolio piece meant to showcase my skills as a developer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">👨‍💻 For Developers, Learners & Recruiters</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                If you&apos;re interested in learning the MERN stack, working with real-time data & APIs, exploring frontend and backend architecture, or collaborating on open-source projects — I&apos;d love to connect!
              </p>
              <p className="text-lg font-semibold text-purple-400">
                ☕💡💻 This project = Code + Coffee + Curiosity
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
