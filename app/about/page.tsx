import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { certifications, team, timeline, siteConfig } from '@/lib/site';
import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Doon Home Care Services, our mission, team, experience timeline and certifications.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="About Us"
          title={`Reliable repair expertise from ${siteConfig.name}`}
          description="We are a local service team focused on fast appliance diagnostics, honest communication and premium customer care."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Company Introduction</p>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Doon Home Care Services serves households and local businesses that need dependable AC, refrigerator,
              washing machine, microwave and TV repairs. Our work combines practical field experience with a
              customer-first approach so every visit feels organized and professional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Mission',
                  description: 'Deliver fast, transparent and high-quality repair service with minimal disruption.',
                  icon: ShieldCheck
                },
                {
                  title: 'Vision',
                  description: 'Become the most trusted appliance repair brand for families across Dehradun.',
                  icon: Lightbulb
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/30 p-5">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="glass-card relative overflow-hidden p-6">
            <div className="relative h-[420px] overflow-hidden rounded-[1.6rem]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                alt="Technician working on appliance controls"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Local expertise</p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">Technicians who show up prepared</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Technician Team"
          title="Skilled people behind every service visit"
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="glass-card overflow-hidden p-5">
              <div className="relative h-80 overflow-hidden rounded-[1.5rem]">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="pt-5">
                <p className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{member.name}</p>
                <p className="mt-1 text-sm font-medium text-cyan-300">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{member.specialty}</p>
                <p className="mt-4 inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {member.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Experience Timeline"
          title="How the service evolved"
          description="A quick look at the milestones that shaped our service process and customer experience."
        />
        <div className="mt-10 grid gap-5">
          {timeline.map((item) => (
            <article key={item.year} className="glass-card grid gap-4 p-6 md:grid-cols-[160px_1fr] md:items-start">
              <p className="font-display text-3xl font-semibold text-cyan-300">{item.year}</p>
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Certifications"
          title="Training and service standards that keep quality high"
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <article key={item} className="glass-card p-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
