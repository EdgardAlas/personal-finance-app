import { loginValidations } from '@/app/(auth)/login/validations';
import { authMiddleware } from '@/lib/auth-middleware';
import { comparePassword } from '@/lib/bcrypt';
import { checkIfUserExists } from '@/use-cases/check-if-user-exists';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const {
	handlers,
	signIn,
	signOut,
	auth,
	unstable_update: update,
} = NextAuth({
	...authMiddleware,
	providers: [
		credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const parsedValues = await loginValidations.parseAsync(credentials);

				const userExists = await checkIfUserExists(parsedValues.email);

				if (!userExists) {
					return null;
				}

				const passwordMatch = await comparePassword(
					parsedValues.password,
					userExists.password
				);

				if (!passwordMatch) {
					return null;
				}

				return {
					id: userExists.id,
				};
			},
		}),
	],
});
