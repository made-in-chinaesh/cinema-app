import { Category } from '@/widgets/category'
import { MovieItem } from '@/entities/movie'
import { movieApi } from '@/shared/api'
import { GenresEnum } from '@/entities/home/ui/genres'
import { paths } from '@/shared/routing'

export const Action = () => {
	const { data } = movieApi.useGetMoviesByGenreQuery({
		genreId: GenresEnum.Action,
		page: 1,
	})

	return (
		<Category>
			<Category.Title
				href={paths.catalog({ genre: String(GenresEnum.Action) })}
			>
				Боевик
			</Category.Title>
			<Category.Carousel
				items={data?.results}
				renderItem={item => <MovieItem item={item} />}
			/>
		</Category>
	)
}
