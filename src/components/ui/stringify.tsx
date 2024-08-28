import React from 'react';

interface StringifyProps {
	value: TODO;
	replacer?: (key: string, value: TODO) => TODO;
	space?: string | number;
}

export const Stringify = ({ value, replacer, space = 2 }: StringifyProps) => {
	return (
		<pre>
			<code>
				{JSON.stringify(
					value,
					replacer,
					typeof space === 'number' ? space : parseInt(space, 10)
				)}
			</code>
		</pre>
	);
};
