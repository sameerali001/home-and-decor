import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, BadgePercent, CircleGauge, Clock3 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { ServicesGrid } from '@/components/sections/services-grid';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our full appliance repair service lineup and emergency support availability.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Complete repair coverage for home appliances and electronics"
          description="Choose the repair service you need and book a technician in a few clicks."
        />

        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="glass-card overflow-hidden border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-sky-500/10 to-white/5 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Emergency Repair</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                Appliance breakdown? We prioritize urgent repair requests.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                If your AC, fridge or other essential device stops working suddenly, send us a booking request or call
                us directly for the fastest available slot.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <AlertTriangle className="h-6 w-6 text-amber-300" />
                <div>
                  <p className="font-semibold text-white">Urgent slots</p>
                  <p className="text-sm text-slate-400">Priority booking for breakdowns</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <CircleGauge className="h-6 w-6 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Fast turnaround</p>
                  <p className="text-sm text-slate-400">Efficient diagnosis and repair</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <Clock3 className="h-6 w-6 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Quick response</p>
                  <p className="text-sm text-slate-400">Same-day handling where possible</p>
                </div>
              </div>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Request Emergency Visit
                <BadgePercent className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
