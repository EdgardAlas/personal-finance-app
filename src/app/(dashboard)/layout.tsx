import { AuthStoreProvider } from '@/context/auth-context';
import { DesktopSidebar } from './_containers/desktop-sidebar';
import { MobileSidebar } from './_containers/mobile-sidebar';
import { currentUser } from '@/lib/current-user';
import { SidebarProvider } from '@/context/sidebar-context';
import { cookies } from 'next/headers';

const DasboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();
	const isSidebarOpen = cookies().get('sidebar')?.value === 'open';

	return (
		<AuthStoreProvider
			initialValue={{
				user,
			}}
		>
			<SidebarProvider
				initialValue={{
					open: isSidebarOpen,
				}}
			>
				<main className='relative flex min-h-dvh'>
					<DesktopSidebar />

					<div className='flex flex-1 flex-col gap-8 bg-background px-4 pb-20 pt-6 md:px-10 md:pt-8 xl:px-10 xl:py-8'>
						{children}
					</div>

					<MobileSidebar />
				</main>
			</SidebarProvider>
		</AuthStoreProvider>
	);
};

export default DasboardLayout;
