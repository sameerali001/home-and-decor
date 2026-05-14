"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { contactRequestSchema, type ContactRequest } from '@/lib/schemas';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactRequest>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = async (values: ContactRequest) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      toast.error('Unable to send email right now. Please try again.');
      return;
    }

    toast.success('Your message was sent successfully. We will get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-5 p-6 sm:p-8">
      <div>
        <label className="label-shell" htmlFor="contact-name">
          Name
        </label>
        <input id="contact-name" className="input-shell" {...register('name')} />
        {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-shell" htmlFor="contact-email">
            Email
          </label>
          <input id="contact-email" type="email" className="input-shell" {...register('email')} />
          {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email.message}</p> : null}
        </div>
        <div>
          <label className="label-shell" htmlFor="contact-phone">
            Phone
          </label>
          <input id="contact-phone" className="input-shell" {...register('phone')} />
          {errors.phone ? <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="label-shell" htmlFor="contact-message">
          Message
        </label>
        <textarea id="contact-message" rows={6} className="input-shell resize-none" {...register('message')} />
        {errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
