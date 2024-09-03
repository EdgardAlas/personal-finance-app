import { CardNotes, VanillaCard } from '@/components/ui/vanilla-card';
import { currencyFormat } from '@/helpers/currency-format';

export const HomeRecurringBills = () => {
	return (
		<VanillaCard
			title='Recurring Bills'
			link={{
				href: '/recurring-bills',
			}}
		>
			<div className='gap grid gap-3'>
				<RecurringBill
					title='Paid Bills'
					amount={190}
					color='hsl(var(--theme-green))'
				/>
				<RecurringBill
					title='Total Upcoming'
					amount={190}
					color='hsl(var(--theme-yellow))'
				/>
				<RecurringBill
					title='Due Soon'
					amount={190}
					color='hsl(var(--theme-cyan))'
				/>
			</div>

			<CardNotes
				notes={[
					'The due soon section shows the total of the bills that are due in the next 7 days',
				]}
			/>
		</VanillaCard>
	);
};

const RecurringBill = ({
	title,
	amount,
	color,
}: {
	title: string;
	amount: number;
	color: string;
}) => {
	return (
		<div
			className='flex items-center justify-between rounded-[8px] border-s-4 bg-theme-gray-100 px-4 py-5'
			style={{
				borderColor: color,
			}}
		>
			<p className='fz-preset-4'>{title}</p>
			<p className='fz-preset-4-bold text-theme-gray-900'>
				{currencyFormat(amount)}
			</p>
		</div>
	);
};
