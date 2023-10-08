import { createSlice } from '@reduxjs/toolkit'

interface IFilterInitialState {
	page: number
}

const initialState: IFilterInitialState = {
	page: 1,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		nextPage: state => {
			state.page += 1
		},
		setDefaultPage: state => {
			state.page = 1
		},
	},
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions
