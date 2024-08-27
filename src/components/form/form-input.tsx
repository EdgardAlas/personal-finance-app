import { cn } from '@/lib/cn';
import { ElementType, useId } from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps<T, E extends React.ElementType> = {
	input: E;
	name: T;
	label?: string;
	description?: string;
	classNames?: Record<
		'container' | 'label' | 'input' | 'description' | 'error',
		string
	>;
} & Omit<React.ComponentProps<E>, 'name'>;

export const FormInput = <T, E extends React.ElementType>({
	input,
	name,
	id,
	className,
	label,
	description,
	classNames,
	...rest
}: FormInputProps<T, E>) => {
	const Component: ElementType = input;

	const form = useFormContext();
	const error = form.formState.errors[name as string]?.message?.toString();

	const uniqueId = useId();

	const inputId = id || name || uniqueId;

	const value = form.watch(name as string);

	return (
		<div className={cn(classNames?.container)}>
			{label && (
				<label
					htmlFor={inputId as string}
					className={cn('text-preset-5-bold', classNames?.label)}
				>
					{label}
				</label>
			)}
			<Component
				id={inputId}
				{...form.register(name as string)}
				{...rest}
				value={value}
				className={cn(
					className,
					{
						'border-theme-red': error,
					},
					classNames?.input
				)}
			/>
			{description && (
				<p
					className={cn(
						'text-preset-5 mt-1 text-right',
						classNames?.description
					)}
				>
					{description}
				</p>
			)}
			{error && (
				<p
					className={cn('text-theme-red text-preset-5 mt-1', classNames?.error)}
				>
					{error}
				</p>
			)}
		</div>
	);
};
