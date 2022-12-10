import React from 'react'
import './MovieList.scss'
import Title from '~/components/Title'

import MovieCard from '~/components/MovieCard'

const MovieList = ({ title }) => {
	return (
		<div className='movieList'>
			<div className='movieList__wrapper'>
				{title && <Title title={title} />}
				<div className='movieList__grid'>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</div>
			</div>
		</div>
	)
}

export default MovieList
