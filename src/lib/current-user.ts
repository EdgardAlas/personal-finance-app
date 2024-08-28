import { auth } from '@/lib/auth';
import { checkIfUserExistsById } from '@/use-cases/check-if-user-exists';

interface User {
	id: string;
	name: string;
	email: string;
	timezone: string;
	createAt: string | null;
	updateAt: string | null;
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
		return undefined;
	}

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		timezone: user.timezone,
		createAt: user.createdAt,
		updateAt: user.updatedAt,
	} satisfies User;
};
