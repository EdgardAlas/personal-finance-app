import { z } from 'zod';

export const signUpValidations = z.object({
	name: z.string().min(5, { message: 'Name must be at least 5 characters' }),
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters' }),
	timezone: z.string().optional(),
});

export type SignUpFormValues = z.infer<typeof signUpValidations>;
