import { MovieRating } from '@/shared/ui'
import { IMovie } from '@/shared/api'

interface InfoProps {
	item?: IMovie
}

export const Info = ({ item }: InfoProps) => {
	return (
		<div className='flex items-center text-white'>
			<MovieRating>{item?.vote_average}</MovieRating>
			<span>{item?.release_date}</span>
		</div>
	)
}
