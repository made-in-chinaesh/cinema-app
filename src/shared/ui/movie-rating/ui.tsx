import { PropsWithChildren } from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'
import { numberShorter } from '@/shared/utils'

interface MovieRatingProps extends PropsWithChildren {
	className?: string
	size?: 'small' | 'medium'
}

export const MovieRating = ({
	children,
	size = 'small',
	className,
}: MovieRatingProps) => {
	const isSmall = size === 'small'
	const isMedium = size === 'medium'

	return (
		<span
			className={cn(styles.rating, className, {
				[styles.small]: isSmall,
				[styles.medium]: isMedium,
			})}
		>
			{numberShorter(String(children))}
		</span>
	)
}
