import { combineReducers } from 'redux'
import { searchReducer } from '@/entities/search-window'
import { headerReducer } from '@/widgets/header'
import { filterReducer } from '@/features/filters'
import { movieReducer } from '@/entities/movie'
import { api } from '@/shared/api'

export const rootReducer = combineReducers({
	search: searchReducer,
	header: headerReducer,
	filter: filterReducer,
	movie: movieReducer,
	[api.reducerPath]: api.reducer,
})
