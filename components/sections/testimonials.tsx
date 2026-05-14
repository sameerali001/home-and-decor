"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '@/lib/site';

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <AnimatePresence mode="wait">
        <motion.article
          key={active.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200">“{active.quote}”</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
              <Image src={active.avatar} alt={active.name} fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">{active.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{active.role}</p>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="grid gap-4">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`glass-card flex items-center gap-4 p-4 text-left transition hover:-translate-y-0.5 ${
              activeIndex === index ? 'ring-2 ring-cyan-300/40' : ''
            }`}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10">
              <Image src={item.avatar} alt={item.name} fill sizes="56px" className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{item.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
