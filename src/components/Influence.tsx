import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { influencers } from '../data/mockData';

const statusColor: Record<string, string> = {
  'Envoi livré': '#FF6F00',
  'Contenu en cours': '#E60023',
  Publié: '#4CAF50',
};

const Influence: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="influence" className="relative py-20 sm:py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#E60023] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FF6F00] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4CAF50] text-xs uppercase tracking-[0.25em] mb-3"
          >
            Gifting &amp; Influence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Amplifiez votre marque
            <br />
            <span className="italic text-white/45">avec les créateurs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-white/55 text-sm sm:text-base"
          >
            Suivez les envois produits, les retours d&apos;expérience et
            l&apos;impact sur vos ventes — en un coup d&apos;œil.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-3">
            {influencers.map((inf, i) => (
              <motion.button
                key={inf.id}
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? 'bg-white/10 border-[#E60023]/60'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/25'
                }`}
              >
                <img
                  src={inf.avatar}
                  alt={inf.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/20"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{inf.name}</p>
                  <p className="text-white/45 text-xs sm:text-sm truncate">{inf.handle}</p>
                </div>
                <span
                  className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    color: statusColor[inf.status],
                    backgroundColor: `${statusColor[inf.status]}22`,
                  }}
                >
                  {inf.status}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative h-full min-h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row gap-6 h-full">
                  <img
                    src={influencers[active].avatar}
                    alt={influencers[active].name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      Campagne active
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl text-white"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {influencers[active].name}
                    </h3>
                    <p className="text-[#FF6F00] text-sm mt-1">
                      {influencers[active].handle} · {influencers[active].reach} abonnés
                    </p>
                    <p className="mt-4 text-white/60 text-sm leading-relaxed flex-1">
                      Kit levain + sac bio envoyé. Contenu programmé sur Instagram
                      Reels et TikTok. Suivi des interactions en temps réel.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        { l: 'Portée', v: influencers[active].reach },
                        { l: 'Interactions', v: '18,2K' },
                        { l: 'Ventes liées', v: '+127' },
                      ].map((m) => (
                        <div
                          key={m.l}
                          className="rounded-xl bg-black/40 border border-white/10 p-3 text-center"
                        >
                          <p
                            className="text-lg sm:text-xl text-white"
                            style={{ fontFamily: "'Fraunces', serif" }}
                          >
                            {m.v}
                          </p>
                          <p className="text-[10px] uppercase tracking-wider text-white/40 mt-1">
                            {m.l}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influence;
