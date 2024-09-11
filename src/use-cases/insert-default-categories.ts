import { db } from '@/db/db';
import { categories, NewCategory } from '@/db/schema';

export const insertDefaultCategories = async (userId: string) => {
	const newCategories: NewCategory[] = [
		{
			name: 'Food',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Transport',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Entertainment',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Healthcare',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Salary',
			url: '/placeholder.jpg',
			userId,
		},
		{
			name: 'Gifts',
			url: '/placeholder.jpg',
			userId,
		},
	];

	await db.insert(categories).values(newCategories);
};
