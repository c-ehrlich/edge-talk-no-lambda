import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const preferredRegion = 'iad1'; // us-east-1
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ message: "Hello from Regional Edge Runtime (us-east-1)!!" });
}