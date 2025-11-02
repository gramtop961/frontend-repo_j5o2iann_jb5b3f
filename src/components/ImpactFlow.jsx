import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Candle, HandHeart, BellRing } from 'lucide-react';

const steps = [
  {
    title: 'Choose a Lamp',
    desc: 'Explore meaningful designs crafted with care.',
    Icon: Candle,
  },
  {
    title: 'Select Your Cause',
    desc: 'Pick what you wish to support from listed NGOs.',
    Icon: HandHeart,
  },
  {
    title: 'NGO Donation',
    desc: 'A portion of your purchase goes directly to impact.',
    Icon: CheckCircle2,
  },
  {
    title: 'Get Impact Update',
    desc: 'Receive a story or update about the change you enabled.',
    Icon: BellRing,
  },
];

const Counter = ({ label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
    <div className="text-4xl font-semibold text-amber-300">{value.toLocaleString()}</div>
    <div className="mt-1 text-sm text-amber-100/80">{label}</div>
  </div>
);

const ImpactFlow = () => {
  const [counts, setCounts] = React.useState({ lives: 12480, donations: 3560, lamps: 9180 });

  React.useEffect(() => {
    const id = setInterval(() => {
      setCounts((c) => ({
        lives: c.lives + Math.floor(Math.random() * 3),
        donations: c.donations + (Math.random() > 0.7 ? 1 : 0),
        lamps: c.lamps + Math.floor(Math.random() * 2),
      }));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Purchase with Purpose</h2>
        <p className="mt-3 text-amber-100/80">
          A simple flow that turns shopping into meaningful impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -inset-16 bg-gradient-to-br from-amber-300/30 to-yellow-500/20 opacity-0 blur-3xl transition-opacity duration-500 hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <s.Icon className="h-6 w-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-amber-100/80">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Counter label="Lives Touched" value={counts.lives} />
        <Counter label="Donations Made" value={counts.donations} />
        <Counter label="Lamps Lit" value={counts.lamps} />
      </div>
    </section>
  );
};

export default ImpactFlow;
