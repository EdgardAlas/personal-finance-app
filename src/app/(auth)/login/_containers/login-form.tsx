'use client';

import {
	LoginFormValues,
	loginValidations,
} from '@/app/(auth)/login/validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
	const form = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(loginValidations),
	});

	return (
		<FormContext
			className='grid flex-1 gap-8 rounded-[0.75rem] bg-theme-white p-5 md:max-w-[35rem] md:p-8'
			form={form}
			onSubmit={async (data) => {
				await new Promise((resolve) => setTimeout(() => resolve(data), 1000));
			}}
		>
			<h1 className='fz-preset-1 text-theme-gray-900'>Login</h1>
			<section className='grid gap-4'>
				<FormInput
					input={Input}
					name='email'
					label='Email'
					type='email'
					autoFocus
				/>
				<FormInput input={PasswordInput} name='password' label='Password' />
			</section>
			<Button loading={form.formState.isSubmitting}>Login</Button>
			<p className='text-center'>
				Need to create an account?{' '}
				<Link
					href='/sign-up'
					className='font-bold text-theme-gray-900 underline'
				>
					Sign up
				</Link>
			</p>
		</FormContext>
	);
};
