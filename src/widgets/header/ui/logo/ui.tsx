import Link from 'next/link'
import { paths } from '@/shared/routing'
import { Title } from '@/shared/ui'
import styles from './styles.module.scss'

export const Logo = () => {
	return (
		<Link
			href={paths.home}
			className={styles.logo}
			onChange={e => e.stopPropagation()}
		>
			<Title variant='h2'>
				CINE
				<span className={styles.span}>HOME</span>
			</Title>
		</Link>
	)
}
