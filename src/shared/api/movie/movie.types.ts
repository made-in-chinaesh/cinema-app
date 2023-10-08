export interface IMovie {
	id: number
	title: string
	name?: string
	overview: string
	backdrop_path: string
	poster_path: string
	release_date: string
	first_air_date?: string
	vote_average: number
	vote_count: number
	popularity: number
}

export interface IMovieData {
	page: number
	results: IMovie[]
}

export interface IMovieGenre {
	id: number
	name: string
}

export interface IMovieGenreData {
	genres: IMovieGenre[]
}
