'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Plus, BarChart3, Settings, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { clsx } from 'clsx'

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  const adminLinks = [
    {
      href: '/admin',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/admin/projects',
      label: 'Projects',
      icon: Plus,
    },
    {
      href: '/admin/analytics',
      label: 'Analytics',
      icon: BarChart3,
    },
    {
      href: '/admin/settings',
      label: 'Settings',
      icon: Settings,
    },
  ]

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden p-2 rounded-lg glass-effect"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 w-72 h-screen bg-card border-r border-border z-20 flex flex-col overflow-y-auto md:static md:translate-x-0"
      >
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-sm text-foreground/60 mt-1">CodeSprint Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {adminLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.href)

            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer',
                    active
                      ? 'glass-secondary bg-purple-500/20 text-purple-400 border border-purple-400/50'
                      : 'hover:glass-effect text-foreground/70 hover:text-foreground'
                  )}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-purple-400"
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="block w-full text-center px-4 py-2 glass-effect rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
          >
            Back to Site
          </motion.a>
        </div>
      </motion.aside>
    </>
  )
}
