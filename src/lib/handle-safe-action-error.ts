import { SafeActionResult } from 'next-safe-action';
import { toast } from 'sonner';

interface HandleSafeActionErrorProps {
	toastId?: string | number;
	response: SafeActionResult<TODO, TODO, TODO> | undefined;
	errorMessage?: string;
	focusOnFirstError?: boolean;
}

export const handleSafeActionError = ({
	toastId: id,
	response,
	errorMessage,
	focusOnFirstError = true,
}: HandleSafeActionErrorProps) => {
	if (response?.serverError) {
		toast.error(errorMessage ?? response.serverError, {
			id,
		});

		return true;
	}
	if (response?.validationErrors) {
		const firstId = Object.keys(response?.validationErrors)[0];
		toast.error(
			(
				response?.validationErrors as Record<
					string,
					{
						_errors: string[];
					}
				>
			)?.[firstId]?.['_errors']?.[0] ?? 'An error occurred',
			{
				id,
			}
		);

		if (focusOnFirstError) {
			document.getElementById(firstId)?.focus();
		}

		return true;
	}

	return false;
};
