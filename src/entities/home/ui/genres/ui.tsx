import { useState } from 'react'
import SwiperClass from 'swiper'
import Link from 'next/link'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { genres } from './config'

import styles from './styles.module.scss'
import cn from 'classnames'

export const Genres = () => {
	const [isStart, setIsStart] = useState(false)
	const [isCenter, setIsCenter] = useState(false)

	const slideChange = (swiper: SwiperClass) => {
		setIsStart(swiper.isEnd)
		setIsCenter(!swiper.isEnd && swiper.activeIndex > 0)
	}

	return (
		<section
			className={cn(styles.section, {
				[styles.isStart]: isStart,
				[styles.isCenter]: isCenter,
			})}
		>
			<div className='container'>
				<Swiper
					modules={[Mousewheel, FreeMode]}
					freeMode
					mousewheel
					onSlideChange={slideChange}
					onSliderMove={slideChange}
					slidesPerView='auto'
					className={styles.carousel}
				>
					{genres.map(genre => (
						<SwiperSlide key={genre.id} className={styles.item}>
							<Link href={genre.href} className={styles.link}>
								<span className={styles.icon}>{genre.icon}</span>
								<span className={styles.text}>{genre.name}</span>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
