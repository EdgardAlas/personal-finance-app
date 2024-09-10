export const currencyFormat = (
	value: number,
	currency: string = 'USD',
	options: Intl.NumberFormatOptions = {}
) => {
	const currencyFormat = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		/* 	notation: 'compact',
		maximumFractionDigits: 2, */
		...options,
	});
	return currencyFormat.format(value);
};
