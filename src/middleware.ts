import { authMiddleware } from '@/lib/auth-middleware';
import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authMiddleware);

const unAuthRoutes = [
	'/login',
	'/sign-up',
	'/forgot-password',
	'/reset-password',
];

export const middleware = auth(async (request) => {
	if (
		unAuthRoutes.includes(request.nextUrl.pathname) &&
		request.method === 'GET' &&
		request.auth
	) {
		return NextResponse.redirect(new URL('/', request.url), {
			headers: request.headers,
		});
	}

	if (
		!request.auth &&
		!unAuthRoutes.includes(request.nextUrl.pathname) &&
		!request.nextUrl.pathname.includes('/login')
	) {
		return NextResponse.redirect(new URL('/login', request.url), {
			headers: request.headers,
		});
	}
});

export const config = {
	matcher: [
		{
			source: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'next-action' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
};
