import { signOut } from '@/lib/auth';
import { currentUser } from '@/lib/current-user';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const user = await currentUser();

	if (!user) {
		return NextResponse.redirect('/login');
	}

	await signOut({ redirect: true, redirectTo: '/login' });
};
