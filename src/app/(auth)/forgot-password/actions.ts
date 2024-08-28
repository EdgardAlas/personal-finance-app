'use server';

import { forgotPasswordValidations } from '@/app/(auth)/forgot-password/validations';
import { encryptJWT } from '@/lib/jwt';
import { unAuthAction } from '@/lib/safe-action';
import { checkIfUserExistsByEmail } from '@/use-cases/check-if-user-exists';
import { sendEmailWithResetLink } from '@/use-cases/send-reset-link';
import { updateUserByEmail } from '@/use-cases/update-user';

export const sendResetLink = unAuthAction
	.schema(forgotPasswordValidations)
	.action(async ({ parsedInput: values }) => {
		const { email } = values;

		const userExists = await checkIfUserExistsByEmail(email);

		if (!userExists) {
			return 'success';
		}

		const token = await encryptJWT({ email }, '15m');

		await updateUserByEmail(email, { resetPasswordToken: token });

		console.log('Reset link sent to:', email);
		console.log('Reset token:', token);

		await sendEmailWithResetLink(email, token);

		return 'success';
	});
