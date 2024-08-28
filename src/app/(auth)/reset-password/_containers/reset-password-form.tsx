'use client';

import {
	ResetPasswordFormValues,
	resetPasswordValidations,
} from '@/app/(auth)/reset-password/validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { wait } from '@/helpers/wait';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const ResetPasswordForm = ({
	email,
	token,
}: {
	email: string;
	token: string;
}) => {
	const { form, onSubmit } = useResetPasswordForm({ email, token });

	return (
		<FormContext
			className='grid flex-1 gap-8 rounded-[0.75rem] bg-theme-white p-5 md:max-w-[35rem] md:p-8'
			form={form}
			onSubmit={onSubmit}
		>
			<h1 className='fz-preset-1 text-theme-gray-900'>Reset Password</h1>
			<section className='grid gap-4'>
				<Input name='email' readOnly value={email} />

				<FormInput
					input={PasswordInput}
					name='password'
					label='New Password'
					autoFocus
				/>

				<FormInput
					input={PasswordInput}
					name='confirmPassword'
					label='Confirm Password'
				/>
			</section>
			<div className='grid gap-2'>
				<Button loading={form.formState.isSubmitting}>Reset Password</Button>
				<small className='fz-preset-5'>
					The reset link is valid for 15 minutes. If you don&apos;t receive an
					email, check your spam folder. If it&apos;s not there, you can request
					another reset link{' '}
					<Link href='/forgot-password' className='font-bold underline'>
						here
					</Link>
					.
				</small>
			</div>
			<p className='text-center'>
				Remember your password?{' '}
				<Link href='/login' className='font-bold text-theme-gray-900 underline'>
					Login
				</Link>
			</p>
		</FormContext>
	);
};

const useResetPasswordForm = ({
	email,
	token,
}: {
	email: string;
	token: string;
}) => {
	const form = useForm<ResetPasswordFormValues>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: zodResolver(resetPasswordValidations),
	});

	const onSubmit = async (data: ResetPasswordFormValues) => {
		await wait(1000, {
			...data,
			email,
			token,
		});
	};

	return { form, onSubmit };
};
