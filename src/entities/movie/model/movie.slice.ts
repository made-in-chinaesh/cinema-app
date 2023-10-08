import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from '@/shared/api'

interface IInitialMovieState {
	movie: IMovie
}

const initialState: IInitialMovieState = {
	movie: {} as IMovie,
}

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovie: (state, { payload }) => {
			state.movie = payload
		},
	},
})

export const movieReducer = movieSlice.reducer
export const movieActions = movieSlice.actions
