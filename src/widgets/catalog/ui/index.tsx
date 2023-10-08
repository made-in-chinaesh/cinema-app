import { Title } from '@/shared/ui'
import { Filters } from '@/features/filters'
import { useRouter } from 'next/router'
import { findGenreWithId } from '@/widgets/catalog/lib'
import { API_KEY, API_URL, IMovie, IMovieData, LANGUAGE } from '@/shared/api'
import { useEffect, useRef, useState } from 'react'
import { MovieItem } from '@/entities/movie'
import { useActions, useTypedSelector } from '@/shared/hooks'

import styles from './styles.module.scss'
import axios from 'axios'

interface CatalogProps {
	title: string
}

export const Catalog = ({ title }: CatalogProps) => {
	const [data, setData] = useState<IMovie[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const { query } = useRouter()

	const { page } = useTypedSelector(state => state.filter)
	const { nextPage, setDefaultPage } = useActions()

	const parentRef = useRef<HTMLDivElement>(null)
	const childRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (query.genre && page !== 1) {
			setDefaultPage()
		}
	}, [query.genre])

	useEffect(() => {
		fetchMovies(page, String(query.genre))
	}, [query.genre, page])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.addEventListener('scroll', scrollHandler)
		}
	}, [])

	async function fetchMovies(page: number, genre: string) {
		try {
			setIsLoading(true)
			const response = await axios.get<IMovieData>(
				`${API_URL}/discover/movie`,
				{
					params: {
						api_key: API_KEY,
						language: LANGUAGE,
						with_genres: genre || '',
						page,
					},
				},
			)

			const movies = response.data.results

			page === 1 ? setData(movies) : setData(prev => [...prev, ...movies])
		} catch (e) {
			console.log(e)
		} finally {
			setTimeout(() => setIsLoading(false), 5000)
		}
	}

	function scrollHandler(e: any) {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			1
		) {
			nextPage()
		}
	}

	return (
		<div className='container'>
			<Title className={styles.title}>
				{title}
				{query.genre ? `: ${findGenreWithId(query?.genre)}` : ''}
			</Title>
			<Filters />
			<div ref={parentRef} className={styles.grid}>
				{data.map(item => (
					<MovieItem key={item.id} item={item} />
				))}
			</div>
			{isLoading && <div className={styles.loading}>Loading more...</div>}
			<div ref={childRef} />
		</div>
	)
}
