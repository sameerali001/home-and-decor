"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Fan, Microwave, Refrigerator, ThermometerSnowflake, Tv2, WashingMachine } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/site';

type ServicesGridProps = {
  limit?: number;
};

const iconMap = {
  aircon: ThermometerSnowflake,
  fridge: Refrigerator,
  washing: WashingMachine,
  fan: Fan,
  microwave: Microwave,
  tv: Tv2,
  electronics: Cpu
} as const;

export function ServicesGrid({ limit }: ServicesGridProps) {
  const visibleServices = typeof limit === 'number' ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visibleServices.map((service, index) => {
        const Icon = iconMap[service.iconKey as keyof typeof iconMap];

        return (
          <motion.article
            key={service.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="glass-card group h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
          >
            {service.image ? (
              <div className="relative mb-5 h-44 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            ) : null}

            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 transition group-hover:bg-cyan-300/25">
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>

            <Link
              href="/booking"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
