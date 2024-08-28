import { db } from '@/db/db';
import { NewUser, users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const updateUserById = async (id: string, user: Partial<NewUser>) => {
	return db.update(users).set(user).where(eq(users.id, id));
};

export const updateUserByEmail = async (
	email: string,
	user: Partial<NewUser>
) => {
	return db.update(users).set(user).where(eq(users.email, email));
};
