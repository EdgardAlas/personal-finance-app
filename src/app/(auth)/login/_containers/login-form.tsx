'use client';

import {
	LoginFormValues,
	loginValidations,
} from '@/app/(auth)/login/validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { wait } from '@/helpers/wait';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
	const { form, onSubmit } = useLoginForm();

	return (
		<FormContext className='auth-container' form={form} onSubmit={onSubmit}>
			<h1 className='fz-preset-1 text-theme-gray-900'>Login</h1>
			<section className='grid gap-4'>
				<FormInput
					input={Input}
					name='email'
					label='Email'
					type='email'
					autoFocus
				/>
				<FormInput
					input={PasswordInput}
					name='password'
					label={
						<div className='fz-preset-5-bold flex items-center justify-between'>
							<FormLabel>Password</FormLabel>
							<Link
								href='/forgot-password'
								className='text-theme-gray-900 underline'
							>
								Forgot password?
							</Link>
						</div>
					}
				/>
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

const useLoginForm = () => {
	const form = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(loginValidations),
	});

	const onSubmit = async (data: LoginFormValues) => {
		await wait(1000, data);
	};

	return { form, onSubmit };
};
