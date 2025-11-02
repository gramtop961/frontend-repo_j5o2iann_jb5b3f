import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Scale, Candle, Feather } from 'lucide-react';

const pillars = [
  {
    title: 'Love',
    desc: 'Love heals hearts — supports women welfare.',
    Icon: Heart,
    glow: 'from-pink-400/40 to-rose-500/30',
  },
  {
    title: 'Truth',
    desc: 'Truth sets us free — promotes ethical practices.',
    Icon: Scale,
    glow: 'from-amber-300/40 to-yellow-400/30',
  },
  {
    title: 'Faith',
    desc: 'Faith lights the way — feeding the poor.',
    Icon: Candle,
    glow: 'from-purple-400/40 to-violet-500/30',
  },
  {
    title: 'Forgiveness',
    desc: 'Forgiveness restores peace — hope and healing.',
    Icon: Feather,
    glow: 'from-teal-300/40 to-emerald-400/30',
  },
];

const Pillars = () => {
  return (
    <section id="causes" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Our Philosophy</h2>
        <p className="mt-3 text-amber-100/80">
          A collection infused with virtues that radiate warmth, meaning, and impact.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
          >
            <div className={`pointer-events-none absolute -inset-16 bg-gradient-to-br ${p.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <p.Icon className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-amber-100/80">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
