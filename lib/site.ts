export const siteConfig = {
  name: 'Doon Home Care Services',
  description:
    'Fast, reliable AC, refrigerator, washing machine, microwave, TV and general electronics repair in Dehradun.',
  url: 'https://doonhomecareservices.example.com',
  ogImage:
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80'
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Booking' }
] as const;

export const business = {
  phoneDisplay: '+91 6398-429904',
  phoneHref: 'tel:+916398429904',
  email: 'aftabalama148@gmail.com',
  leadInboxEmail: 'aftabalama148@gmail.com',
  address: 'Lakhi Bagh, Dehradun 248001, Uttarakhand, India',
  whatsappHref: 'https://wa.me/916398429904?text=Hi%20Doon%20Home%20Care%20Services%2C%20I%20need%20a%20repair%20visit.',
  mapEmbedUrl: 'https://www.google.com/maps?q=Lakhi%20Bagh%20Dehradun%20248001&output=embed',
  googleShareUrl: 'https://share.google/9IEotp9JdF1c8mpGd'
};

export const services = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    description: 'Cooling issues, gas refilling, noise, water leakage and complete servicing for split and window ACs.',
    iconKey: 'aircon',
    image:
      'https://www.pavanelectricals.in/images/blog/a3.jpg'
  },
  {
    slug: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    description: 'Diagnosis for cooling failure, compressor faults, thermostat issues and door sealing problems.',
    iconKey: 'fridge',
    image:
      'https://images.pexels.com/photos/9551373/pexels-photo-9551373.jpeg?cs=srgb&dl=pexels-107014568-9551373.jpg&fm=jpg'
  },
  {
    slug: 'washing-machine-repair',
    title: 'Washing Machine Repair',
    description: 'Spin, drain, vibration, motor and PCB troubleshooting for top-load and front-load machines.',
    iconKey: 'washing',
    image:
      'https://www.pavanelectricals.in/images/blog/a5.jpg'
  },
  {
    slug: 'ceiling-fan-repair',
    title: 'Ceiling Fan Repair',
    description: 'Fan motor servicing, capacitor replacement, wobble fixes and speed control troubleshooting.',
    iconKey: 'fan',
    image:
      'https://www.pavanelectricals.in/images/blog/a1.jpg'
  },
  {
    slug: 'microwave-repair',
    title: 'Microwave Repair',
    description: 'Heating, turntable, control panel and safety switch repairs for solo and convection microwaves.',
    iconKey: 'microwave',
    image:
      'https://www.pavanelectricals.in/images/blog/a4.jpg'
  },
  {
    slug: 'tv-repair',
    title: 'TV Repair',
    description: 'Display, power supply, sound and motherboard service for LED, LCD and Smart TVs.',
    iconKey: 'tv',
    image:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'electronics-repair',
    title: 'General Electronics Repair',
    description: 'Expert diagnostics for small appliances, control boards, home devices and electronics.',
    iconKey: 'electronics',
    image:
      'https://www.pavanelectricals.in/images/blog/a6.jpg'
  }
] as const;

export const stats = [
  { value: 5000, suffix: '+', label: 'Repairs Completed' },
  { value: 24, suffix: '/7', label: 'Support' },
  { value: 10, suffix: '+', label: 'Years Experience' }
] as const;

export const benefits = [
  {
    title: 'Certified technicians',
    description: 'Skilled repair professionals with practical diagnostics and neat workmanship.',
    iconKey: 'shield'
  },
  {
    title: 'Transparent pricing',
    description: 'Clear estimates before work starts, with no hidden service surprises.',
    iconKey: 'badge'
  },
  {
    title: 'Fast turnaround',
    description: 'Same-day assistance for urgent breakdowns wherever possible across Dehradun.',
    iconKey: 'clock'
  },
  {
    title: 'Doorstep service',
    description: 'We arrive with the right tools and common spare parts for smoother repairs.',
    iconKey: 'map'
  }
] as const;

export const testimonials = [
  {
    name: 'Neha Sharma',
    role: 'Homeowner, Lakhi Bagh',
    quote:
      'Our split AC was repaired the same day and the technician explained everything clearly. The service felt premium and honest.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Rohit Verma',
    role: 'Working Professional',
    quote:
      'My refrigerator stopped cooling overnight. Doon Home Care arrived quickly, fixed the issue, and kept the process simple.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Ayesha Khan',
    role: 'Apartment Resident',
    quote:
      'Transparent pricing, clean work, and respectful communication. I booked again for my washing machine without hesitation.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'
  }
] as const;

export const faqs = [
  {
    question: 'How quickly can you reach my location?',
    answer:
      'Most service requests in and around Dehradun are handled the same day whenever a technician is available. Emergency slots are prioritized.'
  },
  {
    question: 'Do you provide repair estimates before starting?',
    answer:
      'Yes. We inspect the device, share the likely cause and expected cost, and proceed only after your approval.'
  },
  {
    question: 'Which appliances do you service?',
    answer:
      'We currently support ACs, refrigerators, washing machines, microwaves, TVs and selected general electronics.'
  },
  {
    question: 'Do you offer warranty on repairs?',
    answer:
      'Warranty depends on the service performed and the parts replaced. Your technician will confirm the coverage at the time of booking.'
  }
] as const;

export const timeline = [
  {
    year: '2014',
    title: 'Started with a focused repair desk',
    description: 'Doon Home Care Services began with a single workshop and a commitment to practical, honest diagnostics.'
  },
  {
    year: '2018',
    title: 'Expanded to doorstep support',
    description: 'We introduced on-site repair visits to make appliance recovery faster and easier for customers.'
  },
  {
    year: '2022',
    title: 'Built a trusted local reputation',
    description: 'Word-of-mouth referrals and repeat customers became the foundation of our growth across Dehradun.'
  },
  {
    year: 'Today',
    title: 'Premium multi-appliance service',
    description: 'We now support a broad range of home electronics with modern tools, quick response and clear communication.'
  }
] as const;

export const team = [
  {
    name: 'Aftab Alam',
    role: 'Lead Technician',
    specialty: 'AC and refrigeration systems',
    experience: '12+ years',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sandeep Rawat',
    role: 'Appliance Specialist',
    specialty: 'Washing machines and microwaves',
    experience: '9+ years',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Priya Negi',
    role: 'Support Engineer',
    specialty: 'TVs and home electronics',
    experience: '8+ years',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
  }
] as const;

export const certifications = [
  'Branded appliance servicing training',
  'Safety and electrical diagnostics',
  'Customer-first service process',
  'Preventive maintenance planning'
] as const;
