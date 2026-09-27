import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/mockData';

const Products: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="boutique" className="relative py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#E60023]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-[#FF6F00]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#E60023] text-xs uppercase tracking-[0.25em] mb-3"
            >
              La boutique
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Outils &amp; kits
              <br />
              <span className="italic text-white/50">pour le vrai pain</span>
            </motion.h2>
          </div>
          <motion.a
            href="#boutique"
            whileHover={{ x: 4 }}
            className="text-sm text-[#FF6F00] font-medium self-start sm:self-auto"
          >
            Voir tout le catalogue →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#E60023]/50 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  animate={{ scale: hovered === p.id ? 1.08 : 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#E60023] text-white">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="text-lg sm:text-xl text-white"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {p.name}
                  </h3>
                  <span className="text-[#FF6F00] font-semibold whitespace-nowrap">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 w-full py-3 rounded-full bg-white text-black text-sm font-semibold group-hover:bg-[#E60023] group-hover:text-white transition-colors duration-400"
                >
                  Ajouter au panier
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
