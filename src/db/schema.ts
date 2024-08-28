import {
	pgTable,
	index,
	unique,
	uuid,
	text,
	timestamp,
} from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';

export const users = pgTable(
	'users',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		email: text('email').notNull(),
		password: text('password').notNull(),
		name: text('name').notNull(),
		timezone: text('timezone').default('UTC').notNull(),
		resetPasswordToken: text('reset_password_token'),
		createdAt: timestamp('created_at', {
			withTimezone: true,
			mode: 'string',
		}).default(sql`CURRENT_TIMESTAMP`),
		updatedAt: timestamp('updated_at', {
			withTimezone: true,
			mode: 'string',
		}).default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => {
		return {
			emailIdx: index('users_email_idx').using(
				'btree',
				table.email.asc().nullsLast()
			),
			usersEmailKey: unique('users_email_key').on(table.email),
		};
	}
);

export type NewUser = InferInsertModel<typeof users>;
export type SelectUser = InferSelectModel<typeof users>;
