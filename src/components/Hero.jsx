import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx;
    async function animate() {
      try {
        const { gsap } = await import('gsap');
        ctx = gsap.context(() => {
          gsap.fromTo(
            headlineRef.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
          gsap.fromTo(
            sublineRef.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: 'power3.out' }
          );
          gsap.fromTo(
            ctaRef.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
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
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-24 flex min-h-screen items-center">
        <div className="max-w-2xl">
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Building immersive, modern experiences
          </h1>
          <p ref={sublineRef} className="mt-4 text-white/80 text-lg md:text-xl">
            I craft interactive products with 3D, motion, and a strong eye for detail. Let’s create something memorable together.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              See Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
