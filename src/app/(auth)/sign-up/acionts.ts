'use server';

import { signUpValidations } from '@/app/(auth)/sign-up/validations';
import { CustomError } from '@/helpers/custom-error';
import { signIn } from '@/lib/auth';
import { unAuthAction } from '@/lib/safe-action';
import { checkIfUserExistsByEmail } from '@/use-cases/check-if-user-exists';
import { createUser } from '@/use-cases/create-user';

export const signUpAction = unAuthAction
	.schema(signUpValidations)
	.action(async ({ parsedInput: values }) => {
		const userExists = await checkIfUserExistsByEmail(values.email);

		if (userExists) {
			throw new CustomError('This email is already in use.');
		}

		const user = await createUser({
			email: values.email,
			password: values.password,
			name: values.name,
		});

		if (!user) {
			throw new CustomError('An error occurred. Please try again later.');
		}

		await signIn('credentials', {
			redirect: true,
			redirectTo: '/',
			email: values.email,
			password: values.password,
		});
	});
