"use client";

import { BadgeCheck, Clock3, MapPinned, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { benefits } from '@/lib/site';

const iconMap = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  clock: Clock3,
  map: MapPinned
} as const;

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {benefits.map((item, index) => {
        const Icon = iconMap[item.iconKey as keyof typeof iconMap];
        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="glass-card p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
