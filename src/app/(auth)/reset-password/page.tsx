import { ResetPasswordForm } from '@/app/(auth)/reset-password/_containers/reset-password-form';
import React from 'react';

export const metadata = {
	title: 'Reset Password',
	description: 'Reset your password here.',
};

const ResetPasswordPage = () => {
	return <ResetPasswordForm email='email@test.com' token='token' />;
};

export default ResetPasswordPage;
