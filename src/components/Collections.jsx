import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Utensils, Baby, Home, Leaf, Book, ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Love Lamps',
    cause: 'Women Welfare',
    Icon: Heart,
    image:
      'https://images.unsplash.com/photo-1545153996-90c93c701e12?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
  {
    title: 'Faith Lamps',
    cause: 'Feeding the Poor',
    Icon: Utensils,
    image:
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
  {
    title: 'Cartoon Lamps',
    cause: 'Child Welfare',
    Icon: Baby,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
  {
    title: 'Decor Lamps',
    cause: 'Housing for Poor',
    Icon: Home,
    image:
      'https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
  {
    title: 'Eco Lamps',
    cause: 'Forest Protection',
    Icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
  {
    title: 'Basic Lighting',
    cause: 'Education',
    Icon: Book,
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop',
    price: '₹999 – ₹4,999',
  },
];

const Collections = () => {
  return (
    <section id="shop" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Product Collections</h2>
        <p className="mt-3 text-amber-100/80">
          Choose the light that speaks to your heart. Every purchase supports a cause.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur-md">
                <c.Icon className="h-4 w-4 text-amber-300" />
                {c.cause}
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-amber-100/80">{c.price}</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-2 text-xs font-semibold text-black shadow-[0_0_20px_rgba(251,191,36,0.35)] transition hover:bg-amber-300"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Collections;
