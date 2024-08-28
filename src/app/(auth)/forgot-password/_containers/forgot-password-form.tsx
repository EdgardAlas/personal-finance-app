'use client';

import {
	ForgotPasswordFormValues,
	forgotPasswordValidations,
} from '@/app/(auth)/forgot-password/validations';
import { FormContext } from '@/components/form/form-context';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { wait } from '@/helpers/wait';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const ForgotPasswordForm = () => {
	const { form, onSubmit } = useForgotPasswordForm();

	return (
		<FormContext
			className='grid flex-1 gap-8 rounded-[0.75rem] bg-theme-white p-5 md:max-w-[35rem] md:p-8'
			form={form}
			onSubmit={onSubmit}
		>
			<h1 className='fz-preset-1 text-theme-gray-900'>Forgot Password</h1>
			<section className='grid gap-4'>
				<FormInput input={Input} name='email' label='Email' type='email' />
			</section>
			<Button loading={form.formState.isSubmitting}>Send reset code</Button>
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
	const form = useForm<ForgotPasswordFormValues>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(forgotPasswordValidations),
	});

	const onSubmit = async (data: ForgotPasswordFormValues) => {
		await wait(1000, data);
	};

	return { form, onSubmit };
};
