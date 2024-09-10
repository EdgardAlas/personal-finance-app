'use client';

import { SearchTransactions } from '@/app/(dashboard)/transactions/_containers/search-transactions';
import { Transactions } from '@/app/(dashboard)/transactions/_containers/transactions';
import { TransactionsPagination } from '@/app/(dashboard)/transactions/_containers/transactions-pagination';
import { PageTitle } from '@/components/ui/page-title';
import { VanillaCard } from '@/components/ui/vanilla-card';

const TransactionsPage = () => {
	return (
		<>
			<PageTitle>Transactions</PageTitle>

			<VanillaCard>
				<SearchTransactions />

				<Transactions />

				<TransactionsPagination />
			</VanillaCard>
		</>
	);
};

export default TransactionsPage;
