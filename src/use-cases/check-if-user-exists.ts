import { db } from '@/db/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const checkIfUserExistsByEmail = async (email: string) => {
	const user = await db.query.users.findFirst({
		where: eq(users.email, email),
	});

	return user;
};

export const checkIfUserExistsById = async (id: string) => {
	const user = await db.query.users.findFirst({
		where: eq(users.id, id),
	});

	return user;
};
