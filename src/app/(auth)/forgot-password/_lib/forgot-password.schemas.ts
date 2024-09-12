import { z } from 'zod';

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email({
			message: 'Invalid email address',
		})
		.min(1, { message: 'Email is required' }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
