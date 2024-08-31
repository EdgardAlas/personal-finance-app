'use client';

import { menuItems } from '@/config/menu-items';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { LucideLogOut } from 'lucide-react';

export const MobileSidebar = () => {
	const pathname = usePathname();

	return (
		<div className='fixed bottom-0 z-30 flex h-14 w-full items-end bg-theme-gray-900 px-4 text-theme-gray-300 md:h-24 lg:hidden'>
			{[
				...menuItems,
				{
					label: 'Logout',
					href: '/logout',
					icon: LucideLogOut,
				},
			].map((item) => (
				<Link
					key={item.label}
					href={item.href}
					className={cn(
						'flex h-11 flex-1 items-center justify-center rounded-t-[0.75rem] border-b-4 border-transparent md:h-20',
						'fz-preset-5-bold flex-col gap-2 [&_svg]:hover:fill-theme-white',
						{
							'border-theme-green bg-theme-white text-theme-gray-900':
								pathname === item.href,
						}
					)}
				>
					<item.icon
						className={cn(
							'fill-theme-gray-300 transition-colors duration-300',
							{
								'!fill-theme-green': pathname === item.href,
							}
						)}
					/>
					<span className='hidden md:block'>{item.label}</span>
				</Link>
			))}
		</div>
	);
};
