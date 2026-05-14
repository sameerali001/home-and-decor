import { NextResponse } from 'next/server';
import { bookingRequestSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bookingRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Invalid booking request', errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'Booking request received', data: parsed.data }, { status: 200 });
}
