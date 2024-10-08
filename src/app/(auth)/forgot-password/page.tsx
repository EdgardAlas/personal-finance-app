import { ForgotPasswordForm } from './_containers/forgot-password-form';

export const metadata = {
	title: 'Forgot Password',
	description: 'In case you forgot your password, you can reset it here.',
};

const ForgotPasswordPage = () => {
	return <ForgotPasswordForm />;
};

export default ForgotPasswordPage;
