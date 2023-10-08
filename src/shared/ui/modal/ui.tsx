import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { useEscape } from './lib'
import styles from './styles.module.scss'
import cn from 'classnames'
import { CloseButton } from '@/shared/ui'

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	close: () => void
}

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<IModalProps>>(
	({ isOpen, close, children, className, ...props }, ref) => {
		useEscape(close)

		return (
			<div ref={ref} {...props} className={styles.modal}>
				<CloseButton className='flex items-end' />
				<section className={cn('container')}>{children}</section>
			</div>
		)
	},
)

Modal.displayName = 'Modal'
