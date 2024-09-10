import {
	pgTable,
	index,
	foreignKey,
	uuid,
	varchar,
	numeric,
	timestamp,
	unique,
	text,
	date,
	pgEnum,
} from 'drizzle-orm/pg-core';

import {
	InferInsertModel,
	InferSelectModel,
	relations,
	sql,
} from 'drizzle-orm';

// tables

export const categoryType = pgEnum('category_type', ['income', 'expense']);

export const pots = pgTable(
	'pots',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		userId: uuid('user_id'),
		name: varchar('name', { length: 100 }).notNull(),
		amount: numeric('amount', { precision: 15, scale: 2 })
			.default('0.00')
			.notNull(),
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
			userIdIdx: index('pots_user_id_idx').using(
				'btree',
				table.userId.asc().nullsLast()
			),
			potsUserIdFkey: foreignKey({
				columns: [table.userId],
				foreignColumns: [users.id],
				name: 'pots_user_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('cascade'),
		};
	}
);

export const users = pgTable(
	'users',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		email: varchar('email', { length: 255 }).notNull(),
		password: text('password').notNull(),
		name: varchar('name', { length: 100 }).notNull(),
		timezone: varchar('timezone', { length: 50 }).default('UTC').notNull(),
		currency: varchar('currency', { length: 3 }).default('USD').notNull(),
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

export const categories = pgTable(
	'categories',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		userId: uuid('user_id'),
		name: varchar('name', { length: 100 }).notNull(),
		type: categoryType('type').notNull(),
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
			userIdIdx: index('categories_user_id_idx').using(
				'btree',
				table.userId.asc().nullsLast()
			),
			categoriesUserIdFkey: foreignKey({
				columns: [table.userId],
				foreignColumns: [users.id],
				name: 'categories_user_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('cascade'),
		};
	}
);

export const budgets = pgTable(
	'budgets',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		userId: uuid('user_id'),
		amount: numeric('amount', { precision: 15, scale: 2 }).notNull(),
		startDate: date('start_date').notNull(),
		endDate: date('end_date').notNull(),
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
			userIdIdx: index('budgets_user_id_idx').using(
				'btree',
				table.userId.asc().nullsLast()
			),
			budgetsUserIdFkey: foreignKey({
				columns: [table.userId],
				foreignColumns: [users.id],
				name: 'budgets_user_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('cascade'),
		};
	}
);

export const transactions = pgTable(
	'transactions',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull(),
		userId: uuid('user_id'),
		categoryId: uuid('category_id'),
		potId: uuid('pot_id'),
		budgetId: uuid('budget_id'),
		amount: numeric('amount', { precision: 15, scale: 2 }).notNull(),
		description: text('description').notNull(),
		date: date('date').notNull(),
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
			budgetIdIdx: index('transactions_budget_id_idx').using(
				'btree',
				table.budgetId.asc().nullsLast()
			),
			categoryIdIdx: index('transactions_category_id_idx').using(
				'btree',
				table.categoryId.asc().nullsLast()
			),
			potIdIdx: index('transactions_pot_id_idx').using(
				'btree',
				table.potId.asc().nullsLast()
			),
			userIdIdx: index('transactions_user_id_idx').using(
				'btree',
				table.userId.asc().nullsLast()
			),
			transactionsUserIdFkey: foreignKey({
				columns: [table.userId],
				foreignColumns: [users.id],
				name: 'transactions_user_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('cascade'),
			transactionsCategoryIdFkey: foreignKey({
				columns: [table.categoryId],
				foreignColumns: [categories.id],
				name: 'transactions_category_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('set null'),
			transactionsPotIdFkey: foreignKey({
				columns: [table.potId],
				foreignColumns: [pots.id],
				name: 'transactions_pot_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('set null'),
			transactionsBudgetIdFkey: foreignKey({
				columns: [table.budgetId],
				foreignColumns: [budgets.id],
				name: 'transactions_budget_id_fkey',
			})
				.onUpdate('cascade')
				.onDelete('set null'),
		};
	}
);

// relations

export const potsRelations = relations(pots, ({ one, many }) => ({
	user: one(users, {
		fields: [pots.userId],
		references: [users.id],
	}),
	transactions: many(transactions),
}));

export const usersRelations = relations(users, ({ many }) => ({
	pots: many(pots),
	categories: many(categories),
	budgets: many(budgets),
	transactions: many(transactions),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
	user: one(users, {
		fields: [categories.userId],
		references: [users.id],
	}),
	transactions: many(transactions),
}));

export const budgetsRelations = relations(budgets, ({ one, many }) => ({
	user: one(users, {
		fields: [budgets.userId],
		references: [users.id],
	}),
	transactions: many(transactions),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
	user: one(users, {
		fields: [transactions.userId],
		references: [users.id],
	}),
	category: one(categories, {
		fields: [transactions.categoryId],
		references: [categories.id],
	}),
	pot: one(pots, {
		fields: [transactions.potId],
		references: [pots.id],
	}),
	budget: one(budgets, {
		fields: [transactions.budgetId],
		references: [budgets.id],
	}),
}));

// types

export type NewUser = InferInsertModel<typeof users>;
export type SelectUser = InferSelectModel<typeof users>;

export type NewPot = InferInsertModel<typeof pots>;
export type SelectPot = InferSelectModel<typeof pots>;

export type NewCategory = InferInsertModel<typeof categories>;
export type SelectCategory = InferSelectModel<typeof categories>;

export type NewBudget = InferInsertModel<typeof budgets>;
export type SelectBudget = InferSelectModel<typeof budgets>;

export type NewTransaction = InferInsertModel<typeof transactions>;
export type SelectTransaction = InferSelectModel<typeof transactions>;
