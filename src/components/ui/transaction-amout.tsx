import { currencyFormat } from '@/helpers/currency-format';
import { cn } from '@/lib/cn';
import React from 'react';

interface TransactionAmoutProps {
	amount: number;
}

export const TransactionAmout = ({ amount }: TransactionAmoutProps) => {
	return (
		<p
			className={cn('fz-preset-4-bold', {
				'text-theme-green': amount > 0,
			})}
		>
			{amount > 0 ? '+' : '-'}
			{currencyFormat(Math.abs(amount))}
		</p>
	);
};
