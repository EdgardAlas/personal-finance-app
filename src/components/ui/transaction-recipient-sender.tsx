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
		<div className='flex items-center gap-4'>
			<Avatar>
				<AvatarImage
					src={icon || '/placeholder.jpg'}
					alt=''
					className='h-10 w-10'
				/>
				<AvatarFallback className='h-10 w-10'>{name[0]}</AvatarFallback>
			</Avatar>
			<p className='fz-preset-4-bold text-theme-gray-900'>{name}</p>
		</div>
	);
};
