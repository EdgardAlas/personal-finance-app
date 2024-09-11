import { auth } from '@/lib/auth';
import { checkIfUserExistsById } from '@/use-cases/check-if-user-exists';
import { redirect } from 'next/navigation';

interface User {
	id: string;
	name: string;
	email: string;
	timezone: string;
	createdAt: string | null;
	updatedAt: string | null;
}

export const currentUser = async (): Promise<User | undefined> => {
	const session = await auth();
	if (!session) {
		return undefined;
	}

	if (!session.user) {
		return undefined;
	}

	const user = await checkIfUserExistsById(session.user.id as string);

	if (!user) {
		return redirect('/logout');
	}

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		timezone: user.timezone,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	} satisfies User;
};
