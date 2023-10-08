import { ButtonHTMLAttributes, forwardRef } from 'react'
import { MdKeyboardArrowLeft as ArrowIcon } from 'react-icons/md'

import styles from './styles.module.scss'
import cn from 'classnames'

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
	({ className, ...props }, ref) => (
		<button className={cn(styles.btn, className)} ref={ref} {...props}>
			<ArrowIcon />
		</button>
	),
)

SliderButton.displayName = 'SliderButton'
