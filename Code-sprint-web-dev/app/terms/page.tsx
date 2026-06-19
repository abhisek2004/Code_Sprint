'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsPage() {
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
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>

            <div className="space-y-8 text-foreground/70">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to CodeSprint-WebDev-Challenge. By using our platform, you agree to these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Use of the Platform</h2>
                <p className="leading-relaxed mb-4">
                  You agree to use CodeSprint only for lawful purposes and in accordance with these terms.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>You are responsible for your contributions and submissions</li>
                  <li>You will not submit malicious or plagiarized content</li>
                  <li>You will respect other community members</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  Projects and contributions submitted to CodeSprint remain the intellectual property of their respective creators. By submitting, you grant us permission to display and share your work on our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                <p className="leading-relaxed">
                  CodeSprint is provided "as is" without any warranties. We are not responsible for any damages resulting from your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall CodeSprint or its contributors be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
                <p className="leading-relaxed">
                  We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend access to our platform at our sole discretion, without notice, for conduct that we believe violates these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our community channels.
                </p>
              </section>

              <div className="text-sm text-foreground/50 pt-8 border-t border-white/10">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
