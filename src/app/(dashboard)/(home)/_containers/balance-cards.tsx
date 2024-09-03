import { BalanceCard } from '@/app/(dashboard)/(home)/_containers/balance-card';
import React from 'react';

export const BalanceCards = () => {
	return (
		<div className='grid gap-3 md:grid-cols-3 md:gap-6'>
			<BalanceCard title='Current Balance' money={4_836} variant='black' />
			<BalanceCard title='Income' money={3_814.25} />
			<BalanceCard title='Expenses' money={1700.5} />
		</div>
	);
};
