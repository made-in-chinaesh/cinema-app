interface CatalogParams {
	genre?: string
	rating?: string
}

export const paths = {
	home: '/',
	films: '/films',

	catalog: (params: CatalogParams): string => {
		const searchParams = new URLSearchParams({ ...params })
		const url = `/films?${searchParams}`

		return url
	},

	movie: (id: number): string => `/film/${id}`,
}
