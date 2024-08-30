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

	return (
		<Component
			className={cn(
				'fz-preset-3 flex h-14 w-[276px] items-center gap-4 rounded-r-[12px] border-s-4 text-theme-gray-300',
				'border-transparent pr-8 ps-7 transition-colors duration-300',
				'hover:text-theme-white [&_svg]:hover:fill-theme-white',
				{
					'border-theme-green bg-theme-white !text-theme-gray-900':
						pathname === props.href,
					'!w-[88px] rounded-none': !open,
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
						'!fill-theme-green': pathname === props.href,
					},
					classNames?.icon
				)}
			/>
			{open && <span className={classNames?.label}>{label}</span>}
		</Component>
	);
};
