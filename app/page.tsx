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
  title: 'Home',
  description: siteConfig.description
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured Services"
          title="Repair coverage for the appliances customers rely on every day"
          description="Our featured services blend fast diagnostics, doorstep convenience and premium communication so you can book with confidence."
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
