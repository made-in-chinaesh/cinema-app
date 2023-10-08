import { MainSection } from '@/entities/movie'
import { movieApi } from '@/shared/api'
import { useRouter } from 'next/router'

const FilmPage = () => {
	const router = useRouter()
	const { data } = movieApi.useGetMovieQuery(Number(router.query?.id))

	return (
		<>
			<MainSection item={data} />
		</>
	)
}

export default FilmPage
