import { filterGenres } from '@/features/filters/config'

export const findGenreWithId = (id: any) => {
	const findGenre = filterGenres.find(genre => genre.value === id)
	return findGenre?.name
}
