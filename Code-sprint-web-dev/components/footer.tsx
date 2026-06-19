'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Projects', href: '/showcase' },
        { label: 'Mentors', href: '/mentors' },
        { label: 'SSoC\'26', href: '/about-ssoc' },
        { label: 'Contribute', href: '/contribute' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Guidelines', href: '/contribute' },
        { label: 'Resources', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Discord', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'About', href: '/about' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-foreground transition-colors text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm text-center md:text-left">
              <p>
                © {currentYear} CodeSprint-WebDev-Challenge. Built with passion by developers for developers.
              </p>
              <p className="mt-2">
                Created by{' '}
                <a
                  href="https://abhisekpanda072.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Abhisek Panda
                </a>
              </p>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/abhisek2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span>→</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/abhisekpanda2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span>in</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
