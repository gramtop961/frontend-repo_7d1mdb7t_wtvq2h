import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-24 flex min-h-screen items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Building immersive, modern experiences
          </motion.h1>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-4 text-white/80 text-lg md:text-xl"
          >
            I craft interactive products with 3D, motion, and a strong eye for detail. Let’s create something memorable together.
          </motion.p>
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              See Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
