import { useEffect, useRef } from 'react';

export default function Contact() {
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
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
            }
          );
        });
      } catch (e) {
        // GSAP not available; fail silently
      }
    }
    animate();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-black text-white py-20">
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

        <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
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
        </form>
      </div>

      <div className="mt-16 text-center text-white/50 text-sm">© {new Date().getFullYear()} Flames — All rights reserved.</div>
    </section>
  );
}
