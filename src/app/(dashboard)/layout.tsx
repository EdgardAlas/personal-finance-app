import { AuthStoreProvider } from '@/context/auth-context';
import { DesktopSidebar } from './_containers/desktop-sidebar';
import { MobileSidebar } from './_containers/mobile-sidebar';
import { currentUser } from '@/lib/current-user';

const DasboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await currentUser();

	return (
		<AuthStoreProvider
			initialValue={{
				user,
			}}
		>
			<main className='relative flex min-h-dvh'>
				<DesktopSidebar />

				<div className='flex flex-1 flex-col gap-8 bg-background px-4 py-6 pb-20 md:px-10 md:py-8 xl:px-10 xl:py-8'>
					{children}
				</div>

				<MobileSidebar />
			</main>
		</AuthStoreProvider>
	);
};

export default DasboardLayout;
