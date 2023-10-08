import { BiLoaderAlt } from 'react-icons/bi'

import cn from 'classnames'
import styles from './styles.module.scss'

interface SpinnerProps {
	size?: number
	className?: string
	color: 'white' | 'black'
}

export const Spinner = ({ size, className, color }: SpinnerProps) => {
	return (
		<BiLoaderAlt
			className={cn(
				styles.spinner,
				className,
				color === 'white' ? styles.light : styles.dark,
			)}
			style={{ width: `${size}px`, height: `${size}px` }}
		/>
	)
}
