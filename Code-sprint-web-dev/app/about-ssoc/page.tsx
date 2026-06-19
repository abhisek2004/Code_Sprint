'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CheckCircle2, Zap, Users, Trophy, Calendar, Target } from 'lucide-react'

export default function SSoCPage() {
  const timelineItems = [
    { month: 'Month 1', title: 'Foundation', desc: 'HTML, CSS, and JavaScript basics' },
    { month: 'Month 2', title: 'Interactivity', desc: 'DOM manipulation and events' },
    { month: 'Month 3-4', title: 'React Era', desc: 'Components, hooks, and state management' },
    { month: 'Month 5-6', title: 'Backend', desc: 'Node.js, Express, and APIs' },
    { month: 'Month 7-8', title: 'Database', desc: 'MongoDB and data management' },
    { month: 'Month 9', title: 'Full Stack', desc: 'Complete MERN applications' },
  ]

  const benefits = [
    { icon: '🎓', title: 'Structured Learning', desc: 'Progress from beginner to advanced systematically' },
    { icon: '🤝', title: 'Community Support', desc: 'Learn with mentors and fellow developers' },
    { icon: '📚', title: 'Portfolio Building', desc: 'Create projects for your professional portfolio' },
    { icon: '🏆', title: 'Recognition', desc: 'Get featured and recognized for your contributions' },
    { icon: '🚀', title: 'Open Source', desc: 'Contribute to real open-source projects' },
    { icon: '💼', title: 'Career Growth', desc: 'Enhance your skills for job opportunities' },
  ]

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
      <main className="relative min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                SSoC&apos;26
              </span>
            </h1>
            <p className="text-2xl text-foreground/70 mb-8">
              Summer of Code - Master Web Development in 62 Days
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
                  Join Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold mb-6">What is SSoC&apos;26?</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  SSoC&apos;26 (Summer of Code 2026) is a structured 62-day learning challenge designed to help developers progress from beginner-level web development to advanced full-stack development. Participants build real projects, learn from mentors, and contribute to open-source software while developing skills in the latest web technologies.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-effect p-6 rounded-2xl"
                    >
                      <div className="text-4xl mb-3">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/60">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
                Learning Timeline
              </motion.h2>
              <div className="space-y-4">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="glass-effect p-6 rounded-xl border-l-4 border-gradient-to-b from-purple-500 to-pink-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Calendar className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.month}</h3>
                        <h4 className="text-purple-400 font-semibold mb-2">{item.title}</h4>
                        <p className="text-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Opportunities */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8">
                What You&apos;ll Learn
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: 'Frontend Fundamentals',
                    skills: ['HTML & CSS', 'JavaScript ES6+', 'React & Hooks', 'Responsive Design'],
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: 'Backend Development',
                    skills: ['Node.js & Express', 'RESTful APIs', 'Authentication', 'Deployment'],
                  },
                  {
                    icon: <Trophy className="w-8 h-8" />,
                    title: 'Database & Tools',
                    skills: ['MongoDB', 'Git & GitHub', 'Debugging', 'Testing'],
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: 'Full Stack Skills',
                    skills: ['MERN Stack', 'Project Structure', 'Performance', 'Best Practices'],
                  },
                ].map((category, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="glass-effect p-8 rounded-2xl"
                  >
                    <div className="text-purple-400 mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-400" size={20} />
                          <span className="text-foreground/70">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Skills?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join thousands of developers building amazing projects and advancing their careers
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
