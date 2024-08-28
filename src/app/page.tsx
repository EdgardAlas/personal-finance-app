import { Button } from '@/components/ui/button';
import { Stringify } from '@/components/ui/stringify';
import { signOut } from '@/lib/auth';
import { currentUser } from '@/lib/current-user';

export default async function Home() {
	const user = await currentUser();

	return (
		<>
			<h1 className='text-center text-4xl font-bold'>Hello World</h1>
			<Stringify value={user} />
			<form
				action={async () => {
					'use server';
					await signOut({ redirect: true, redirectTo: '/login' });
				}}
			>
				<Button>Logout</Button>
			</form>
		</>
	);
}
