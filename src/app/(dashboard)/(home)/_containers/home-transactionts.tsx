import EmmaRicharson from '@/assets/images/avatars/emma-richardson.jpg';
import { CardNotes, VanillaCard } from '@/components/ui/vanilla-card';
import { currencyFormat } from '@/helpers/currency-format';
import { cn } from '@/lib/cn';
import Image from 'next/image';

/* export const metadata = {
	title: 'Overview',
	description: 'Here you can see the overview of the platform',
};
 */
const transactions = [
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		icon: EmmaRicharson,
	},
	{
		name: 'Savory Bites Bistro',
		amount: -100,
		date: '19 Aug 2021',
	},
	{
		name: 'Daniel Carter',
		amount: 100,
		date: '19 Aug 2021',
	},
	{
		name: 'Sun Park',
		amount: -100,
		date: '19 Aug 2021',
	},
	{
		name: 'Urban Services Hub',
		amount: -100,
		date: '19 Aug 2021',
	},
];

export const HomeTransactionts = () => {
	return (
		<VanillaCard
			title='Transactions'
			link={{
				href: '/transactions',
				label: 'View All',
			}}
		>
			<div className='flex flex-col justify-between divide-y-[1px] divide-theme-gray-100 text-theme-gray-900'>
				{transactions.map((transaction, index) => (
					<div
						key={index}
						className={cn('flex items-center justify-between', {
							'py-5': index > 0,
							'pb-5': index === 0,
						})}
					>
						<div className='inline-flex items-center gap-4'>
							<Image
								src={transaction.icon ?? EmmaRicharson}
								alt=''
								width={40}
								height={40}
								className='rounded-full object-cover'
							/>
							<p className='fz-preset-4-bold'>{transaction.name}</p>
						</div>
						<div className='inline-flex flex-col items-end gap-2'>
							<p
								className={cn('fz-preset-4-bold', {
									'text-theme-green': transaction.amount > 0,
								})}
							>
								{currencyFormat(transaction.amount)}
							</p>
							<p className='fz-preset-5'>{transaction.date}</p>
						</div>
					</div>
				))}
			</div>

			<CardNotes
				notes={[
					'The transactions are displayed in descending order of the date',
					'This section only shows the first 5 transactions, you can view all the transactions in View All',
				]}
			/>
		</VanillaCard>
	);
};
