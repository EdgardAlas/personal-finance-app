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
	const { setOpen, open } = useSidebar();
	const { user } = useAuth();

	return (
		<>
			<aside
				className={cn(
					'sticky top-0 flex max-h-dvh flex-col gap-6 bg-theme-gray-900 text-theme-gray-300 transition-[width] duration-300 max-lg:hidden lg:w-[300px]',
					{
						'!w-[80px]': !open,
					}
				)}
			>
				<div className='h-[102px] px-8 py-10'>
					<Logo
						aria-label={'Finance logo'}
						className={cn('transition-[width] duration-300', {
							'w-[14px]': !open,
						})}
					/>
				</div>

				<ul className='h-[calc(100dvh-102px-158px)] overflow-y-auto overflow-x-hidden scrollbar-thin'>
					{menuItems.map((item) => (
						<li key={item.label}>
							<DesktopMenuItem {...item} />
						</li>
					))}
				</ul>

				<div className='h-[158px]'>
					<DesktopMenuItem
						label='Minimize Menu'
						icon={MinimizeMenu}
						classNames={{
							icon: cn(!open && 'rotate-180'),
						}}
						as={'button'}
						onClick={() => setOpen(!open)}
					/>

					<DesktopMenuItem
						prefetch={false}
						label={`Logout ( ${ellipsis(user?.name ?? '', 10)} )`}
						icon={LucideLogOut}
						href={'/api/logout'}
					/>
				</div>
			</aside>
		</>
	);
};
