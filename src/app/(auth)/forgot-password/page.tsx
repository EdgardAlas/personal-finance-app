import { ForgotPasswordForm } from '@/app/(auth)/forgot-password/_containers/forgot-password-form';
import React from 'react';

export const metadata = {
	title: 'Forgot Password',
	description: 'In case you forgot your password, you can reset it here.',
};

const ForgotPasswordPage = () => {
	return <ForgotPasswordForm />;
};

export default ForgotPasswordPage;
