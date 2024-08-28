/**
 * Wait for a specified amount of time.
 * @param ms - The amount of time to wait in milliseconds.
 * @param data - The data to resolve the promise with.
 *
 * @example
 * ```ts
 * const data = await wait(1000, 'Hello, World!');
 * console.log(data); // 'Hello, World!'
 * ```
 */
export const wait = (ms: number, data?: unknown) =>
	new Promise((resolve) => setTimeout(() => resolve(data), ms));
