import { currencyFormat } from '@/helpers/currency-format';
import { cn } from '@/lib/cn';
import React, { ComponentProps } from 'react';

interface TransactionAmoutProps extends ComponentProps<'p'> {
	amount: number;
}

export const TransactionAmout = ({
	amount,
	className,
	...rest
}: TransactionAmoutProps) => {
	return (
		<p
			className={cn(
				'fz-preset-4-bold',
				{
					'text-theme-green': amount > 0,
				},
				className
			)}
			{...rest}
		>
			{amount > 0 ? '+' : '-'}
			{currencyFormat(Math.abs(amount))}
		</p>
	);
};
