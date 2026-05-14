"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { bookingRequestSchema, type BookingRequest } from '@/lib/schemas';

const deviceTypes = ['AC', 'Refrigerator', 'Washing Machine', 'Microwave', 'TV', 'General Electronics'] as const;

export function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<BookingRequest>({
    resolver: zodResolver(bookingRequestSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      deviceType: 'AC',
      problemDescription: '',
      preferredVisitTime: ''
    }
  });

  const onSubmit = async (values: BookingRequest) => {
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      toast.error('Booking could not be submitted. Please try again.');
      return;
    }

    toast.success('Service request submitted. We will contact you shortly.');
    reset({
      name: '',
      phone: '',
      address: '',
      deviceType: 'AC',
      problemDescription: '',
      preferredVisitTime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-shell" htmlFor="booking-name">
            Name
          </label>
          <input id="booking-name" className="input-shell" {...register('name')} />
          {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className="label-shell" htmlFor="booking-phone">
            Phone
          </label>
          <input id="booking-phone" className="input-shell" {...register('phone')} />
          {errors.phone ? <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="label-shell" htmlFor="booking-address">
          Address
        </label>
        <textarea id="booking-address" rows={3} className="input-shell resize-none" {...register('address')} />
        {errors.address ? <p className="mt-2 text-sm text-red-400">{errors.address.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-shell" htmlFor="booking-device">
            Device Type
          </label>
          <select id="booking-device" className="input-shell" {...register('deviceType')}>
            {deviceTypes.map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
          {errors.deviceType ? <p className="mt-2 text-sm text-red-400">{errors.deviceType.message}</p> : null}
        </div>
        <div>
          <label className="label-shell" htmlFor="booking-time">
            Preferred Visit Time
          </label>
          <input id="booking-time" type="datetime-local" className="input-shell" {...register('preferredVisitTime')} />
          {errors.preferredVisitTime ? (
            <p className="mt-2 text-sm text-red-400">{errors.preferredVisitTime.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label-shell" htmlFor="booking-problem">
          Problem Description
        </label>
        <textarea
          id="booking-problem"
          rows={5}
          className="input-shell resize-none"
          placeholder="Tell us what is happening with the device"
          {...register('problemDescription')}
        />
        {errors.problemDescription ? (
          <p className="mt-2 text-sm text-red-400">{errors.problemDescription.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
      </button>
    </form>
  );
}
