import { createSlice } from '@reduxjs/toolkit'

interface ISearchInitialState {
	isOpen: boolean
}

const initialState: ISearchInitialState = {
	isOpen: false,
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		toggleSearchModal: state => {
			state.isOpen ? (state.isOpen = false) : (state.isOpen = true)
		},
	},
})

export const searchReducer = searchSlice.reducer
export const searchActions = searchSlice.actions
