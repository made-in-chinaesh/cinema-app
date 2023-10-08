import { Category } from '@/widgets/category'
import { paths } from '@/shared/routing'
import { GenresEnum } from '@/entities/home/ui/genres'
import { MovieItem } from '@/entities/movie'
import { movieApi } from '@/shared/api'

export const Comedy = () => {
	const { data } = movieApi.useGetMoviesByGenreQuery({
		genreId: GenresEnum.Comedy,
		page: 1,
	})

	return (
		<Category>
			<Category.Title
				href={paths.catalog({ genre: String(GenresEnum.Comedy) })}
			>
				Комедийные фильмы
			</Category.Title>
			<Category.Carousel
				items={data?.results}
				renderItem={item => <MovieItem item={item} />}
			/>
		</Category>
	)
}
