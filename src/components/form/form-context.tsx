'use client';

import { ComponentProps, useState } from 'react';
import {
	FieldValues,
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	UseFormReturn,
} from 'react-hook-form';

interface FormContextProps<T extends FieldValues>
	extends Omit<ComponentProps<'form'>, 'onSubmit'> {
	form: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
	onValidationError?: SubmitErrorHandler<T>;
}

export const FormContext = <T extends FieldValues>(
	props: FormContextProps<T>
) => {
	const { onValidationError, onSubmit, form, ...rest } = props;
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormProvider {...form}>
			<form
				noValidate
				{...rest}
				onSubmit={form.handleSubmit(async () => {
					if (isLoading) {
						return;
					}

					setIsLoading(true);
					try {
						await onSubmit(form.getValues());
					} catch (error) {
						throw error;
					} finally {
						setIsLoading(false);
					}
				}, onValidationError)}
			/>
		</FormProvider>
	);
};
