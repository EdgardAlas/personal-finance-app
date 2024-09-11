import Ellipsis from '@/assets/images/icon-ellipsis.svg';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { currencyFormat } from '@/helpers/currency-format';

interface PotCardProps {
	title: string;
	totalSaved: number;
	target: number;
	color: string;
	progress: number;
	id: string;
}

export const PotCard = (_props: Partial<PotCardProps>) => {
	return (
		<article className='grid gap-8 rounded-[12px] bg-theme-white px-5 py-6'>
			<header className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-4'>
					<div
						className='size-4 rounded-full'
						style={{
							backgroundColor: 'green',
						}}
					/>
					<h2>Savings</h2>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Ellipsis className='cursor-pointer' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Edit Pot</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='text-theme-red'>
							Delete Pot
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>

			<div className='flex items-center justify-between'>
				<p className='fz-preset-4'>Total Saved</p>
				<p className='fz-preset-1 text-theme-gray-900'>{currencyFormat(159)}</p>
			</div>

			<div>
				<div className='relative h-2 w-full overflow-hidden rounded-full bg-theme-beige-100'>
					<div
						className='h-full'
						style={{ width: '7.95%', backgroundColor: 'green' }}
					/>
				</div>
				<div className='mt-5 flex justify-between'>
					<p className='fz-preset-5-bold'>7.95%</p>
					<p className='fz-preset-5'>Target of {currencyFormat(500)}</p>
				</div>
			</div>
			<div className='flex gap-4'>
				<Button className='flex-1' variant={'secondary'}>
					+ Add Money
				</Button>
				<Button className='flex-1' variant={'secondary'}>
					Withdraw
				</Button>
			</div>
		</article>
	);
};
