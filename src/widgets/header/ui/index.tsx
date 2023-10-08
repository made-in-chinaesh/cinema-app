import styles from './styles.module.scss'
import cn from 'classnames'

import { Nav } from './nav'
import { Logo } from './logo'
import { SearchButton } from './search-button'
import { Burger } from './burger'
import { Menu } from './menu'

export const Header = () => {
	return (
		<header className={cn('container', styles.header)}>
			<div className={styles.row}>
				<Logo />
				<Nav />
			</div>
			<div className={styles.row}>
				<SearchButton />
				<Burger />
			</div>
			<Menu />
		</header>
	)
}
