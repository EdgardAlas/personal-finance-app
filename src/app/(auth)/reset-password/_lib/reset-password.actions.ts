'use server';

import { resetPasswordSchema } from './reset-password.schemas';
import { CustomError } from '@/helpers/custom-error';
import { hashPassword } from '@/lib/bcrypt';
import { safeDecryptJWT } from '@/lib/jwt';
import { unAuthAction } from '@/lib/safe-action';
import { checkIfUserExistsByEmail } from '@/use-cases/check-if-user-exists';
import { updateUserByEmail } from '@/use-cases/update-user';
import { redirect } from 'next/navigation';

export const resetPasswordAction = unAuthAction
	.schema(resetPasswordSchema)
	.action(async ({ parsedInput: values }) => {
		const { password, email, token } = values;

		const defaultError = 'An error occurred while resetting your password';

		const isTokenValid = await safeDecryptJWT<{ email: string }>(token);

		if (!isTokenValid) {
			throw new CustomError(defaultError);
		}

		if (isTokenValid.email !== email) {
			throw new CustomError(defaultError);
		}

		const userExists = await checkIfUserExistsByEmail(email);

		if (!userExists) {
			throw new CustomError(defaultError);
		}

		if (!userExists.resetPasswordToken) {
			throw new CustomError('You have already reset your password');
		}

		if (userExists.resetPasswordToken !== token) {
			await updateUserByEmail(email, { resetPasswordToken: null });
			throw new CustomError(defaultError);
		}

		await updateUserByEmail(email, {
			password: await hashPassword(password),
			resetPasswordToken: null,
		});

		redirect('/login');
	});
