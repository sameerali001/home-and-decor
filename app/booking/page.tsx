import type { Metadata } from 'next';
import { BookingForm } from '@/components/forms/booking-form';
import { SectionHeading } from '@/components/section-heading';
import { business, siteConfig } from '@/lib/site';
import { ArrowRight, CalendarClock, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Request a repair visit from Doon Home Care Services using our modern booking form.',
};

export default function BookingPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Booking"
          title={`Request a service visit from ${siteConfig.name}`}
          description="Tell us what needs repair and choose a preferred visit time. We will review the request and respond quickly."
          align="center"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <BookingForm />

          <div className="space-y-5">
            <article className="glass-card border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-sky-500/10 to-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">Lead notifications</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Booking leads are captured and routed to <span className="font-semibold text-slate-950 dark:text-white">{business.leadInboxEmail}</span> so the team can respond quickly.
              </p>
            </article>

            <article className="glass-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">Service Request Flow</p>
              <div className="mt-5 space-y-4">
                {[
                  'Share your contact details and address',
                  'Tell us which device needs attention',
                  'Pick a preferred time for the visit',
                  'Receive confirmation and technician support'
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-semibold text-cyan-200">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">What happens next</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                  We review the request and confirm the next available slot.
                </p>
                <p className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                  The technician arrives with the right tools and explains the repair path first.
                </p>
                <p className="flex items-start gap-3">
                  <CalendarClock className="mt-0.5 h-5 w-5 text-cyan-300" />
                  You get service updates so the visit stays simple and organized.
                </p>
              </div>
            </article>

            <article className="glass-card border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-sky-500/10 to-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">Need urgent help?</p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3 font-semibold text-slate-950"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call {business.phoneDisplay}
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/70 px-5 py-3 font-semibold text-slate-950 dark:bg-white/10 dark:text-white"
                >
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
