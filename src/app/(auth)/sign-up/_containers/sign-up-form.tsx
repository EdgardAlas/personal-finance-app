'use client';

import { signUpAction } from '@/app/(auth)/sign-up/actions';
import {
	SignUpFormValues,
	signUpValidations,
} from '@/app/(auth)/sign-up/validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { handleSafeActionResponse } from '@/lib/handle-safe-action-response';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
	const { form, onSubmit } = useSignUpForm();

	return (
		<FormContext className='auth-container' form={form} onSubmit={onSubmit}>
			<h1 className='fz-preset-1 text-theme-gray-900'>Sign Up</h1>
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
			<Button loading={form.formState.isSubmitting}>Sign Up</Button>
			<p className='text-center'>
				Already have an account?{' '}
				<Link href='/login' className='font-bold text-theme-gray-900 underline'>
					Login
				</Link>
			</p>
		</FormContext>
	);
};

const useSignUpForm = () => {
	const form = useForm<SignUpFormValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'UTC',
		},
		resolver: zodResolver(signUpValidations),
	});

	const onSubmit = async (data: SignUpFormValues) => {
		await handleSafeActionResponse({
			action: signUpAction(data),
			successMessage: 'Welcome! You are now signed up.',
			loadingMessage: 'Signing up...',
		});
	};

	return { form, onSubmit };
};
