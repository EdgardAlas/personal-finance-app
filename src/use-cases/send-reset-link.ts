import { env } from '@/lib/env';
import { Resend } from 'resend';

export const sendEmailWithResetLink = async (email: string, token: string) => {
	const resend = new Resend(env.RESEND_KEY);

	const { data, error } = await resend.emails.send({
		from: 'JocoteSV <finance@no-reply.jocotesv.com>',
		to: [email],
		subject: 'Reset your password',
		html: `
		<p>Click the link below to reset your password:</p>
		<p><a href="${env.BASE_URL}/reset-password?token=${token}">Reset Password</a></p>
		<p>
		If the link above does not work, copy and paste the following URL into your browser:
		</p>
		<p>${env.BASE_URL}/reset-password?token=${token}</p>
		`,
	});

	if (error) {
		console.error('Error sending reset link:', error);
	}

	return data;
};
