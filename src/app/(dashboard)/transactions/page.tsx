'use client';

import FilterIcon from '@/assets/images/icon-filter-mobile.svg';
import SortIcon from '@/assets/images/icon-sort-mobile.svg';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { PageTitle } from '@/components/ui/page-title';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { TransactionAmout } from '@/components/ui/transaction-amout';
import { TransactionRecipientSender } from '@/components/ui/transaction-recipient-sender';
import { VanillaCard } from '@/components/ui/vanilla-card';
import { SearchIcon } from 'lucide-react';
import { generateFromObj } from '@bramus/pagination-sequence';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/cn';
import { useUpdateQueryParams } from '@/hooks/use-update-search-params';

const sortOptions = [
	{ label: 'Latest', value: 'latest' },
	{ label: 'Oldest', value: 'oldest' },
	{ label: 'A to Z', value: 'a-z' },
	{ label: 'Z to A', value: 'z-a' },
	{ label: 'Highest', value: 'highest' },
	{ label: 'Lowest', value: 'lowest' },
];

const TransactionsPage = () => {
	const sequence = generateFromObj({
		curPage: 1,
		numPages: 100,
		numPagesAroundCurrent: 1,
		numPagesAtEdges: 1,
	});

	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get('page')) || 1;

	const { updatedSearchParams } = useUpdateQueryParams();

	const goToPage = (page: number) => {
		return updatedSearchParams({
			page: page.toString(),
		});
	};

	const goToPreviousPage = () => {
		if (currentPage === 1) {
			return updatedSearchParams({
				page: '1',
			});
		}

		return updatedSearchParams({
			page: (currentPage - 1).toString(),
		});
	};

	const goToNextPage = () => {
		return updatedSearchParams({
			page: (currentPage + 1).toString(),
		});
	};

	return (
		<>
			<PageTitle>Transactions</PageTitle>

			<VanillaCard>
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

				<Table>
					<TableHeader className='fz-preset-5'>
						<TableRow>
							<TableHead>Recipient / Sender</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>Transaction Date</TableHead>
							<TableHead className='text-right'>Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{transactions.map((transaction, index) => (
							<TableRow key={index}>
								<TableCell className='font-medium'>
									<TransactionRecipientSender
										icon={transaction.icon}
										name={transaction.name}
									/>
								</TableCell>
								<TableCell className='fz-preset-5'>
									{transaction.category}
								</TableCell>
								<TableCell className='fz-preset-5'>
									{transaction.date}
								</TableCell>
								<TableCell className='text-right'>
									<TransactionAmout amount={transaction.amount} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				<Pagination>
					<PaginationContent className='gap- w-full flex-wrap justify-start sm:justify-between'>
						<PaginationPrevious
							href={goToPreviousPage()}
							className='h-10 border border-theme-beige-500 max-sm:hidden'
						/>

						<div className='flex flex-wrap gap-2'>
							<PaginationPrevious
								href={goToPreviousPage()}
								className='h-10 border border-theme-beige-500 sm:hidden'
							/>
							{sequence.map((page, index) =>
								page === '...' ? (
									<PaginationEllipsis key={index} />
								) : (
									<PaginationItem key={index}>
										<PaginationLink
											href={goToPage(Number(page))}
											className={cn(
												'border border-theme-beige-500 text-theme-gray-900',
												{
													'bg-theme-gray-900 text-theme-white':
														currentPage === page,
												}
											)}
										>
											{page}
										</PaginationLink>
									</PaginationItem>
								)
							)}
							<PaginationNext
								href={goToNextPage()}
								className='h-10 border border-theme-beige-500 sm:hidden'
							/>
						</div>

						<PaginationNext
							href={goToNextPage()}
							className='h-10 border border-theme-beige-500 max-sm:hidden'
						/>
					</PaginationContent>
				</Pagination>
			</VanillaCard>
		</>
	);
};

export default TransactionsPage;

const transactions = [
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
	{
		name: 'Emma Richardson',
		amount: 100,
		date: '19 Aug 2021',
		category: 'Credit Card',
		icon: '/emma-richardson.jpg',
	},
];
