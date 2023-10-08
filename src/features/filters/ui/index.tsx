import { Select } from './select'
import { filterGenres } from '@/features/filters/config'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

export const Filters = () => {
	const router = useRouter()

	return (
		<section className={styles.section}>
			<Select
				options={filterGenres}
				defaultOption='По жанру'
				value={router.query.genre || ''}
				onChange={e => {
					const genreId = e.target.value

					router.push({
						query: {
							...router.query,
							genre: genreId,
						},
					})
				}}
			/>
		</section>
	)
}
