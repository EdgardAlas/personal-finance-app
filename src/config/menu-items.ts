import BudgetsIcon from '@/assets/images/icon-nav-budgets.svg';
import HomeIcon from '@/assets/images/icon-nav-overview.svg';
import PotsIcon from '@/assets/images/icon-nav-pots.svg';
import RecurringBillsIcon from '@/assets/images/icon-nav-recurring-bills.svg';
import TransactionIcon from '@/assets/images/icon-nav-transactions.svg';
import { FC, SVGProps } from 'react';

export const menuItems: {
	label: string;
	icon: FC<SVGProps<SVGElement>>;
	href: string;
	prefetch?: boolean;
}[] = [
	{
		label: 'Overview',
		icon: HomeIcon,
		href: '/',
	},
	{
		label: 'Transactions',
		icon: TransactionIcon,
		href: '/transactions',
	},
	{
		label: 'Budgets',
		icon: BudgetsIcon,
		href: '/budgets',
	},
	{
		label: 'Pots',
		icon: PotsIcon,
		href: '/pots',
	},
	{
		label: 'Recurring Bills',
		icon: RecurringBillsIcon,
		href: '/recurring-bills',
	},
];
