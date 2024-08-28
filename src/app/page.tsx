import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export default function Home() {
	redirect('/login');

	return (
		<>
			<h1 className='text-center text-4xl font-bold'>Hello World</h1>
			<Button>Click me</Button>
		</>
	);
}
