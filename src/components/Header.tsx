import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/mockData';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#E60023] overflow-hidden">
            <motion.span
              className="absolute inset-0 bg-[#FF6F00]"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.35 }}
            />
            <span className="relative text-white font-bold text-sm tracking-tighter">UP</span>
          </span>
          <span
            className="text-white text-xl sm:text-2xl tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Univers <span className="text-[#E60023]">Pain</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#E60023] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <motion.a
            href="#boutique"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="ml-2 px-5 py-2.5 rounded-full bg-[#E60023] text-white text-sm font-semibold shadow-lg shadow-[#E60023]/30 hover:bg-[#FF6F00] transition-colors"
          >
            Commander
          </motion.a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-lg text-white/90 hover:text-[#E60023] transition-colors"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#boutique"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-[#E60023] text-white font-semibold"
              >
                Commander
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
