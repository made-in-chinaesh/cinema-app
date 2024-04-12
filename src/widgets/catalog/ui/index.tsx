import { MovieItem } from '@/entities/movie'
import { Filters } from '@/features/filters'
import { Spinner, Title } from '@/shared/ui'
import { findGenreWithId, useCatalog } from '@/widgets/catalog/lib'

import styles from './styles.module.scss'

interface CatalogProps {
	title: string
}

export const Catalog = ({ title }: CatalogProps) => {
	const { data, isLoading, genre, parentRef, childRef } = useCatalog()

	return (
		<div className='container'>
			<Title className={styles.title}>
				{title}
				{genre && `: ${findGenreWithId(genre)}`}
			</Title>
			<Filters />
			<div ref={parentRef} className={styles.grid}>
				{data.map(item => (
					<MovieItem key={item.id} item={item} />
				))}
			</div>
			<div ref={childRef} />
			{true && (
				<div className={styles.loader}>
					<Spinner size={60} />
				</div>
			)}
		</div>
	)
}
