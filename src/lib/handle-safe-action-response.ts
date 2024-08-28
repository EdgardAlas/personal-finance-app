'use client';

import { handleSafeActionError } from '@/lib/handle-safe-action-error';
import { SafeActionResult } from 'next-safe-action';
import { toast } from 'sonner';

export const handleSafeActionResponse = async ({
	action,
	successMessage = 'Success',
	errorMessage,
	loadingMessage = 'Loading...',
}: {
	action: Promise<SafeActionResult<TODO, TODO, TODO, TODO> | undefined>;
	successMessage?: string;
	errorMessage?: string;
	loadingMessage?: string;
}) => {
	if (!action) {
		toast.error('An error occurred. Please try again later.');
		return false;
	}

	const id = toast.loading(loadingMessage);
	const response = await action;

	if (
		handleSafeActionError({
			response,
			toastId: id,
			errorMessage,
		})
	) {
		return false;
	}

	toast.success(successMessage, { id });

	return true;
};
