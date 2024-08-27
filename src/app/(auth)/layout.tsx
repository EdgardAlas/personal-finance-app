import Logo from '@/assets/images/logo-large.svg';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='mx-auto flex min-h-dvh max-w-[90rem] lg:p-5'>
			<section className='hidden w-[25rem] items-center justify-center lg:flex xl:w-[28.125rem] 2xl:w-[37.5rem]'>
				<div
					className='relative h-full w-full rounded-[0.75rem] bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: `url(/illustration-authentication.svg)`,
					}}
				>
					<Logo className='absolute left-[2.5rem] top-[2.5rem]' />
					<section className='text-theme-white absolute bottom-[2.5rem] left-0 grid gap-6 px-[2.5rem]'>
						<h2 className='text-preset-1'>
							Keep track of your money and save your future
						</h2>
						<p className='text-preset-4'>
							Personal finance app puts you in control of your spending. Track
							transactions, set budgets, and add to savings pots easily.
						</p>
					</section>
				</div>
			</section>

			<section className='flex flex-1 flex-col items-center justify-center lg:flex-row'>
				<section className='bg-theme-gray-900 grid h-[4.375rem] w-full place-content-center rounded-b-[0.75rem] lg:hidden'>
					<Logo />
				</section>

				<div className='flex min-h-[calc(100vh-4.375rem)] w-full items-center px-4 md:justify-center'>
					{children}
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;
