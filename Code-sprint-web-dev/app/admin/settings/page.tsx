'use client'

import { motion } from 'framer-motion'
import { Save, Key, Bell, Shield, Palette } from 'lucide-react'
import { useState } from 'react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'CodeSprint-WebDev-Challenge',
    description: 'A premium open-source project showcase platform',
    maintenanceMode: false,
    emailNotifications: true,
    projectApprovalRequired: true,
    maxProjectsPerDay: 10,
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-foreground/60">Manage platform configuration and preferences</p>
      </motion.div>

      {/* General Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Palette className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold">General Settings</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Site Name</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Site name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Site Description</label>
            <textarea
              value={settings.description}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              placeholder="Site description"
            />
          </div>

          <div className="flex items-center justify-between p-4 glass-secondary rounded-lg">
            <div>
              <h3 className="font-semibold">Maintenance Mode</h3>
              <p className="text-sm text-foreground/60">Temporarily disable platform access</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-blue-400" size={24} />
          <h2 className="text-2xl font-bold">Security Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 glass-secondary rounded-lg">
            <div>
              <h3 className="font-semibold">Project Approval Required</h3>
              <p className="text-sm text-foreground/60">New projects must be approved before publishing</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.projectApprovalRequired}
                onChange={(e) => setSettings({ ...settings, projectApprovalRequired: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Max Projects Per Day</label>
            <input
              type="number"
              value={settings.maxProjectsPerDay}
              onChange={(e) => setSettings({ ...settings, maxProjectsPerDay: Number(e.target.value) })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Max projects"
            />
          </div>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-yellow-400" size={24} />
          <h2 className="text-2xl font-bold">Notifications</h2>
        </div>

        <div className="flex items-center justify-between p-4 glass-secondary rounded-lg">
          <div>
            <h3 className="font-semibold">Email Notifications</h3>
            <p className="text-sm text-foreground/60">Receive email updates about platform activity</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
            </label>
        </div>
      </motion.div>

      {/* API Keys */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Key className="text-green-400" size={24} />
          <h2 className="text-2xl font-bold">API Keys</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 glass-secondary rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Public API Key</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30 transition-colors"
              >
                Copy
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 font-mono">sk_live_abc123def456ghi789</p>
          </div>

          <div className="p-4 glass-secondary rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Secret API Key</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
              >
                Regenerate
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 font-mono">•••••••••••••••••••••••••</p>
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-end gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all"
        >
          <Save size={20} />
          {saved ? 'Saved!' : 'Save Changes'}
        </motion.button>
      </motion.div>
    </div>
  )
}
