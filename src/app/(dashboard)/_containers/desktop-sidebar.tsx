'use client';

import Logo from '@/assets/images/logo-large.svg';

import { menuItems } from '@/config/menu-items';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, ElementType } from 'react';

import MinimizeMenu from '@/assets/images/icon-minimize-menu.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import { useAuth } from '@/context/auth-context';
import { useSidebar } from '@/context/sidebar-context';
import { ellipsis } from '@/helpers/ellipsis';
import { LucideLogOut } from 'lucide-react';

export const DesktopSidebar = () => {
	const { setOpen, open } = useSidebar();
	const { user } = useAuth();

	return (
		<>
			{/* 24px */}
			<aside
				className={cn(
					'sticky top-0 flex h-full flex-col gap-6 bg-theme-gray-900 text-theme-gray-300 max-lg:hidden lg:w-[300px]',
					{
						'!w-[88px]': !open,
					}
				)}
			>
				{/* 102px */}
				<div className='h-[102px] px-8 py-10'>
					{open ? <Logo aria-label='logo' /> : <LogoSmall aria-label='logo' />}
				</div>

				<ul className='scrollbar-thin h-[calc(100dvh-102px-158px)] overflow-auto'>
					{menuItems.map((item) => (
						<li key={item.label}>
							<MenuItem {...item} />
						</li>
					))}
				</ul>

				{/* 158px */}
				<div className='h-[158px]'>
					<MenuItem
						label='Minimize Menu'
						icon={MinimizeMenu}
						classNames={{
							icon: cn(open && 'rotate-180'),
						}}
						as={'button'}
						onClick={() => setOpen(!open)}
					/>

					<MenuItem
						label={`Logout ( ${ellipsis(user?.name ?? '', 10)} )`}
						icon={LucideLogOut}
						href={'/api/logout'}
					/>
				</div>
			</aside>
		</>
	);
};

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

const MenuItem = <T extends ElementType = typeof Link>({
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
