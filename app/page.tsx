import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { SectionHeading } from '@/components/section-heading';
import { ServicesGrid } from '@/components/sections/services-grid';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { StatsSection } from '@/components/sections/stats';
import { TestimonialsCarousel } from '@/components/sections/testimonials';
import { FaqAccordion } from '@/components/sections/faq';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AC Repair Near Me in Dehradun | Refrigerator and Washing Machine Repair',
  description:
    'Looking for AC repair near me in Dehradun, refrigerator repair near me in Dehradun or washing machine repair near me? Book fast doorstep service from Doon Home Care Services.'
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-shell py-16 md:py-20">
        <div className="glass-card border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-sky-500/10 to-white/5 p-8 md:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Local SEO Coverage</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
              AC repair near me, refrigerator repair near me and washing machine repair near me in Dehradun
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Doon Home Care Services helps customers searching for AC repair near me, refrigerator repair near me
              Dehradun and washing machine repair near me with quick doorstep visits, transparent estimates and
              professional repair support. We also handle microwave, TV and other electronics repair across Dehradun.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured Services"
          title="Repair coverage for the appliances customers search for locally"
          description="We help with AC repair near me in Dehradun, refrigerator repair near me, washing machine repair near me and more with doorstep convenience and clear communication."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for speed, clarity and long-term reliability"
          description="From the first call to the final handover, we focus on clean workmanship, honest pricing and fast response times."
        />
        <div className="mt-10">
          <WhyChooseUs />
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Statistics"
          title="A repair team that keeps homes running"
          description="Our numbers reflect the trust customers place in us for dependable appliance service."
          align="center"
        />
        <div className="mt-10">
          <StatsSection />
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real feedback from local customers"
          description="Clients choose Doon Home Care Services for the combination of speed, transparency and a premium service experience."
        />
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions customers ask before booking"
          description="A quick look at how our repair process works, what we cover and how we handle service estimates."
          align="center"
        />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
