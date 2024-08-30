import { AuthStoreProvider } from '@/context/auth-context';
import { currentUser } from '@/lib/current-user';
import { DesktopSidebar } from './_containers/desktop-sidebar';
import { MobileSidebar } from './_containers/mobile-sidebar';

const DasboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();
	return (
		<AuthStoreProvider
			initialValue={{
				user: {
					email: user?.email ?? '',
					id: user?.id ?? '',
					name: user?.name ?? '',
				},
			}}
		>
			<main className='relative flex min-h-dvh'>
				<DesktopSidebar />

				<div className='flex-1 px-4 py-6 md:px-10 md:py-8 xl:px-10 xl:py-8'>
					{children}
				</div>

				<MobileSidebar />
			</main>
		</AuthStoreProvider>
	);
};

export default DasboardLayout;
