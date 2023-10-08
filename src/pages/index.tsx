import { NextPage } from 'next'
import {
	Action,
	Comedy,
	Drama,
	Fantastic,
	ForFamily,
	Genres,
	Hero,
	Info,
} from '@/entities/home'

const HomePage: NextPage = () => {
	return (
		<>
			<Hero />
			<Genres />
			<Comedy />
			<ForFamily />
			<Drama />
			<Fantastic />
			<Action />
			<Info />
		</>
	)
}

export default HomePage
