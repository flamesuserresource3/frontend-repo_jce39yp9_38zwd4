import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-200 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
            >
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Hand-printed in small batches
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black"
            >
              Bold Printed Tees for Everyday Expression
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-gray-700 max-w-xl"
            >
              Premium cotton tees featuring vibrant, long-lasting prints. Designed by independent artists, made for comfort, and built to stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium shadow hover:shadow-lg transition"
              >
                Shop Tees
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition"
              >
                Learn More
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" />
                4.9/5 Rated
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">Free</span> Shipping $75+
              </div>
              <div className="flex items-center gap-1">
                30-day Returns
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl overflow-hidden">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-2xl" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop"
                alt="Hero tee"
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
