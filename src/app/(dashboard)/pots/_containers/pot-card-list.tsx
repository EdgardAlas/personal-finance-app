import { PotCard } from '@/app/(dashboard)/pots/_containers/pot-card';

export const PotCardList = () => {
	return (
		<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
			<PotCard />
			<PotCard />
			<PotCard />
		</div>
	);
};
