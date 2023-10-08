import Image from 'next/image'
import { API_IMAGE_URL, IMovie } from '@/shared/api'
import { MovieRating } from '@/shared/ui'
import Link from 'next/link'
import { paths } from '@/shared/routing'

import styles from './styles.module.scss'

interface MovieItemProps {
	item: IMovie
}

export const MovieItem = ({ item }: MovieItemProps) => {
	return (
		<Link href={paths.movie(item.id)}>
			<div className={styles.item}>
				<div className={styles.imageWrapper}>
					<Image
						width={200}
						height={300}
						src={
							`${API_IMAGE_URL}/w500/${item.poster_path}` ||
							'/anna_de_armas.jpeg'
						}
						className={styles.image}
						alt={item.title}
					/>
				</div>
				<div className={styles.shadow}>
					<MovieRating className={styles.rating} size='medium'>
						{item.vote_average}
					</MovieRating>
					<div className={styles.wrap}>
						<h3 className={styles.title}>{item.title || item.name}</h3>
						<span className={styles.date}>
							{item.release_date || item.first_air_date || ''}
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
