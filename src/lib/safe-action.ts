import { CustomError } from '@/helpers/custom-error';
import { currentUser } from '@/lib/current-user';
import { CredentialsSignin } from 'next-auth';
import { createSafeActionClient } from 'next-safe-action';

const handleReturnedServerError = (e: Error) => {
	if (e instanceof CustomError) {
		return e.message;
	}

	if (e instanceof CredentialsSignin) {
		return 'Invalid email or password, please try again.';
	}

	return 'An error occurred. Please try again later.';
};

export const unAuthAction = createSafeActionClient({
	handleReturnedServerError,
});

export const authAction = createSafeActionClient({
	handleReturnedServerError,
}).use(async ({ next }) => {
	const user = await currentUser();

	if (!user) {
		throw new CustomError('Unauthorized');
	}

	return next({
		ctx: {
			userId: user.id,
			...user,
		},
	});
});
