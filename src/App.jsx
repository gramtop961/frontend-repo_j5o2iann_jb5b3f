import React from 'react';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Collections from './components/Collections';
import ImpactFlow from './components/ImpactFlow';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] font-['Inter',ui-sans-serif] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-amber-300 to-yellow-500 shadow-[0_0_30px_rgba(251,191,36,0.45)]">
              <Sparkles className="h-4 w-4 text-black" />
            </div>
            <span className="text-lg font-semibold tracking-wide">LIT LAMPS</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#shop" className="transition hover:text-amber-300">Shop</a>
            <a href="#causes" className="transition hover:text-amber-300">Causes</a>
            <a href="#stories" className="transition hover:text-amber-300">Stories</a>
            <a href="#contact" className="transition hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pillars />
        <Collections />
        <ImpactFlow />

        {/* Testimonials & Stories + Founder Message */}
        <section id="stories" className="relative mx-auto max-w-7xl px-6 pb-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Testimonials & Stories</h2>
            <p className="mt-3 text-amber-100/80">How our lamps light homes and hearts.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  'The Love Lamp became the warm center of our living room—and knowing it supported women in need made it priceless.',
                name: 'Aarohi S.',
              },
              {
                quote:
                  'Gifting a Faith Lamp to my parents felt profound. A meal served for every glow—what a beautiful gesture.',
                name: 'Rohit K.',
              },
              {
                quote:
                  'The ambient glow is healing. It reminds me nightly that small acts make a big difference.',
                name: 'Mira D.',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl"
              >
                <p className="text-amber-50/90">“{t.quote}”</p>
                <p className="mt-4 text-sm text-amber-200/80">— {t.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-200/10 via-yellow-300/5 to-amber-500/10 p-8 backdrop-blur-xl">
            <p className="text-balance text-lg text-white/90">
              “We’re not just selling lamps — we’re spreading the light of love and truth.”
            </p>
            <p className="mt-2 text-sm text-amber-200">— Ashtad Kohinoor, Founder</p>
          </div>
        </section>
      </main>

      {/* Footer with Newsletter */}
      <footer id="contact" className="relative border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-white">Join the LIT Circle</h3>
              <p className="mt-2 text-sm text-amber-100/80">
                Be the first to hear about new drops, causes, and stories of impact.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex max-w-md items-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
                <button
                  className="shrink-0 bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">NGO Partners</h4>
              <ul className="mt-3 space-y-2 text-sm text-amber-100/80">
                <li>Women Welfare Trust</li>
                <li>Food for All</li>
                <li>Green Forests Initiative</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Reach Us</h4>
              <ul className="mt-3 space-y-2 text-sm text-amber-100/80">
                <li>support@litlamps.com</li>
                <li>+91 98XX-XXX-XXX</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
            <p>© {new Date().getFullYear()} LIT LAMPS — The Light of Good Deeds</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-300">Privacy</a>
              <a href="#" className="hover:text-amber-300">Terms</a>
              <a href="#" className="hover:text-amber-300">Returns</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
