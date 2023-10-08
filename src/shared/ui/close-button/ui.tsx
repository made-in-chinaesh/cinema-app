import { ButtonHTMLAttributes, FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'


import cn from 'classnames'
import styles from './styles.module.scss'

interface ICloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const CloseButton: FC<ICloseButtonProps> = ({ className, ...props }) => {
	return (
		<button className={cn(styles.btn, className)} {...props}>
			<IoCloseOutline />
		</button>
	)
}
