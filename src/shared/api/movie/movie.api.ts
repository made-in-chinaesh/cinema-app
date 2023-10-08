import type { IMovie, IMovieData, IMovieGenreData } from '@/shared/api'
import { api, API_KEY, LANGUAGE } from '@/shared/api'

const MOVIE = 'movie'

export const movieApi = api.injectEndpoints({
	endpoints: builder => ({
		getMovie: builder.query<IMovie, number>({
			query: (id: number) => ({
				url: `/${MOVIE}/${id}`,
				params: {
					api_key: API_KEY,
					language: LANGUAGE,
				},
			}),
		}),
		getNowPlayingMovies: builder.query<IMovieData, number>({
			query: (page = 1) => ({
				url: `/${MOVIE}/now_playing`,
				params: {
					api_key: API_KEY,
					language: LANGUAGE,
					page,
				},
			}),
		}),
		getMovieGenres: builder.query<IMovieGenreData, null>({
			query: () => ({
				url: `/genre/${MOVIE}/list`,
				params: {
					api_key: API_KEY,
					language: LANGUAGE,
				},
			}),
		}),
		getMoviesByGenre: builder.query<
			IMovieData,
			{
				genreId: number
				page?: number
			}
		>({
			query: ({ genreId, page = 1 }) => ({
				url: `/discover/${MOVIE}`,
				params: {
					api_key: API_KEY,
					language: LANGUAGE,
					with_genres: genreId || '',
					page,
				},
			}),
		}),
	}),
})
