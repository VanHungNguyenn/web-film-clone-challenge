import React from 'react'
import './Banner.scss'

import Slide from '~/components/Slide'

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__wrapper'>
				<div className='banner__slide'>
					<Slide />
				</div>
			</div>
		</div>
	)
}

export default Banner
