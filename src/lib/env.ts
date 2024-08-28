import '@/lib/load-env';

import { z } from 'zod';

const envSchema = z.object({
	DATABASE_URL: z.string(),
	AUTH_SECRET: z.string(),
	AUTH_TRUST_HOST: z.string().transform((val) => !!val),
});

export const env = envSchema.parse(process.env);
