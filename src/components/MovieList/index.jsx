import React, { useState, useEffect, useCallback } from 'react'
import './MovieList.scss'
import tmdbApi from '~/api/tmdbApi'
import Title from '~/components/Title'

import MovieCard from '~/components/MovieCard'

const MovieList = ({ category: cate, type, title, id, slice = 10 }) => {
	const [movieItems, setMovieItems] = useState([])

	const fetchMoviesList = useCallback(async () => {
		try {
			let response = null

			const params = {
				page: 1,
			}

			if (type !== 'similar') {
				if (cate === 'movie') {
					response = await tmdbApi.getMoviesList(type, params)
				} else {
					response = await tmdbApi.getTvList(type, params)
				}
			} else {
				response = await tmdbApi.getSimilar(cate, id)
			}

			setMovieItems(response.results.slice(0, slice))
		} catch (error) {
			console.log('Failed to fetch movie list: ', error)
		}
	}, [cate, type, id, slice])

	useEffect(() => {
		fetchMoviesList()
	}, [fetchMoviesList])

	return (
		<div className='movieList'>
			<div className='movieList__wrapper'>
				{title && <Title title={title} cate={cate} type={type} />}
				<div className='movieList__grid'>
					{movieItems.map((movieItem, index) => (
						<MovieCard
							key={index}
							movieItem={movieItem}
							cate={cate}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieList
