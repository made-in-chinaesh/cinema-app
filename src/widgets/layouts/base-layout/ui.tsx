import { PropsWithChildren } from 'react'
import { Header } from '@/widgets/header'

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
