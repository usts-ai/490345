import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../data/mockData';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-black"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1800&q=80"
          alt="Pain artisanal doré"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-[#E60023]/20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FFC0CB]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
          E-commerce &amp; Content Manager
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] max-w-4xl"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Le pain maison,
          <br />
          <span className="italic text-[#E60023]">élevé au rang</span>
          <br />
          d&apos;expérience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Sacs à pain bio, kits levain et studio de création intégré.
          Créez, publiez, influencez — le goût du vrai, amplifié.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <motion.a
            href="#boutique"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(230,0,35,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E60023] text-white font-semibold text-sm sm:text-base"
          >
            Découvrir la boutique
          </motion.a>
          <motion.a
            href="#studio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur hover:bg-white/10 transition-colors"
          >
            Explorer le studio
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {s.value}
                <span className="text-[#FF6F00]">{s.suffix}</span>
              </p>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-white/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#E60023]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
