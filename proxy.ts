import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { request } from 'http';

const isProtectedRoute = createRouteMatcher([
  "/",
])

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    const { userId, redirectToSignIn } = await auth()
  }

  return NextResponse.next();
});

export const config = {
    matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}