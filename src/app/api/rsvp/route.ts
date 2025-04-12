import { NextRequest, NextResponse } from 'next/server';

const rsvpSubmissions: {
  fullname: string;
  attending: string;
  submittedAt: string;
}[] = [];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullname, attending } = body;

  if (!fullname || !attending) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const newEntry = {
    fullname,
    attending,
    submittedAt: new Date().toISOString(),
  };

  rsvpSubmissions.push(newEntry);

  return NextResponse.json({ message: 'RSVP submitted', data: newEntry });
}

export async function GET() {
  return NextResponse.json(rsvpSubmissions);
}
