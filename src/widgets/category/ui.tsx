import { PropsWithChildren } from 'react'

import { CarouselMultiply, CarouselMultiplyProps, Title } from '@/shared/ui'
import Link from 'next/link'
import { BsChevronRight as IconRight } from 'react-icons/bs'
import { FreeMode, Navigation } from 'swiper/modules'

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
	const mock = [1, 2, 3, 4, 5, 6]
	return (
		<div className={styles.wrapper}>
			<CarouselMultiply
				modules={[FreeMode, Navigation]}
				freeMode={{ momentumBounceRatio: 0 }}
				prevBtnClass={styles.prevBtn}
				nextBtnClass={styles.nextBtn}
				className={styles.slider}
				slideClassName={cn(styles.slide, slideClassName)}
				items={items as keyof typeof items}
				{...props}
			/>
		</div>
	)
}
Category.Title = CategoryTitle
Category.Carousel = CategoryCarousel
