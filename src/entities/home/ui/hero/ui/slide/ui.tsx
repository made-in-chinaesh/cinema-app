import { API_IMAGE_URL, IMovie } from '@/shared/api'
import { MovieRating, Title } from '@/shared/ui'

import styles from './styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { paths } from '@/shared/routing'
import { CSSProperties } from 'react'

interface HeroSlideProps {
	item: IMovie
	isActiveSlide: boolean
}

export const HeroSlide = ({ item, isActiveSlide }: HeroSlideProps) => {
	return (
		<Link href={paths.movie(item?.id)}>
			<div
				className={cn(styles.item, {
					[styles.isActiveSlide]: isActiveSlide,
				})}
				style={
					{
						background: `url(${API_IMAGE_URL}/original/${item?.backdrop_path}) center / cover`,
					} as CSSProperties
				}
			>
				<Title className={styles.title}>{item?.title}</Title>
				<div className='centred'>
					<MovieRating size='medium'>{item?.vote_average}</MovieRating>
					<span className={styles.date}>{item?.release_date}</span>
				</div>
			</div>
		</Link>
	)
}
