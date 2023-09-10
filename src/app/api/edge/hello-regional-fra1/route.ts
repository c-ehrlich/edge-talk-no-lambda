import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const preferredRegion = 'fra1'; // eu-central-1
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ message: "Hello from Regional Edge Runtime (eu-central-1)!!" });
}