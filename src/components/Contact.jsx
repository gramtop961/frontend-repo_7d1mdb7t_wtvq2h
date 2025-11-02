import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s work together</h2>
          <p className="mt-3 text-white/70 max-w-prose">
            I’m available for freelance work, collaborations, and full-time roles. Tell me about your idea and I’ll get back within 24–48 hours.
          </p>
          <div className="mt-6 text-sm text-white/60">
            Prefer email? hello@yourdomain.dev
          </div>
        </div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell me about your project..." />
            </div>
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>

      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mt-16 text-center text-white/50 text-sm"
      >
        © {new Date().getFullYear()} Flames — All rights reserved.
      </motion.div>
    </section>
  );
}
