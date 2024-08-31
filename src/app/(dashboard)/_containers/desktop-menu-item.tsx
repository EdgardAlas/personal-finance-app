'use client';

import { cn } from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, ElementType } from 'react';

import { useSidebar } from '@/context/sidebar-context';

type MenuItemProps<T extends ElementType> = {
	label: string;
	icon: React.ElementType;
	as?: T;
	classNames?: {
		container?: string;
		icon?: string;
		label?: string;
	};
} & Omit<ComponentPropsWithoutRef<T>, 'item' | 'as'>;

export const DesktopMenuItem = <T extends ElementType = typeof Link>({
	as,
	icon: Icon,
	label,
	classNames,
	...props
}: MenuItemProps<T>) => {
	const pathname = usePathname();

	const Component = as || Link;

	const { open } = useSidebar();

	const isActive = pathname === props.href;

	return (
		<Component
			className={cn(
				'border-s-4 border-transparent ps-7',
				'fz-preset-3 flex h-14 w-[17.25rem] items-center gap-4 rounded-r-[0.75rem] text-theme-gray-300',
				'pr-8 transition-colors duration-300',
				'duration-300 hover:text-theme-white [&_svg]:hover:fill-theme-white',
				{
					'border-theme-green bg-theme-white !text-theme-gray-900': isActive,
				},
				classNames?.container
			)}
			{...(props as TODO)}
		>
			<Icon
				aria-label={label}
				className={cn(
					'fill-theme-gray-300 transition-colors duration-300',
					{
						'!fill-theme-green': isActive,
					},
					classNames?.icon
				)}
			/>

			<span
				className={cn('transition-opacity duration-300', {
					'opacity-0': !open,
				})}
			>
				{label}
			</span>
		</Component>
	);
};
