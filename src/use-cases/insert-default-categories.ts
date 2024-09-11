import { db } from '@/db/db';
import { categories, NewCategory } from '@/db/schema';

export const insertDefaultCategories = async (userId: string) => {
	const newCategories: NewCategory[] = [
		{
			name: 'Food',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Transport',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Housing',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Utilities',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Entertainment',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Healthcare',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Insurance',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Debt Payments',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Education',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Groceries',
			type: 'expense',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Savings',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Investments',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Salary',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Freelance Work',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Gifts',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Bonuses',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Interest',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Rent Income',
			type: 'income',
			url: '/placeholder.jpg',
			userId,
		},
	];

	await db.insert(categories).values(newCategories);
};
