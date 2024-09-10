import FilterIcon from '@/assets/images/icon-filter-mobile.svg';
import SortIcon from '@/assets/images/icon-sort-mobile.svg';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SearchIcon } from 'lucide-react';

const sortOptions = [
	{ label: 'Latest', value: 'latest' },
	{ label: 'Oldest', value: 'oldest' },
	{ label: 'A to Z', value: 'a-z' },
	{ label: 'Z to A', value: 'z-a' },
	{ label: 'Highest', value: 'highest' },
	{ label: 'Lowest', value: 'lowest' },
];

export const SearchTransactions = () => {
	return (
		<div className='flex justify-between gap-5'>
			<Input
				placeholder='Search transactions'
				iconRight={SearchIcon}
				classNames={{
					container: 'md:max-w-[320px]',
				}}
			/>
			<div className='flex items-center gap-6'>
				<DropdownMenu>
					<DropdownMenuTrigger className='md:hidden'>
						<SortIcon aria-label='Sort' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{sortOptions.map((option) => (
							<DropdownMenuItem key={option.value}>
								{option.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger className='md:hidden'>
						<FilterIcon arial-label='Filter' />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='max-h-72 overflow-y-auto'>
						<DropdownMenuItem>All Transactions</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<div className='inline-flex items-center gap-2 max-md:hidden'>
					<label className='fz-preset-4 whitespace-nowrap'>Sort by</label>
					<Select>
						<SelectTrigger className='w-[114px]'>
							<SelectValue placeholder='Latest' />
						</SelectTrigger>
						<SelectContent>
							{sortOptions.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className='inline-flex items-center gap-2 max-md:hidden'>
					<label className='fz-preset-4'>Category</label>
					<Select>
						<SelectTrigger className='w-[177px]'>
							<SelectValue placeholder='All Transactions' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>All Transactions</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};
