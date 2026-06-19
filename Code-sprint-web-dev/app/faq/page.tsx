'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react'

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: 'What is CodeSprint?',
            answer: 'CodeSprint is an open-source project showcase and contributor management platform designed to help developers learn web development through real projects and contribute to the community.'
        },
        {
            question: 'How do I get started?',
            answer: 'You can start by exploring our Learn page to understand the basics, then check out the Showcase to see existing projects, and finally contribute your own projects following our Contribute guidelines.'
        },
        {
            question: 'What technologies should I know?',
            answer: 'We recommend having a basic understanding of HTML, CSS, and JavaScript. Familiarity with React and Next.js is helpful but not required as you can learn along the way.'
        },
        {
            question: 'How do I contribute a project?',
            answer: 'Visit our Contribute page for detailed instructions. You\'ll need to fork the repository, create your project, commit your changes, and submit a pull request.'
        },
        {
            question: 'Can beginners contribute?',
            answer: 'Absolutely! CodeSprint is designed for learners of all levels. We have projects and resources suitable for beginners, intermediate, and advanced developers.'
        },
        {
            question: 'What are the project requirements?',
            answer: 'Projects should be well-documented with a README, follow our coding guidelines, be responsive, and include working, tested code. Check our Guidelines page for more details.'
        },
        {
            question: 'How long does it take for my PR to be reviewed?',
            answer: 'We try to review pull requests as quickly as possible, usually within a few days. Please be patient as our team works through submissions.'
        },
        {
            question: 'Where can I get help?',
            answer: 'You can reach out through our community channels, check the Documentation page, or ask questions in our discussion forums. We\'re here to help!'
        },
        {
            question: 'Can I contribute to documentation?',
            answer: 'Yes! We welcome contributions to documentation, tutorials, and other educational content. Check our Contribute page for more information.'
        },
        {
            question: 'Is CodeSprint affiliated with any organization?',
            answer: 'CodeSprint is an independent, community-driven project created for educational purposes. It is not affiliated with any official organization.'
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
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
                    className="max-w-5xl mx-auto text-center mb-16"
                >
                    <HelpCircle className="mx-auto text-purple-400 mb-6" size={64} />
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                            FAQ
                        </span>
                    </h1>
                    <p className="text-xl text-foreground/60">
                        Frequently asked questions about CodeSprint
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass-effect rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-all"
                                >
                                    <span className="text-xl font-semibold">{faq.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className="text-purple-400" size={24} />
                                    ) : (
                                        <ChevronDown className="text-purple-400" size={24} />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-foreground/70">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Still Have Questions */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 text-center border-t border-white/10"
                >
                    <MessageCircle className="mx-auto text-purple-400 mb-6" size={64} />
                    <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
                    <p className="text-lg text-foreground/70 mb-8">
                        We&apos;re here to help! Reach out to our community or team for any additional questions or clarifications.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </main>
            <Footer />
        </>
    )
}
