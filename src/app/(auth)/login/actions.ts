'use server';

import { loginValidations } from '@/app/(auth)/login/validations';
import { signIn } from '@/lib/auth';
import { unAuthAction } from '@/lib/safe-action';

export const loginAction = unAuthAction
	.schema(loginValidations)
	.action(async ({ parsedInput: values }) => {
		await signIn('credentials', {
			redirect: true,
			redirectTo: '/',
			email: values.email,
			password: values.password,
		});
	});
