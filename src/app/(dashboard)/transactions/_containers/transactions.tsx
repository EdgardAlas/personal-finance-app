import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { TransactionAmout } from '@/components/ui/transaction-amout';
import { TransactionRecipientSender } from '@/components/ui/transaction-recipient-sender';

export const Transactions = () => {
	return (
		<Table>
			<TableHeader className='fz-preset-5'>
				<TableRow>
					<TableHead>Recipient / Sender</TableHead>
					<TableHead>Category</TableHead>
					<TableHead>Transaction Date</TableHead>
					<TableHead className='text-right'>Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction, index) => (
					<TableRow key={index}>
						<TableCell className='font-medium'>
							<TransactionRecipientSender
								icon={transaction.icon}
								name={transaction.name}
							/>
						</TableCell>
						<TableCell className='fz-preset-5'>
							{transaction.category}
						</TableCell>
						<TableCell className='fz-preset-5'>{transaction.date}</TableCell>
						<TableCell className='text-right'>
							<TransactionAmout amount={transaction.amount} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

const transactions = [
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
];
