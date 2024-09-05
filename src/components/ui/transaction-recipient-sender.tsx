import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TransactionRecipientSenderProps {
	icon: string;
	name: string;
}

export const TransactionRecipientSender = ({
	icon,
	name,
}: TransactionRecipientSenderProps) => {
	return (
		<div className='inline-flex items-center gap-4'>
			<Avatar>
				<AvatarImage src={icon || '/placeholder.jpg'} alt='' />
				<AvatarFallback>{name?.[0]}</AvatarFallback>
			</Avatar>
			<p className='fz-preset-4-bold text-theme-gray-900'>{name}</p>
		</div>
	);
};
