import { useActions, useTypedSelector } from '@/shared/hooks'
import { items } from '../nav'
import { useRouter } from 'next/router'
import { CloseButton } from '@/shared/ui'

import Link from 'next/link'
import cn from 'classnames'
import styles from './styles.module.scss'

export const Menu = () => {
	const { isOpen } = useTypedSelector(state => state.header)
	const { toggleMenu } = useActions()

	const { pathname } = useRouter()

	return (
		<div className={cn(styles.menu, isOpen && styles.isOpenMenu)}>
			<CloseButton
				className={styles.menuClose}
				onClick={() => toggleMenu()}
			/>
			{/*<GrClose className={styles.closeBtn} />*/}
			<ul className={styles.list}>
				{items.map(item => {
					const isCurrentPage = pathname === item.href

					return (
						<li key={item.href} className={styles.item}>
							<Link
								href={item.href}
								className={cn(
									styles.link,
									isCurrentPage && styles.isCurrent,
								)}
								onClick={() => toggleMenu()}
							>
								{item.text}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
