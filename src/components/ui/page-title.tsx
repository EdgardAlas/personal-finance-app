import { cn } from '@/lib/cn';
import React, { ComponentProps } from 'react';

export const PageTitle = ({ className, ...rest }: ComponentProps<'h1'>) => {
	return (
		<h1
			className={cn('fz-preset-1 text-theme-gray-900', className)}
			{...rest}
		/>
	);
};
