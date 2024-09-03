'use client';

import { LabelMoney } from '@/app/(dashboard)/(home)/_containers/label-money';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { CardNotes, VanillaCard } from '@/components/ui/vanilla-card';
import { currencyFormat } from '@/helpers/currency-format';
import Link from 'next/link';
import { Pie, PieChart } from 'recharts';

const monthlyBudget = [
	{
		budget: 'Entertainment',
		amount: 186,
		fill: 'hsl(var(--chart-1))',
	},
	{
		budget: 'Bills',
		amount: 305,
		fill: 'hsl(var(--chart-2))',
	},
	{
		budget: 'Dining Out',
		amount: 237,
		fill: 'hsl(var(--chart-3))',
	},
	{
		budget: 'Personal Care',
		amount: 173,
		fill: 'hsl(var(--chart-4))',
	},
];

const chartConfig = {} satisfies ChartConfig;

export const HomeBudgets = () => {
	return (
		<VanillaCard
			title='Budgets'
			link={{
				href: '/budgets',
			}}
		>
			<div className='grid items-center gap-5 xl:grid-cols-12'>
				<div className='xl:col-span-8'>
					<ChartContainer
						config={chartConfig}
						className='mx-auto aspect-square w-full max-w-[300px]'
					>
						<PieChart>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Pie data={monthlyBudget} dataKey='amount' nameKey='budget' />
						</PieChart>
					</ChartContainer>
					<p className='fz-preset-2 text-center text-theme-gray-900'>
						{currencyFormat(3000)}
					</p>
					<p className='fz-preset-4 text-center text-theme-gray-500'>
						of {currencyFormat(5000)} limit
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4 xl:col-span-4 xl:grid-cols-1 xl:flex-col'>
					{monthlyBudget.map((budget, index) => (
						<LabelMoney
							key={index}
							label={budget.budget}
							value={budget.amount}
							color={budget.fill}
						/>
					))}
				</div>
			</div>

			<CardNotes
				notes={[
					'The graph shows the total spent in the current month',
					'The limit is the total amount you have set for the month',
					<>
						In this section only the first 4 categories are shown, you can view
						all the categories in <Link href='/budgets'>Budgets</Link>
					</>,
				]}
			/>
		</VanillaCard>
	);
};
