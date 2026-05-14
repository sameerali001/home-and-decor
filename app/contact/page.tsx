import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { business, siteConfig } from '@/lib/site';
import { Mail, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Doon Home Care Services for booking, support, directions and quick service enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="Contact"
          title={`Talk to ${siteConfig.name}`}
          description="Use the form, call directly or open WhatsApp to request appliance repair support."
          align="center"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="glass-card border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-sky-500/10 to-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">Lead inbox</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                New enquiries and service leads are routed to <span className="font-semibold text-slate-950 dark:text-white">{business.leadInboxEmail}</span>.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={business.phoneHref} className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
                <PhoneCall className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{business.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${business.email}`} className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
                <Mail className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-semibold text-slate-950 dark:text-white">{business.email}</p>
                </div>
              </a>
            </div>

            <a href={business.mapEmbedUrl} target="_blank" rel="noreferrer" className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
              <MapPin className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Address</p>
                <p className="font-semibold text-slate-950 dark:text-white">{business.address}</p>
              </div>
            </a>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5"
            >
              <MessageCircleMore className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
                <p className="font-semibold text-slate-950 dark:text-white">Quick chat for service requests</p>
              </div>
            </a>

            <div className="glass-card overflow-hidden p-4">
              <iframe
                title="Google Maps placeholder"
                src={business.mapEmbedUrl}
                loading="lazy"
                className="h-[420px] w-full rounded-[1.4rem] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
