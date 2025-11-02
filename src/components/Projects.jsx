import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime 3D Showcase',
    desc: 'Interactive product explorer with Spline and WebGL effects.',
    tags: ['Spline', 'WebGL', 'UX'],
  },
  {
    title: 'SaaS Dashboard',
    desc: 'High-performance analytics dashboard with delightful motion.',
    tags: ['React', 'Animation', 'Tailwind'],
  },
  {
    title: 'Creative Landing',
    desc: 'Playful brand story with scroll-driven animations.',
    tags: ['Motion', 'Story', 'SEO'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Work</h2>
          <p className="mt-3 text-white/70">A selection of projects that blend design, engineering, and motion.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/10" />
              <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center text-sm text-cyan-300 group-hover:translate-x-1 transition-transform">View case study →</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
