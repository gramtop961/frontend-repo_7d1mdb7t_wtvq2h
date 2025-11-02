import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Realtime 3D Showcase',
    desc: 'Interactive product explorer with Spline and WebGL effects.',
    tags: ['Spline', 'WebGL', 'UX'],
  },
  {
    title: 'SaaS Dashboard',
    desc: 'High-performance analytics dashboard with delightful motion.',
    tags: ['React', 'GSAP', 'Tailwind'],
  },
  {
    title: 'Creative Landing',
    desc: 'Playful brand story with scroll-driven animations.',
    tags: ['GSAP', 'ScrollTrigger', 'Story'],
  },
];

export default function Projects() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    async function animate() {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%'
              }
            }
          );

          cardsRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.fromTo(
              el,
              { y: 32, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                delay: i * 0.08,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%'
                }
              }
            );
          });
        });
      } catch (e) {
        // GSAP not available; fail silently
      }
    }
    animate();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Work</h2>
          <p className="mt-3 text-white/70">A selection of projects that blend design, engineering, and motion.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              ref={(el) => (cardsRef.current[i] = el)}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
