'use client';

import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	return (
		<FormContext
			className='bg-theme-white grid flex-1 gap-8 rounded-[0.75rem] p-5 md:max-w-[35rem] md:p-8'
			form={form}
			onSubmit={async (data) => {
				await new Promise((resolve) => setTimeout(() => resolve(data), 1000));
			}}
		>
			<h1 className='text-theme-gray-900 text-preset-1'>Sign Up</h1>
			<section className='grid gap-4'>
				<FormInput input={Input} name='name' label='Name' autoFocus />
				<FormInput input={Input} name='email' label='Email' type='email' />
				<FormInput
					input={PasswordInput}
					name='password'
					label='Create Password'
					description='Passwords must be at least 8 characters'
				/>
			</section>
			<Button loading={form.formState.isSubmitting}>Login</Button>
			<p className='text-center'>
				Already have an account?{' '}
				<Link href='/login' className='text-theme-gray-900 font-bold underline'>
					Login
				</Link>
			</p>
		</FormContext>
	);
};
