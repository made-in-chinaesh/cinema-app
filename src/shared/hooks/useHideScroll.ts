import { useEffect } from 'react'

export const useHideScroll = (isHide: boolean) => {
	useEffect(() => {
		if (isHide) {
			document.body.style.overflow = 'hidden'
		}
		document.body.style.overflow = 'auto'
	}, [isHide])
}
