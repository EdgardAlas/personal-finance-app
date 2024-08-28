import timezones from 'timezones-list';

export const verifyTimezone = async (timezone: string) => {
	const isValidTimezone = timezones.some((tz) => tz.tzCode === timezone);

	return isValidTimezone;
};
