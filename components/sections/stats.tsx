"use client";

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/site';

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(value * progress));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    const frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString('en-US')}</span>;
}

export function StatsSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="glass-card p-7 text-center"
        >
          <div className="font-display text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
            <AnimatedCounter value={stat.value} />
            <span>{stat.suffix}</span>
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.26em] text-cyan-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
