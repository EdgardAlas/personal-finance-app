import { ResetPasswordForm } from './_containers/reset-password-form';
import { safeDecryptJWT } from '@/lib/jwt';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Reset Password',
	description: 'Reset your password here.',
};

const ResetPasswordPage = async ({
	searchParams: { token },
}: {
	searchParams: { token: string };
}) => {
	const decyptedToken = await safeDecryptJWT<{
		email: string;
	}>(token);

	if (!decyptedToken) {
		redirect('/forgot-password');
	}

	return <ResetPasswordForm email={decyptedToken.email} token={token} />;
};

export default ResetPasswordPage;
