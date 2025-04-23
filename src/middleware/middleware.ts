import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const isProtectedRoute =
        req.nextUrl.pathname.startsWith('/dashboard') ||
        req.nextUrl.pathname.startsWith('/profile');

    const isAuthPage =
        req.nextUrl.pathname.startsWith('/login') ||
        req.nextUrl.pathname.startsWith('/register');

    // ✅ If trying to access protected page without session → redirect to login
    if (isProtectedRoute && !session?.user) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // ✅ If logged in and accessing login/register → redirect to dashboard (or wherever)
    if (isAuthPage && session?.user) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return res;
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/login',
        '/register',
    ],
};
