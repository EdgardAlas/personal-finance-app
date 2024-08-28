import { env } from '@/lib/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	out: './src/drizzle',
	schema: './src/db/schema.ts',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
