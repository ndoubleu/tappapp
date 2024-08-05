import { NextResponse } from 'next/server';

export function middleware(request?: any) {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store, must-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  return response;
}