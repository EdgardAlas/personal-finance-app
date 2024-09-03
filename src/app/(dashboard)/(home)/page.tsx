import { BalanceCards } from '@/app/(dashboard)/(home)/_containers/balance-cards';
import { HomeBudgets } from '@/app/(dashboard)/(home)/_containers/home-budgets';
import { HomePots } from '@/app/(dashboard)/(home)/_containers/home-pots';
import { HomeRecurringBills } from '@/app/(dashboard)/(home)/_containers/home-recurring-bill';
import { HomeTransactionts } from '@/app/(dashboard)/(home)/_containers/home-transactionts';
import { PageTitle } from '@/components/ui/page-title';

export const metadata = {
	title: 'Overview',
	description: 'Here you can see the overview of the platform',
};

const HomePage = () => {
	return (
		<>
			<PageTitle>Overview</PageTitle>
			<BalanceCards />

			<div className='grid gap-6 lg:grid-cols-12'>
				<div className='grid gap-4 md:gap-6 lg:col-span-7'>
					<HomePots />

					<HomeTransactionts />
				</div>

				<div className='grid gap-4 md:gap-6 lg:col-span-5'>
					<HomeBudgets />

					<HomeRecurringBills />
				</div>
			</div>
		</>
	);
};

export default HomePage;
