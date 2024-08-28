'use client';

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/cn';
import { ElementType } from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps<T, E extends React.ElementType> = {
	input: E;
	name: T;
	label?: string | React.ReactNode;
	description?: string;
	classNames?: Record<
		'container' | 'label' | 'input' | 'description' | 'error',
		string
	>;
} & Omit<React.ComponentProps<E>, 'name'>;

export const FormInput = <T, E extends React.ElementType>({
	input,
	name,
	className,
	label,
	description,
	classNames,
	...rest
}: FormInputProps<T, E>) => {
	const Component: ElementType = input;

	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name={name as string}
			render={({ field, fieldState }) => (
				<FormItem className={cn(classNames?.container)}>
					{typeof label === 'string' ? (
						<FormLabel className={cn('fz-preset-5-bold', classNames?.label)}>
							{label}
						</FormLabel>
					) : (
						label
					)}
					<FormControl>
						<Component
							{...field}
							{...rest}
							className={cn(
								className,
								{
									'border-theme-red focus-visible:ring-1 focus-visible:ring-theme-red':
										fieldState.error,
								},
								classNames?.input
							)}
						/>
					</FormControl>
					<FormDescription
						className={cn(
							'fz-preset-5 mt-1 text-right',
							classNames?.description
						)}
					>
						{description}
					</FormDescription>
					<FormMessage
						className={cn(
							'fz-preset-5 mt-1 text-destructive',
							classNames?.error
						)}
					/>
				</FormItem>
			)}
		/>
	);
};
