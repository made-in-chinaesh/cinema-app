import { Info } from './info'
import { API_IMAGE_URL, IMovie } from '@/shared/api'
import { CSSProperties } from 'react'
import { Title } from '@/shared/ui'

import cn from 'classnames'
import styles from './styles.module.scss'

interface MainSectionProps {
	item?: IMovie
}

export const MainSection = ({ item }: MainSectionProps) => {
	return (
		<section className={styles.section}>
			<div
				style={
					{
						background: `url(${API_IMAGE_URL}/original/${item?.backdrop_path}) center / cover`,
					} as CSSProperties
				}
				className={styles.bg}
			/>
			<div className={cn('container', styles.container)}>
				<div className={styles.content}>
					<Title className={styles.title}>{item?.title || item?.name}</Title>
					<Info item={item} />
				</div>
			</div>
		</section>
	)
}
