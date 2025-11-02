import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShoppingBag, HandHeart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      {/* Ambient aurora gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-300/10 to-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs tracking-wide text-amber-200 backdrop-blur-md ring-1 ring-white/20"
        >
          <HandHeart className="h-4 w-4" /> Purpose-driven gifting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Lighting the Path of Purpose-Driven Design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="max-w-xl text-balance text-base text-amber-100/90 sm:text-lg"
        >
          LIT LAMPS craft warm, futuristic décor that carries feeling and impact. Every lamp powers a social cause—each purchase becomes a good deed illuminated.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(251,191,36,0.45)] transition hover:bg-amber-300"
          >
            <ShoppingBag className="h-4 w-4" /> Shop Now
          </a>
          <a
            href="#causes"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:border-amber-300 hover:text-amber-200"
          >
            Choose Your Cause <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
