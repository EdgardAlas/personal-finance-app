'use server';

import { loginSchema } from './login.schemas';
import { signIn } from '@/lib/auth';
import { unAuthAction } from '@/lib/safe-action';

export const loginAction = unAuthAction
	.schema(loginSchema)
	.action(async ({ parsedInput: values }) => {
		await signIn('credentials', {
			redirect: true,
			redirectTo: '/',
			email: values.email,
			password: values.password,
		});
	});
