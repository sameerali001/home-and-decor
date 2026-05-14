import { Facebook, Instagram, Mail, MapPin, PhoneCall, Youtube } from 'lucide-react';
import Link from 'next/link';
import { business, navigation, services, siteConfig } from '@/lib/site';

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube }
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/95 text-slate-200">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Fast, premium and dependable appliance repair for homes and small businesses in Dehradun. We keep your
              essential devices running with transparent pricing and expert care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
                  >
                    <Icon className="h-4 w-4 text-cyan-200" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-cyan-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {services.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link href="/services" className="transition hover:text-cyan-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          <a
            href={business.phoneHref}
            className="glass-card flex items-center gap-4 px-5 py-4 transition hover:-translate-y-1"
          >
            <PhoneCall className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <p className="font-medium text-white">{business.phoneDisplay}</p>
            </div>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="glass-card flex items-center gap-4 px-5 py-4 transition hover:-translate-y-1"
          >
            <Mail className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="font-medium text-white">{business.email}</p>
            </div>
          </a>
          <a
            href={business.mapEmbedUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex items-center gap-4 px-5 py-4 transition hover:-translate-y-1"
          >
            <MapPin className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-sm text-slate-400">Address</p>
              <p className="font-medium text-white">Lakhi Bagh, Dehradun</p>
            </div>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for fast booking, reliable service and smooth mobile browsing.</p>
        </div>
      </div>
    </footer>
  );
}
