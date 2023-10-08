import { headerActions } from '@/widgets/header'
import { searchActions } from '@/entities/search-window'
import { filterActions } from '@/features/filters'
import { movieActions } from '@/entities/movie'

export const rootAction = {
	...headerActions,
	...searchActions,
	...filterActions,
	...movieActions,
}
