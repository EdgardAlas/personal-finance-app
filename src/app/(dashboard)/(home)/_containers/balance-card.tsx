import { currencyFormat } from '@/helpers/currency-format';
import { cn } from '@/lib/cn';
import { ComponentProps } from 'react';

interface BalanceCardProps extends ComponentProps<'div'> {
	title: string;
	money: number;
	variant?: 'black' | 'white';
}

export const BalanceCard = ({
	title,
	money,
	className,
	variant = 'white',
	...rest
}: BalanceCardProps) => {
	const isWhite = variant === 'white';
	const isBlack = variant === 'black';

	return (
		<div
			className={cn('grid gap-3 rounded-[0.75rem] p-5 md:p-6', className, {
				'bg-theme-gray-900': isBlack,
				'bg-theme-white': isWhite,
			})}
			{...rest}
		>
			<p
				className={cn('fz-preset-4', {
					'text-theme-gray-300': isBlack,
					'text-theme-gray-500': isWhite,
				})}
			>
				{title}
			</p>
			<p
				className={cn('fz-preset-1', {
					'text-theme-white': isBlack,
					'text-theme-gray-900': isWhite,
				})}
			>
				{currencyFormat(money)}
			</p>
		</div>
	);
};
