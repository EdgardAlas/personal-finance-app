'use client';

import { menuItems } from '@/config/menu-items';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { LucideLogOut } from 'lucide-react';

export const MobileSidebar = () => {
	const pathname = usePathname();

	const className = (href: string) =>
		cn(
			'flex h-11 md:h-20 flex-1 items-center justify-center rounded-t-[12px] border-b-4 border-transparent',
			'[&_svg]:hover:fill-theme-white flex-col gap-2 fz-preset-5-bold',
			{
				'border-theme-green bg-theme-white text-theme-gray-900':
					pathname === href,
			}
		);

	return (
		<div className='fixed bottom-0 z-30 flex h-14 w-full items-end bg-theme-gray-900 px-4 text-theme-gray-300 md:h-24 lg:hidden'>
			{menuItems.map((item) => (
				<Link
					key={item.label}
					href={item.href}
					className={className(item.href)}
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

			<Link href='/api/logout' className={className('-')} prefetch={false}>
				<LucideLogOut className='fill-theme-gray-300' />
				<span className='hidden md:block'>Logout</span>
			</Link>
		</div>
	);
};
