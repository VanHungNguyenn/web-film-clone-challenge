import React from 'react'
import './Homepage.scss'
import Banner from '~/components/Banner'
import MovieList from '~/components/MovieList'

const Homepage = () => {
	return (
		<div className='homepage'>
			<div className='homepage__wrapper wrapper'>
				<Banner />
				<MovieList title='Trending Movies' />
				<MovieList title='Top Rated Movies' />
				<MovieList title='Upcoming Movies' />
				<MovieList title='Treanding TV Shows' />
				<MovieList title='Top Rated TV Shows' />
				<MovieList title='Upcoming TV Shows' />
			</div>
		</div>
	)
}

export default Homepage
