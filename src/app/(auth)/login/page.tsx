import { LoginForm } from './_containers/login-form';

export const metadata = {
	title: 'Personal Finance App',
	description:
		'Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.',
};

const LoginPage = () => {
	return <LoginForm />;
};

export default LoginPage;
