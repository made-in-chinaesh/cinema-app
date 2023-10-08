import { ISelectOption } from '../../types'
import { SelectHTMLAttributes } from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: ISelectOption[]
	className?: string
	defaultOption: string
}

export const Select = ({
	options,
	defaultOption,
	className,
	...props
}: SelectProps) => {
	return (
		<select defaultValue='' className={cn(styles.select, className)} {...props}>
			<option value='' defaultChecked>
				{defaultOption || ''}
			</option>
			{options.map(item => (
				<option key={item.name} value={item.value}>
					{item.name}
				</option>
			))}
		</select>
	)
}
