import { AuthStoreProvider } from '@/context/auth-context';
import { currentUser } from '@/lib/current-user';

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
			{children}
		</AuthStoreProvider>
	);
};

export default DasboardLayout;
