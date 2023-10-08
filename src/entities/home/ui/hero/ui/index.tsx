import { useState } from 'react'
import { movieApi } from '@/shared/api'
import { CarouselMultiply } from '@/shared/ui/carousel-multiply'
import { HeroSlide } from './slide'

import styles from './styles.module.scss'

const breakpoints = {
	1200: {
		slidesPerView: 1.7,
	},
	390: {
		slidesPerView: 1.1,
	},
	100: {
		slidesPerView: 1.1,
	},
}

export const Hero = () => {
	const { data } = movieApi.useGetNowPlayingMoviesQuery(1)

	const [realIndex, setRealIndex] = useState<number>(0)

	return (
		<div className={styles.root}>
			<CarouselMultiply
				options={{
					loop: true,
				}}
				className={styles.slider}
				nextBtnClass={styles.next}
				prevBtnClass={styles.prev}
				slideClassName={styles.slide}
				breakpoints={breakpoints}
				items={data?.results.length ? data.results : [...Array(3)]}
				onSlideChange={swiper => setRealIndex(swiper.realIndex)}
				renderItem={(item, idx) => (
					<HeroSlide isActiveSlide={realIndex === idx} item={item} />
				)}
				slidesPerView={1.7}
				centeredSlides={true}
			/>
		</div>
	)
}
