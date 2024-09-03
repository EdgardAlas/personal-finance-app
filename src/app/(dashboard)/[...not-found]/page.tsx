import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
	title: 'Page Not Found',
	description: 'The page you are looking for does not exist.',
};

const NotFoundPage = () => {
	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-4 px-4'>
			<div className='space-y-2 text-center'>
				<h1 className='text-4xl font-bold tracking-tighter text-theme-gray-900 sm:text-6xl'>
					404 - Page Not Found
				</h1>
				<p className='fz-preset-3 text-gray-500'>
					The page you are looking for does not exist.
				</p>
			</div>
			<Button asChild>
				<Link href='/' prefetch={false}>
					Go back to home
				</Link>
			</Button>
		</div>
	);
};

export default NotFoundPage;
