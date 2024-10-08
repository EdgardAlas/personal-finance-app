'use server';

import { signUpSchema } from './sign-up.schemas';
import { CustomError } from '@/helpers/custom-error';
import { signIn } from '@/lib/auth';
import { unAuthAction } from '@/lib/safe-action';
import { checkIfUserExistsByEmail } from '@/use-cases/check-if-user-exists';
import { createUser } from '@/use-cases/create-user';
import { insertDefaultCategories } from '@/use-cases/insert-default-categories';
import { verifyTimezone } from '@/use-cases/verify-timezone';

export const signUpAction = unAuthAction
	.schema(signUpSchema)
	.action(async ({ parsedInput: values }) => {
		if (values.timezone !== 'UTC' && !verifyTimezone(values.timezone ?? '')) {
			throw new CustomError('Invalid timezone.');
		}

		const userExists = await checkIfUserExistsByEmail(values.email);

		if (userExists) {
			throw new CustomError('This email is already in use.');
		}

		const user = await createUser({
			email: values.email,
			password: values.password,
			name: values.name,
			timezone: values.timezone,
		});

		if (!user) {
			throw new CustomError('An error occurred. Please try again later.');
		}

		await insertDefaultCategories(user[0].id);

		await signIn('credentials', {
			redirect: true,
			redirectTo: '/',
			email: values.email,
			password: values.password,
		});
	});
