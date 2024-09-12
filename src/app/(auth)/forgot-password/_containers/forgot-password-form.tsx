'use client';

import { sendResetLinkAction } from '../_lib/forgot-password.actions';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleSafeActionResponse } from '@/lib/handle-safe-action-response';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LinkSent } from '../_containers/link-sent';
import {
	ForgotPasswordFormValues,
	forgotPasswordSchema,
} from '../_lib/forgot-password.schemas';

export const ForgotPasswordForm = () => {
	const { form, onSubmit, isLinkSent } = useForgotPasswordForm();

	if (isLinkSent) {
		return <LinkSent />;
	}

	return (
		<FormContext className='auth-container' form={form} onSubmit={onSubmit}>
			<h1 className='fz-preset-1 text-theme-gray-900'>Forgot Password</h1>
			<section className='grid gap-4'>
				<FormInput input={Input} name='email' label='Email' type='email' />
			</section>
			<Button loading={form.formState.isSubmitting}>Send Reset Link</Button>
			<p className='text-center'>
				Remember your password?{' '}
				<Link href='/login' className='font-bold text-theme-gray-900 underline'>
					Login
				</Link>
			</p>
		</FormContext>
	);
};

const useForgotPasswordForm = () => {
	const [isLinkSent, setIsLinkSent] = useState(false);

	const form = useForm<ForgotPasswordFormValues>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(forgotPasswordSchema),
	});

	const onSubmit = async (data: ForgotPasswordFormValues) => {
		if (
			await handleSafeActionResponse({
				action: sendResetLinkAction(data),
				loadingMessage: 'Sending reset link...',
				successMessage: 'Reset link sent!',
			})
		) {
			setIsLinkSent(true);
		}
	};

	return { form, onSubmit, isLinkSent };
};
