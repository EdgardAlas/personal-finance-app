'use client';

import Logo from '@/assets/images/logo-large.svg';

import { menuItems } from '@/config/menu-items';
import { cn } from '@/lib/cn';

import MinimizeMenu from '@/assets/images/icon-minimize-menu.svg';
import LogoSmall from '@/assets/images/logo-small.svg';
import { useAuth } from '@/context/auth-context';
import { useSidebar } from '@/context/sidebar-context';
import { ellipsis } from '@/helpers/ellipsis';
import { LucideLogOut } from 'lucide-react';
import { DesktopMenuItem } from './desktop-menu-item';

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
							<DesktopMenuItem {...item} />
						</li>
					))}
				</ul>

				{/* 158px */}
				<div className='h-[158px]'>
					<DesktopMenuItem
						label='Minimize Menu'
						icon={MinimizeMenu}
						classNames={{
							icon: cn(open && 'rotate-180'),
						}}
						as={'button'}
						onClick={() => setOpen(!open)}
					/>

					<DesktopMenuItem
						label={`Logout ( ${ellipsis(user?.name ?? '', 10)} )`}
						icon={LucideLogOut}
						href={'/api/logout'}
					/>
				</div>
			</aside>
		</>
	);
};
