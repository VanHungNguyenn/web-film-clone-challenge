import React from 'react'
import './Catalog.scss'

import MovieGridView from '~/components/MovieGridView'

const Catalog = () => {
	const category = window.location.href.split('/')[3]

	return (
		<div className='catalog'>
			<div className='catalog__wrapper wrapper'>
				<h2 className='catalog__title'>
					{category === 'movie' ? 'Movies' : 'TV Shows'}
				</h2>

				<MovieGridView category={category} />
			</div>
		</div>
	)
}

export default Catalog
