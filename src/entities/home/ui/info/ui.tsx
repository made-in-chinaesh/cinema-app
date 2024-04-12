import styles from './styles.module.scss'

export const Info = () => {
	return (
		<section className='container'>
			<div className={styles.info}>
				<h2>
					Добро пожаловать на CINEHOME - онлайн кинотеатр с более чем 960
					тысячами фильмов!
				</h2>
				<p>
					У нас вы можете легко и быстро найти интересующий вас фильм благодаря
					нашему удобному поиску. Мы предлагаем широкий выбор кинокартин
					различных жанров и направлений - от классики до новинок, от драм до
					боевиков. На Cinehome вы сможете насладиться просмотром любимых
					фильмов в высоком качестве в любое время и в любом месте.
				</p>
			</div>
		</section>
	)
}
