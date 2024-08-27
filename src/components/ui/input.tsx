import * as React from 'react';

import { cn } from '@/lib/cn';
import { LucideProps } from 'lucide-react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	icon?: React.ComponentType<LucideProps>;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, icon: Icon, ...props }, ref) => {
		return (
			<div className='relative'>
				{Icon && (
					<Icon className='absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-theme-gray-500' />
				)}

				<input
					type={type}
					className={cn(
						'flex h-[2.8125rem] w-full rounded-md border border-input bg-theme-white px-3 py-2 text-sm text-theme-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
						{
							'ps-9': Icon,
						},
						className
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
