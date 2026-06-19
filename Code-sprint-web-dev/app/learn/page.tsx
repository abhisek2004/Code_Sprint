'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BookOpen, GraduationCap, Code, Zap, CheckCircle2, PlayCircle, Terminal } from 'lucide-react'

export default function LearnPage() {
    const topics = [
        {
            title: 'HTML & CSS',
            icon: <BookOpen className="text-purple-400" size={32} />,
            items: [
                'Semantic HTML5 elements',
                'Flexbox and Grid layouts',
                'Responsive design principles',
                'CSS animations and transitions',
                'Tailwind CSS utilities'
            ]
        },
        {
            title: 'JavaScript Fundamentals',
            icon: <Code className="text-pink-400" size={32} />,
            items: [
                'Variables, functions, and scope',
                'ES6+ features (arrow functions, destructuring)',
                'DOM manipulation',
                'Asynchronous JavaScript (Promises, async/await)',
                'Fetch API for data retrieval'
            ]
        },
        {
            title: 'React & Next.js',
            icon: <Zap className="text-yellow-400" size={32} />,
            items: [
                'React components and hooks',
                'State management with useState and useEffect',
                'Next.js routing and data fetching',
                'Server components vs client components',
                'Deployment and optimization'
            ]
        },
        {
            title: 'Full Stack Development',
            icon: <Terminal className="text-blue-400" size={32} />,
            items: [
                'RESTful API design',
                'MongoDB and databases',
                'Node.js and Express',
                'Authentication and authorization',
                'Deployment strategies'
            ]
        }
    ]

    const learningPath = [
        {
            phase: 'Phase 1',
            duration: 'Weeks 1-2',
            title: 'Foundations',
            description: 'Master HTML, CSS, and JavaScript basics'
        },
        {
            phase: 'Phase 2',
            duration: 'Weeks 3-4',
            title: 'React Essentials',
            description: 'Learn React components, hooks, and state management'
        },
        {
            phase: 'Phase 3',
            duration: 'Weeks 5-6',
            title: 'Next.js & Full Stack',
            description: 'Dive into Next.js and backend development'
        },
        {
            phase: 'Phase 4',
            duration: 'Weeks 7-8',
            title: 'Projects & Deployment',
            description: 'Build real projects and deploy them'
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
                            Learn
                        </span>
                    </h1>
                    <p className="text-xl text-foreground/60">
                        Master web development with structured learning paths and practical tutorials
                    </p>
                </motion.div>

                {/* Learning Topics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-20"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">Learning Topics</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {topics.map((topic, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-effect rounded-2xl p-8"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    {topic.icon}
                                    <h3 className="text-2xl font-bold">{topic.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {topic.items.map((item, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 + j * 0.05 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                                            <span className="text-foreground/70 text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Learning Path */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-20 border-t border-white/10 pt-20"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">Learning Path</h2>
                    <div className="space-y-6">
                        {learningPath.map((step, i) => (
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
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                            {i + 1}
                                        </div>
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <h3 className="text-2xl font-bold">{step.phase}</h3>
                                            <span className="text-purple-400 font-semibold">{step.duration}</span>
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                                        <p className="text-foreground/60 text-lg">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Resources CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
                >
                    <GraduationCap className="mx-auto text-purple-400 mb-6" size={64} />
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                    <p className="text-lg text-foreground/70 mb-8">
                        Explore our comprehensive resources and tutorials to kickstart your web development journey
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                        >
                            <PlayCircle size={20} /> Start Learning
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-purple-500/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all glass-effect flex items-center justify-center gap-2"
                        >
                            <BookOpen size={20} /> View Resources
                        </motion.button>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </>
    )
}
