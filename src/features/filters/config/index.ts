import { GenresEnum } from '@/entities/home/ui/genres'
import { ISelectOption } from '../types'

export const filterGenres: ISelectOption[] = [
	{ value: String(GenresEnum.Action), name: 'Боевик' },
	{ value: String(GenresEnum.Adventure), name: 'Приключения' },
	{ value: String(GenresEnum.Cartoon), name: 'Мультфильм' },
	{ value: String(GenresEnum.Comedy), name: 'Комедия' },
	{ value: String(GenresEnum.Crime), name: 'Криминал' },
	{ value: String(GenresEnum.Documentary), name: 'Документальный' },
	{ value: String(GenresEnum.Drama), name: 'Драма' },
	{ value: String(GenresEnum.Family), name: 'Семейный' },
	{ value: String(GenresEnum.Fantasy), name: 'Фэнтези' },
	{ value: String(GenresEnum.History), name: 'История' },
	{ value: String(GenresEnum.Horror), name: 'Ужасы' },
	{ value: String(GenresEnum.Mystery), name: 'Детектив' },
	{ value: String(GenresEnum.Fantastic), name: 'Фантастика' },
	{ value: String(GenresEnum.War), name: 'Военный' },
]

export const filterAverage: ISelectOption[] = [
	{ value: '1', name: '1' },
	{ value: '2', name: '2' },
	{ value: '3', name: '3' },
	{ value: '4', name: '4' },
	{ value: '5', name: '5' },
	{ value: '6', name: '6' },
	{ value: '7', name: '7' },
	{ value: '8', name: '8' },
	{ value: '9', name: '9' },
	{ value: '10', name: '10' },
]
