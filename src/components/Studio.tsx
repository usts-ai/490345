import React from 'react';
import { motion } from 'framer-motion';
import { contents } from '../data/mockData';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="relative py-20 sm:py-28 bg-[#111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FF6F00] text-xs uppercase tracking-[0.25em] mb-3"
            >
              Studio de contenu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl text-white leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Capturez. Montez.
              <br />
              <span className="italic text-[#E60023]">Publiez.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed max-w-md"
            >
              Outils intégrés pour filmer vos démonstrations, monter en un clic
              et programmer sur TikTok &amp; Instagram — sans quitter Univers Pain.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['Capture HD', 'Montage rapide', 'Auto-publish', 'Analytics'].map(
                (t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm text-white/80 bg-white/5"
                  >
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[5/4] shadow-2xl shadow-[#E60023]/20">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80"
                alt="Création de contenu boulangerie"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-5 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E60023]">
                    <span className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-0.5" />
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold">Session live</p>
                    <p className="text-white/50 text-xs">Pétrissage · 02:14</p>
                  </div>
                </div>
                <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '62%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.5 }}
                    className="h-full bg-[#E60023] rounded-full"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -top-4 -right-2 sm:right-4 px-4 py-3 rounded-2xl bg-black/80 backdrop-blur border border-white/10 shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-wider text-white/40">Engagement</p>
              <p className="text-[#4CAF50] text-xl font-semibold" style={{ fontFamily: "'Fraunces', serif" }}>
                +34%
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {contents.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-[10px] text-[#FFC0CB] mb-1">{c.author}</p>
                <p
                  className="text-white text-sm sm:text-base leading-snug"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {c.title}
                </p>
                <p className="mt-1 text-[11px] text-white/50">{c.views} vues</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
