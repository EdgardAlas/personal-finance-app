'use server';

import { forgotPasswordSchema } from './forgot-password.schemas';
import { encryptJWT } from '@/lib/jwt';
import { unAuthAction } from '@/lib/safe-action';
import { checkIfUserExistsByEmail } from '@/use-cases/check-if-user-exists';
import { sendEmailWithResetLink } from '@/use-cases/send-reset-link';
import { updateUserByEmail } from '@/use-cases/update-user';

export const sendResetLinkAction = unAuthAction
	.schema(forgotPasswordSchema)
	.action(async ({ parsedInput: values }) => {
		const { email } = values;

		const userExists = await checkIfUserExistsByEmail(email);

		if (!userExists) {
			return 'success';
		}

		const token = await encryptJWT({ email }, '15m');

		await updateUserByEmail(email, { resetPasswordToken: token });

		await sendEmailWithResetLink(email, token);

		return 'success';
	});
