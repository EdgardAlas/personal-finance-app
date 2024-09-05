import * as React from 'react';

import { cn } from '@/lib/cn';
import { LucideProps } from 'lucide-react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	iconLeft?: React.ComponentType<LucideProps>;
	iconRight?: React.ComponentType<LucideProps>;
	classNames?: {
		container?: string;
		input?: string;
	};
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			iconLeft: IconLeft,
			iconRight: IconRight,
			classNames,
			...props
		},
		ref
	) => {
		return (
			<div className={cn('relative w-full', classNames?.container)}>
				{IconLeft && (
					<IconLeft className='absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-theme-gray-500' />
				)}

				<input
					type={type}
					className={cn(
						'flex h-[2.8125rem] w-full rounded-md border border-input bg-theme-white px-3 py-2 text-sm text-theme-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
						{
							'ps-9': IconLeft,
							'pe-9': IconRight,
						},
						classNames?.input,
						className
					)}
					ref={ref}
					{...props}
				/>

				{IconRight && (
					<IconRight className='absolute right-3 top-1/2 size-4 -translate-y-1/2 transform text-theme-gray-500' />
				)}
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
