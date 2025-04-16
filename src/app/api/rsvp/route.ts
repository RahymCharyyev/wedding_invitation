import { NextRequest, NextResponse } from 'next/server';
import { db } from '../db/connect';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullname, attending, site } = body;

  if (!fullname || !attending) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const last = await db
    .selectFrom('guests')
    .select('id')
    .orderBy('submittedAt', 'desc')
    .limit(1)
    .executeTakeFirst();
  const newEntryDb = await db
    .insertInto('guests')
    .values({
      fullName: fullname,
      isAttending: attending,
      site,
      id: last?.id ? last.id + 1 : 1,
      submittedAt: new Date().toISOString(),
    })
    .returningAll()
    .executeTakeFirst();

  return NextResponse.json({ message: 'RSVP submitted', data: newEntryDb });
}

export async function GET() {
  const all = await db
    .selectFrom('guests')
    .orderBy('submittedAt', 'asc')
    .selectAll()
    .execute();
  return NextResponse.json(all);
}
