import styles from './styles.module.scss'

import { RxHamburgerMenu } from 'react-icons/rx'
import { useActions } from '@/shared/hooks'

export const Burger = () => {
	const { toggleMenu } = useActions()

	return (
		<button className={styles.btn} onClick={() => toggleMenu()}>
			<RxHamburgerMenu />
		</button>
	)
}
