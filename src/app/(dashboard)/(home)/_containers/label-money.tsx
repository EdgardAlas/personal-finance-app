import { currencyFormat } from '@/helpers/currency-format';
import React from 'react';

interface LabelMoneyProps {
	label: string;
	value: number;
	color?: string;
}

export const LabelMoney = ({
	label,
	value,
	color = 'hsl(var(--theme-green))',
}: LabelMoneyProps) => {
	return (
		<div className='flex h-11 items-center gap-2'>
			<div
				className='h-full w-1 rounded-full'
				style={{
					backgroundColor: color,
				}}
			/>
			<div>
				<p className='fz-preset-5'>{label}</p>
				<p className='fz-preset-4-bold text-theme-gray-900'>
					{currencyFormat(value)}
				</p>
			</div>
		</div>
	);
};
