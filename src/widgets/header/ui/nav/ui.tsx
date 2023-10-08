import styles from './styles.module.scss'
import { items } from './config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export const Nav = () => {
	const { pathname } = useRouter()

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{items.map(item => {
					const isCurrentPage = item.href === pathname

					return (
						<li key={item.href} className={styles.item}>
							<Link
								href={item.href}
								className={cn(
									styles.link,
									isCurrentPage && styles.isCurrent,
								)}
							>
								{item.text}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
