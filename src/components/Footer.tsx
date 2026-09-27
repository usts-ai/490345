import React from 'react';
import { motion } from 'framer-motion';

const footerCols = [
  {
    title: 'Boutique',
    links: ['Sacs à pain', 'Kits levain', 'Farines', 'Coffrets cadeaux'],
  },
  {
    title: 'Plateforme',
    links: ['Studio créatif', 'Programmation', 'Analytics', 'Gifting'],
  },
  {
    title: 'Légal',
    links: ['Mentions légales', 'Confidentialité', 'CGV', 'Cookies'],
  },
];

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'YouTube', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[#E60023]/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-14">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E60023] text-white text-sm font-bold">
                UP
              </span>
              <span
                className="text-white text-xl"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Univers <span className="text-[#E60023]">Pain</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              La plateforme e-commerce &amp; content manager dédiée au pain fait
              maison. Créez, partagez, inspirez.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -3, backgroundColor: '#E60023' }}
                  className="px-4 py-2 rounded-full border border-white/15 text-xs text-white/70 hover:text-white hover:border-[#E60023] transition-colors"
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-white text-sm font-semibold mb-4 tracking-wide">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#top"
                      whileHover={{ x: 4, color: '#E60023' }}
                      className="text-sm text-white/45 hover:text-[#E60023] transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © 2026 Univers Pain — CM &amp; Content Manager. Tous droits réservés.
          </p>
          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="text-xs text-[#FF6F00] font-medium"
          >
            Retour en haut ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
