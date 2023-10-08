import '@/app/styles/index.scss'
import NextProgressBar from 'nextjs-progressbar'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/shared/store'
import { Toaster } from 'react-hot-toast'
import { BaseLayout } from '@/widgets/layouts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextProgressBar
				color='red'
				height={3}
				options={{ showSpinner: false }}
			/>
			<Provider store={store}>
				<BaseLayout>
					<Component {...pageProps} />
				</BaseLayout>
			</Provider>
			<Toaster />
		</>
	)
}

export default MyApp
