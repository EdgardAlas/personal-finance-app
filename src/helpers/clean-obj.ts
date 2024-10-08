export const cleanObj = (obj: Record<string, unknown>) => {
	return Object.fromEntries(
		Object.entries(obj).filter(
			([_, v]) => v !== null && v !== undefined && v !== ''
		)
	);
};
