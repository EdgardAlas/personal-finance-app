'use client';

import { LinkSent } from '../_containers/link-sent';
import {
	ForgotPasswordFormValues,
	forgotPasswordValidations,
} from '../validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { wait } from '@/helpers/wait';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
		resolver: zodResolver(forgotPasswordValidations),
	});

	const onSubmit = async (data: ForgotPasswordFormValues) => {
		const id = toast.loading('Sending reset link...');
		await wait(1000, data);
		setIsLinkSent(true);
		toast.success('Reset link sent', { id });
	};

	return { form, onSubmit, isLinkSent };
};
