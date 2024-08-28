import { db } from '@/db/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const checkIfUserExists = async (email: string) => {
	const user = await db.query.users.findFirst({
		where: eq(users.email, email),
	});

	return user;
};
