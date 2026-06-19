'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GitBranch, Mail, Star } from 'lucide-react'

interface Mentor {
  name: string
  role: string
  bio: string
  expertise: string[]
  github?: string
  linkedin?: string
  featured?: boolean
}

const mentors: Mentor[] = [
  {
    name: 'Meet Arora',
    role: 'Full Stack Developer & Community Lead',
    bio: 'Expert in MERN stack with 5+ years of experience. Passionate about mentoring junior developers and open-source contribution.',
    expertise: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Web3'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    featured: true,
  },
  {
    name: 'Mudit Khater',
    role: 'Frontend Architect & Designer',
    bio: 'Specializes in modern UI/UX and frontend performance. Known for teaching clean code practices and component design patterns.',
    expertise: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Web Performance'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    featured: true,
  },
  {
    name: 'Priya Sharma',
    role: 'DevOps & Backend Specialist',
    bio: 'Expert in cloud deployment, Docker, and backend optimization. Helps developers scale their applications efficiently.',
    expertise: ['Node.js', 'Docker', 'AWS', 'Database Optimization', 'CI/CD'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Alex Kumar',
    role: 'JavaScript Evangelist',
    bio: 'Deep expertise in JavaScript fundamentals and advanced patterns. Passionate about teaching programming concepts.',
    expertise: ['JavaScript', 'ES6+', 'Async Programming', 'Testing', 'Algorithms'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Emma Chen',
    role: 'Full Stack Lead',
    bio: 'Experienced in building production-ready applications. Mentor for system design and best practices.',
    expertise: ['Full Stack', 'System Design', 'Testing', 'Security', 'Code Review'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'James Wilson',
    role: 'UI/UX & Frontend',
    bio: 'Creative frontend developer focused on building accessible and beautiful user interfaces.',
    expertise: ['CSS', 'Accessibility', 'Animation', 'Responsive Design', 'Design Systems'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
]

export default function MentorsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Our Mentors
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Learn from experienced developers who are passionate about sharing their knowledge
          </p>
        </motion.div>

        {/* Featured Mentors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Mentors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mentors
              .filter((m) => m.featured)
              .map((mentor, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-effect rounded-3xl p-8 overflow-hidden relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full -mr-20 -mt-20 blur-3xl opacity-20"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                          {mentor.name}
                        </h3>
                        <p className="text-purple-400 font-semibold mb-2">{mentor.role}</p>
                      </div>
                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={20} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-6 line-clamp-3">{mentor.bio}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground/60 mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {mentor.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={mentor.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full glass-secondary flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <GitBranch size={20} />
                        </motion.a>
                      )}
                      {mentor.linkedin && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full glass-secondary flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Mail size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Mentors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 group cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-purple-400 font-semibold text-sm mb-3">{mentor.role}</p>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{mentor.bio}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/80 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                    {mentor.expertise.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/80 border border-white/20">
                        +{mentor.expertise.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {mentor.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={mentor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-sm rounded-lg glass-effect hover:bg-white/20 transition-colors flex items-center justify-center gap-1"
                    >
                      <GitBranch size={16} /> GitHub
                    </motion.a>
                  )}
                  {mentor.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-sm rounded-lg glass-effect hover:bg-white/20 transition-colors flex items-center justify-center gap-1"
                    >
                      <Mail size={16} /> LinkedIn
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
