"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { business } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-14">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Trusted by 5000+ repair customers in Dehradun
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Fast & Reliable AC & Fridge Repair Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Premium doorstep repair for ACs, refrigerators, washing machines, microwaves, TVs and other electronics.
            We combine fast response, transparent pricing and expert workmanship to keep your home running smoothly.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
            >
              Book Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/70 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white dark:bg-white/10 dark:text-white"
            >
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="glass-card flex items-center gap-2 px-4 py-3">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Genuine repair guidance
            </div>
            <div className="glass-card flex items-center gap-2 px-4 py-3">
              <Clock3 className="h-4 w-4 text-cyan-300" />
              Same-day support available
            </div>
            <div className="glass-card flex items-center gap-2 px-4 py-3">
              <Mail className="h-4 w-4 text-cyan-300" />
              Leads sent to {business.leadInboxEmail}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
