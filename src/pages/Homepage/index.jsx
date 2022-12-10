import React from 'react'
import './Homepage.scss'
import Banner from '~/components/Banner'
import MovieList from '~/components/MovieList'

const Homepage = () => {
	return (
		<div className='homepage'>
			<div className='homepage__wrapper wrapper'>
				<Banner />
				<MovieList
					category='movie'
					type='popular'
					title='Now Playing Movies'
				/>
				<MovieList
					category='movie'
					type='top_rated'
					title='Top Rated Movies'
				/>
				<MovieList
					title='Upcoming Movies'
					category='movie'
					type='upcoming'
				/>
				<MovieList
					title='Popular TV Shows'
					category='tv'
					type='popular'
				/>
				<MovieList
					title='Top Rated TV Shows'
					category='tv'
					type='top_rated'
				/>
			</div>
		</div>
	)
}

export default Homepage
