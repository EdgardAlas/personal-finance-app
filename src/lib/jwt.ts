import { env } from '@/lib/env';
import { SignJWT, jwtVerify } from 'jose';

const generateKey = () => {
	const { JWT_SECRET } = env;

	return new TextEncoder().encode(JWT_SECRET);
};

export const encryptJWT = (payload: Record<string, TODO>, expireIn: string) => {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(expireIn || '15m')
		.sign(generateKey());
};

export const decryptJWT = async <T>(token: string): Promise<T> => {
	const { payload } = await jwtVerify(token, generateKey(), {
		algorithms: ['HS256'],
	});

	return payload as T;
};

export const safeDecryptJWT = async <T>(token: string): Promise<T | null> => {
	try {
		const { payload } = await jwtVerify(token, generateKey(), {
			algorithms: ['HS256'],
		});

		return payload as T;
	} catch (_error) {
		return null;
	}
};
