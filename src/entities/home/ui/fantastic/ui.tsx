import { Category } from '@/widgets/category'
import { paths } from '@/shared/routing'
import { MovieItem } from '@/entities/movie'
import { movieApi } from '@/shared/api'
import { GenresEnum } from '@/entities/home/ui/genres'

export const Fantastic = () => {
	const { data } = movieApi.useGetMoviesByGenreQuery({
		genreId: GenresEnum.Fantastic,
		page: 1,
	})

	return (
		<Category>
			<Category.Title
				href={paths.catalog({ genre: String(GenresEnum.Fantastic) })}
			>
				Фантастика
			</Category.Title>
			<Category.Carousel
				items={data?.results}
				renderItem={item => <MovieItem item={item} />}
			/>
		</Category>
	)
}
