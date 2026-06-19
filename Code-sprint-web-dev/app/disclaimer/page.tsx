'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function DisclaimerPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Disclaimer
            </span>
          </h1>

          <div className="space-y-8">
            {[
              {
                title: 'Educational Purpose',
                content: 'This website and CodeSprint-WebDev-Challenge platform have been developed as a personal learning project. It is a fan-made, non-official initiative created purely for educational purposes to demonstrate full-stack web development skills.',
              },
              {
                title: 'Not Official',
                content: 'This platform is not affiliated with, endorsed by, or officially connected to any company, organization, or institution. It is an independent project created as a portfolio piece and learning exercise.',
              },
              {
                title: 'Content Usage',
                content: 'Any data, media, or design inspiration used in this project is for demonstration and learning purposes only. All third-party content belongs to their respective owners. No commercial use is intended.',
              },
              {
                title: 'No Warranties',
                content: 'This project is provided "as is" without any warranties. While efforts have been made to ensure the platform functions correctly, the creator assumes no responsibility for any issues or damages arising from the use of this website.',
              },
              {
                title: 'Contributions & User-Generated Content',
                content: 'Users contributing projects to this platform agree that their contributions are original or properly attributed. The platform is not responsible for any copyright infringement or plagiarism in user submissions.',
              },
              {
                title: 'External Links',
                content: 'This platform may contain links to external websites. The creator is not responsible for the content, accuracy, or practices of external sites. Users access external links at their own risk.',
              },
              {
                title: 'Limitation of Liability',
                content: 'In no event shall the creator be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this platform.',
              },
              {
                title: 'Privacy',
                content: 'Any information collected through this platform is used solely for the purposes of the CodeSprint-WebDev-Challenge program and will not be shared with third parties without explicit consent.',
              },
              {
                title: 'Modification of Disclaimer',
                content: 'This disclaimer may be modified at any time without notice. Continued use of the platform following modifications constitutes acceptance of the updated disclaimer.',
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-400">{section.title}</h2>
                <p className="text-foreground/70 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 mt-12"
            >
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                CodeSprint-WebDev-Challenge is a personal learning project created to demonstrate web development skills and provide a platform for developers to learn and contribute. By using this platform, you acknowledge that you understand and accept this disclaimer.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                For questions or concerns, please reach out through the contact information available on the About page.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-sm text-foreground/50 mt-8"
            >
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
