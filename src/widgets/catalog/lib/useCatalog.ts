import { API_KEY, API_URL, IMovie, IMovieData, LANGUAGE } from '@/shared/api'
import { useActions, useTypedSelector } from '@/shared/hooks'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export const useCatalog = () => {
	const [data, setData] = useState<IMovie[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const { query } = useRouter()

	const genre = query.genre

	const { page } = useTypedSelector(state => state.filter)
	const { nextPage, setDefaultPage } = useActions()

	const parentRef = useRef<HTMLDivElement>(null)
	const childRef = useRef<HTMLDivElement>(null)

	const fetchMovies = async (page: number) => {
		try {
			setIsLoading(true)
			const response = await axios.get<IMovieData>(
				`${API_URL}/discover/movie`,
				{
					params: {
						api_key: API_KEY,
						language: LANGUAGE,
						with_genres: genre ?? '',
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

	const scrollHandler = (e: any) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			1
		) {
			nextPage()
		}
	}

	useEffect(() => {
		if (genre && page !== 1) setDefaultPage()
	}, [genre])

	useEffect(() => {
		fetchMovies(page)
	}, [genre, page])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.addEventListener('scroll', scrollHandler)
		}
	}, [])

	return {
		data,
		isLoading,
		genre,
		parentRef,
		childRef,
	}
}
