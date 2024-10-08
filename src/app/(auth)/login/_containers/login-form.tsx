'use client';

import { loginAction } from '../_lib/login.actions';
import { LoginFormValues, loginSchema } from '../_lib/login.schemas';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { handleSafeActionResponse } from '@/lib/handle-safe-action-response';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
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
								tabIndex={-1}
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
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		await handleSafeActionResponse({
			action: loginAction(data),
			successMessage: 'Logged in successfully',
			loadingMessage: 'Logging in...',
		});
	};

	return { form, onSubmit };
};
