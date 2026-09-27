import React from 'react';
import { motion } from 'framer-motion';

const bars = [42, 68, 55, 82, 74, 91, 63];
const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const Community: React.FC = () => {
  return (
    <section id="communaute" className="relative py-20 sm:py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FFC0CB] text-xs uppercase tracking-[0.25em] mb-3">
              Communauté
            </p>
            <h2
              className="text-3xl sm:text-5xl text-white leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Une tribu
              <br />
              <span className="italic text-[#E60023]">qui pétrit ensemble</span>
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
              Rejoignez des milliers de passionnés qui partagent recettes,
              scores et levains. Notifications en direct sur chaque interaction.
            </p>
            <div className="mt-8 flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
                'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
              ].map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt="Membre communauté"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#0d0d0d]"
                />
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E60023] border-2 border-[#0d0d0d] flex items-center justify-center text-white text-xs font-bold">
                +48K
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-5 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">
                  Engagement hebdo
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white mt-1"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  124,8K <span className="text-[#4CAF50] text-base">↑ 18%</span>
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] bg-[#E60023]/20 text-[#E60023]">
                  Instagram
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] bg-[#FF6F00]/20 text-[#FF6F00]">
                  TikTok
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-2 sm:gap-3 h-40 sm:h-48">
              {bars.map((h, i) => (
                <div key={days[i]} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-t-lg origin-bottom"
                    style={{
                      background:
                        i === 5
                          ? 'linear-gradient(180deg, #E60023, #FF6F00)'
                          : 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08))',
                    }}
                  />
                  <span className="text-[10px] text-white/40">{days[i]}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Posts programmés', value: '36' },
                { label: 'Taux de conversion', value: '4,8%' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-black/50 border border-white/10 p-4"
                >
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p
                    className="text-xl text-white mt-1"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80"
            alt="Pain artisanal"
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#E60023]/40" />
          <div className="absolute inset-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-10">
            <div>
              <h3
                className="text-2xl sm:text-4xl text-white"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Prêt à faire lever
                <br />
                votre communauté ?
              </h3>
              <p className="mt-2 text-white/60 text-sm sm:text-base max-w-md">
                Rejoignez Univers Pain et transformez chaque miche en contenu viral.
              </p>
            </div>
            <motion.a
              href="#boutique"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#FFC0CB] transition-colors"
            >
              Commencer maintenant
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
