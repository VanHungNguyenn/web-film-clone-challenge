import React, { useRef, useEffect, useCallback } from 'react'
import './ScrollBtn.scss'

export default function ScrollBtn() {
	const scrollBtn = useRef()

	const scrollStatusFunc = useCallback(() => {
		if (window.scrollY > 300) {
			scrollBtn.current.classList.add('showScrollBtn')
			scrollBtn.current.classList.remove('hideScrollBtn')
		} else {
			if (scrollBtn.current.classList.contains('showScrollBtn')) {
				scrollBtn.current.classList.remove('showScrollBtn')
				scrollBtn.current.classList.add('hideScrollBtn')
			}
		}
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', scrollStatusFunc)
		// return () => window.removeEventListener('scroll', scrollStatusFunc);
		return () => {
			window.removeEventListener('scroll', scrollStatusFunc)
		}
	}, [scrollStatusFunc])

	return (
		<div
			ref={scrollBtn}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' })
				scrollBtn.current.classList.remove('showScrollBtn')
				scrollBtn.current.classList.add('hideScrollBtn')
			}}
			className='scrollWrapper hideScrollBtn'
		>
			{/*fontawesome arrow up  */}
			<i className='fas fa-arrow-up'></i>
		</div>
	)
}
