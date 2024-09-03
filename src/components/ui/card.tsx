import Arrow from '@/assets/images/icon-caret-right.svg';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface CardProps extends ComponentProps<'div'> {
	title?: string;
	link?: {
		href: string;
		label: string;
	};
}

export const Card = ({
	className,
	children,
	link,
	title,
	...rest
}: CardProps) => {
	return (
		<div
			className={cn(
				'grid gap-5 rounded-[0.75rem] bg-theme-white p-6 md:p-8',
				className
			)}
			{...rest}
		>
			{!link && !title ? null : (
				<div className='flex items-center justify-between'>
					{title && <CardTitle>{title}</CardTitle>}
					{link && <CardTitleLink href={link.href}>{link.label}</CardTitleLink>}
				</div>
			)}
			{children}
		</div>
	);
};

export const CardTitle = ({ className, ...rest }: ComponentProps<'h2'>) => {
	return (
		<h2
			className={cn('fz-preset-2 text-theme-gray-900', className)}
			{...rest}
		/>
	);
};

export const CardTitleLink = ({
	className,
	children,
	...rest
}: ComponentProps<typeof Link>) => {
	return (
		<Link
			className={cn(
				'text-theme-primary-500 fz-preset-4 inline-flex items-center gap-3',
				className
			)}
			{...rest}
		>
			{children} <Arrow />
		</Link>
	);
};
