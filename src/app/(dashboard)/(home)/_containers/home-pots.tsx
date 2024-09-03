import { LabelMoney } from '@/app/(dashboard)/(home)/_containers/label-money';
import Pot from '@/assets/images/icon-pot.svg';
import { CardNotes, VanillaCard } from '@/components/ui/vanilla-card';
import { currencyFormat } from '@/helpers/currency-format';
import Link from 'next/link';

export const HomePots = () => {
	return (
		<VanillaCard
			title='Pots'
			link={{
				href: '/pots',
			}}
		>
			<div className='grid items-center gap-5 xl:grid-cols-2'>
				<div className='flex items-center gap-4 rounded-[0.75rem] bg-theme-gray-100 p-4 lg:p-5'>
					<Pot />
					<div>
						<p className='fz-preset-4 text-theme-gray-500'>Total Saved</p>
						<p className='fz-preset-1 text-theme-gray-900'>
							{currencyFormat(850)}
						</p>
					</div>
				</div>

				<div className='grid grid-cols-2 gap-4'>
					{[1, 2, 3, 4].map((pot, index) => (
						<LabelMoney key={index} label={`Pot ${pot}`} value={200} />
					))}
				</div>
			</div>

			<CardNotes
				notes={[
					'The total saved is the sum of all the pots',
					<>
						In this section only the first 4 pots are shown, you can view all
						the pots in <Link href='/pots'>Pots</Link>
					</>,
				]}
			/>
		</VanillaCard>
	);
};
