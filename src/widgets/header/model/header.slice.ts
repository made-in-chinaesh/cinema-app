import { createSlice } from '@reduxjs/toolkit'

interface IHeaderInitialState {
	isOpen: boolean
}

const initialState: IHeaderInitialState = {
	isOpen: false,
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleMenu: state => {
			state.isOpen ? (state.isOpen = false) : (state.isOpen = true)
		},
	},
})

export const headerReducer = headerSlice.reducer
export const headerActions = headerSlice.actions
