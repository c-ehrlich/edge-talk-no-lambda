import { db } from '@/lib/db/db';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'

export async function GET() {
  await db.query.example.findFirst();
  await db.query.example.findFirst();
  await db.query.example.findFirst();

  return NextResponse.json({ message: "Hello from Global Edge Runtime after three DB roundtrips!" });
}