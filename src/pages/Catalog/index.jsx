import React from 'react'
import './Catalog.scss'
import MovieCard from '~/components/MovieCard'

const Catalog = () => {
	return (
		<div className='catalog'>
			<div className='catalog__wrapper wrapper'>
				<h2 className='catalog__title'>Movie</h2>
				<div className='catalog__search'>
					<input type='text' placeholder='Search movie' />
					{/* button */}
					<button className='catalog__button button button--large button--primary'>
						Search
					</button>
				</div>
				<div className='catalog__gridview'>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</div>
				{/* button loadmore */}
				<button className='catalog__loadmore button button--large button--primary'>
					Load more...
				</button>
			</div>
		</div>
	)
}

export default Catalog
