import { z } from 'zod';

export const loginValidations = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Invalid email address' }),
	password: z.string().min(1, { message: 'Password is required' }),
});

export type LoginFormValues = z.infer<typeof loginValidations>;
