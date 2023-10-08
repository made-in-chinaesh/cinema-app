import { Category } from '@/widgets/category'
import { MovieItem } from '@/entities/movie'
import { paths } from '@/shared/routing'
import { movieApi } from '@/shared/api'
import { GenresEnum } from '@/entities/home/ui/genres'

export const Drama = () => {
	const { data } = movieApi.useGetMoviesByGenreQuery({
		genreId: GenresEnum.Drama,
		page: 1,
	})

	return (
		<Category>
			<Category.Title href={paths.catalog({ genre: String(GenresEnum.Drama) })}>
				Драма
			</Category.Title>
			<Category.Carousel
				items={data?.results}
				renderItem={item => <MovieItem item={item} />}
			/>
		</Category>
	)
}
