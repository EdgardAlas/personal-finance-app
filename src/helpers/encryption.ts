import { env } from '@/lib/env';
import crypto from 'crypto';

const { ENCRYPTION_KEY } = env;
const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16;

export function encrypt(value: string): string {
	const iv = crypto.randomBytes(IV_LENGTH);
	const cipher = crypto.createCipheriv(
		ALGORITHM,
		Buffer.from(ENCRYPTION_KEY, 'hex'),
		iv
	);
	let encrypted = cipher.update(value);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(encryptedValue: string): string {
	const [ivHex, encryptedHex] = encryptedValue.split(':');
	const iv = Buffer.from(ivHex, 'hex');
	const encryptedText = Buffer.from(encryptedHex, 'hex');
	const decipher = crypto.createDecipheriv(
		ALGORITHM,
		Buffer.from(ENCRYPTION_KEY, 'hex'),
		iv
	);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
}
