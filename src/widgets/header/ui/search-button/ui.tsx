import { RiSearchLine } from 'react-icons/ri'

import styles from './styles.module.scss'

export const SearchButton = () => {
	return (
		<button className={styles.btn}>
			<RiSearchLine />
		</button>
	)
}
