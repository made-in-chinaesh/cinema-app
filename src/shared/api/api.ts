import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from './base'

export const LANGUAGE = 'ru'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['NOW_PLAYING_MOVIES', 'POPULAR_MOVIES'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({}),
})
