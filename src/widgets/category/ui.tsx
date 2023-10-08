import { PropsWithChildren } from 'react'

import {
	CarouselMultiply,
	CarouselMultiplyProps,
	Spinner,
	Title,
} from '@/shared/ui'
import { BsChevronRight as IconRight } from 'react-icons/bs'
import { FreeMode, Navigation } from 'swiper/modules'
import Link from 'next/link'

import cn from 'classnames'
import styles from './styles.module.scss'

interface CategoryProps extends PropsWithChildren {
	className?: string
	containerClass?: string
}

interface CategoryTitleProps extends PropsWithChildren {
	className?: string
	href: string
}

export const Category = ({
	className,
	containerClass,
	children,
}: CategoryProps) => {
	return (
		<section className={cn(styles.section, className)}>
			<div className={cn('container', containerClass)}>{children}</div>
		</section>
	)
}

const CategoryTitle = ({ children, href, className }: CategoryTitleProps) => {
	return (
		<Link href={href} className={cn(className, styles.span)}>
			<Title className={styles.title}>{children}</Title>
			<IconRight />
		</Link>
	)
}

function CategoryCarousel<T>({
	items,
	slideClassName,
	...props
}: CarouselMultiplyProps<T>) {
	return (
		<div className={styles.wrapper}>
			{items ? (
				<CarouselMultiply
					modules={[FreeMode, Navigation]}
					freeMode={{ momentumBounceRatio: 0 }}
					prevBtnClass={styles.prevBtn}
					nextBtnClass={styles.nextBtn}
					className={styles.slider}
					slideClassName={cn(styles.slide, slideClassName)}
					items={items}
					{...props}
				/>
			) : (
				<div className={styles.loader}>
					<Spinner color='white' size={50} />
				</div>
			)}
		</div>
	)
}
Category.Title = CategoryTitle
Category.Carousel = CategoryCarousel
