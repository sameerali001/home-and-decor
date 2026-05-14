import { z } from 'zod';

export const contactRequestSchema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(8, 'Enter a valid phone number').optional().or(z.literal('')),
  message: z.string().min(10, 'Write a short message')
});

export const bookingRequestSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  address: z.string().min(10, 'Enter your address'),
  deviceType: z.string().min(2, 'Select a device type'),
  problemDescription: z.string().min(10, 'Describe the problem'),
  preferredVisitTime: z.string().min(1, 'Choose a preferred visit time')
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type BookingRequest = z.infer<typeof bookingRequestSchema>;
