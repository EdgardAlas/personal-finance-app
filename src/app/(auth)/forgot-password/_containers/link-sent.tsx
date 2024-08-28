import Link from 'next/link';
import React from 'react';

export const LinkSent = () => {
	return (
		<div className='auth-container'>
			<h1 className='fz-preset-1 text-theme-gray-900'>Reset Link Sent</h1>
			<p className='text-theme-gray-600 fz-preset-3'>
				We have sent you an email with instructions to reset your password.
			</p>
			<p className='text-center'>
				Remember your password?{' '}
				<Link href='/login' className='font-bold text-theme-gray-900 underline'>
					Login
				</Link>
			</p>
		</div>
	);
};
