import { db } from '@/db/db';
import { NewUser, users } from '@/db/schema';
import { hashPassword } from '@/lib/bcrypt';

export const createUser = async (user: NewUser) => {
	return db
		.insert(users)
		.values({
			...user,
			password: await hashPassword(user.password),
		})
		.returning({ id: users.id });
};
