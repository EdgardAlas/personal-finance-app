import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { useUpdateQueryParams } from '@/hooks/use-update-search-params';
import { cn } from '@/lib/cn';
import { generateFromObj } from '@bramus/pagination-sequence';
import { useSearchParams } from 'next/navigation';

export const TransactionsPagination = () => {
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
						page === '…' ? (
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
	);
};
