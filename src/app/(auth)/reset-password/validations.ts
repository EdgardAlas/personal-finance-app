import { z } from 'zod';

export const resetPasswordValidations = z
	.object({
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordValidations>;
