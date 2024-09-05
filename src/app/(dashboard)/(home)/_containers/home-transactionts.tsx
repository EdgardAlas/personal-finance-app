import { TransactionAmout } from '@/components/ui/transaction-amout';
import { TransactionRecipientSender } from '@/components/ui/transaction-recipient-sender';
import { CardNotes, VanillaCard } from '@/components/ui/vanilla-card';
import { cn } from '@/lib/cn';

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
		icon: '/emma-richardson.jpg',
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
						<TransactionRecipientSender
							icon={transaction.icon ?? ''}
							name={transaction.name}
						/>
						<div className='inline-flex flex-col items-end gap-2'>
							<TransactionAmout amount={transaction.amount} />
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
