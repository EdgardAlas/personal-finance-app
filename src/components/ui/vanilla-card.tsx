import Arrow from '@/assets/images/icon-caret-right.svg';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

interface CardProps extends ComponentProps<'div'> {
	title?: string;
	link?: {
		href: string;
		label?: string;
	};
}

export const VanillaCard = ({
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
					{link && (
						<CardTitleLink href={link.href}>
							{link.label ?? 'See Details'}
						</CardTitleLink>
					)}
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

export const CardNotes = ({ notes }: { notes: string[] | ReactNode[] }) => {
	if (!notes.length) return null;

	return (
		<ul className='fz-preset-5 list-disc ps-4'>
			{notes.map((note, index) => (
				<li key={index}>
					<small>{note}</small>
				</li>
			))}
		</ul>
	);
};
