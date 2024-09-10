'use client';

import Logo from '@/assets/images/logo-large.svg';
import { menuItems } from '@/config/menu-items';
import { cn } from '@/lib/cn';
import MinimizeMenu from '@/assets/images/icon-minimize-menu.svg';
import { useAuth } from '@/context/auth-context';
import { useSidebar } from '@/context/sidebar-context';
import { ellipsis } from '@/helpers/ellipsis';
import { LucideLogOut } from 'lucide-react';
import { DesktopMenuItem } from './desktop-menu-item';

export const DesktopSidebar = () => {
	const { open } = useSidebar();

	return (
		<aside
			className={cn(
				'sticky top-0 flex max-h-dvh flex-col gap-6 bg-theme-gray-900',
				'text-theme-gray-300 transition-[width] duration-300 max-lg:hidden lg:w-[18.75rem]',
				{
					'!w-[5rem]': !open,
				}
			)}
		>
			<DesktopSidebarLogo />
			<DesktopSidebarMenuItems />
			<DesktopSidebarFooter />
		</aside>
	);
};

const DesktopSidebarLogo = () => {
	const { open } = useSidebar();

	return (
		<div className='h-[6.375rem] px-8 py-10'>
			<Logo
				aria-label={'Finance logo'}
				className={cn('transition-[width] duration-300', {
					'w-[0.875rem]': !open,
				})}
			/>
		</div>
	);
};

const DesktopSidebarMenuItems = () => {
	return (
		<ul className='h-[calc(100dvh-102px-158px)] overflow-y-auto overflow-x-hidden scrollbar-thin'>
			{menuItems.map((item) => (
				<li key={item.label}>
					<DesktopMenuItem {...item} />
				</li>
			))}
		</ul>
	);
};

const DesktopSidebarFooter = () => {
	const { setOpen, open } = useSidebar();
	const { user } = useAuth();

	const sidebarToggle = () => {
		const newSidebarState = !open;
		setOpen(newSidebarState);
		const sidebarState = newSidebarState ? 'open' : 'close';
		document.cookie = `sidebar=${sidebarState}; path=/;`;
	};

	return (
		<div className='h-[9.875rem]'>
			<DesktopMenuItem
				label='Minimize Menu'
				icon={MinimizeMenu}
				classNames={{
					icon: cn(!open && 'rotate-180'),
				}}
				as={'button'}
				onClick={sidebarToggle}
			/>

			<DesktopMenuItem
				prefetch={false}
				label={`Logout ( ${ellipsis(user?.name ?? '', 10)} )`}
				icon={LucideLogOut}
				href={'/logout'}
			/>
		</div>
	);
};
