import React, { useState, useEffect, useCallback } from 'react'
import './MovieDetail.scss'

import tmdbApi from '~/api/tmdbApi'
import apiConfig from '~/api/apiConfig'
import { useParams } from 'react-router-dom'
import MovieList from '~/components/MovieList'
import VideoList from './VideoList'

const MovieDetail = () => {
	const { id } = useParams()
	const category = window.location.href.split('/')[3]

	const [item, setItem] = useState(null)

	const getDetail = useCallback(async () => {
		const res = await tmdbApi.getDetail(category, id)

		setItem(res)
	}, [category, id])

	useEffect(() => {
		getDetail()
	}, [getDetail])

	return (
		<>
			{item && (
				<>
					<div className='movieDetail'>
						<div
							className='movieDetail__background'
							style={{
								backgroundImage: `url(${apiConfig.originalImage(
									item?.backdrop_path
										? item.backdrop_path
										: item.poster_path
								)})`,
							}}
						></div>
						<div className='movieDetail__wrapper wrapper'>
							<div className='movieDetail__poster'>
								<img
									src={apiConfig.w500Image(item?.poster_path)}
									alt='poster'
								/>
							</div>
							<div className='movieDetail__content'>
								<h1 className='movieDetail__title'>
									{item.title}
								</h1>
								<div className='movieDetail__details'>
									<div className='movieDetail__details--star'>
										<i className='fa-solid fa-star'></i>
										<span>{item.vote_average}</span>
									</div>
									<div className='movieDetail__details--hd'>
										HD
									</div>
									<div className='movieDetail__details--year'>
										{item.release_date?.slice(0, 4)}
									</div>
								</div>

								<div className='movieDetail__desc'>
									<span>Overview: </span> {item.overview}
								</div>
								<div className='movieDetail__list'>
									<div className='movieDetail__item'>
										<span>Release date: </span>{' '}
										{item.release_date}
									</div>
									<div className='movieDetail__item'>
										<span>Country: </span>
										{item.production_countries?.map(
											(country) => country.name
										)}
									</div>
									<div className='movieDetail__item'>
										<span>Vote average: </span>{' '}
										{item.vote_average}
									</div>
									<div className='movieDetail__item'>
										<span>Company: </span>{' '}
										{item.production_companies?.map(
											(company) => company.name
										)}
									</div>
								</div>
								<div className='movieDetail__tags'>
									{item.genres?.map((genre) => (
										<div
											className='movieDetail__tag'
											key={genre.id}
										>
											{genre.name}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<VideoList id={id} category={category} />

					<div className='wrapper'>
						<MovieList
							type='similar'
							title='You may also like'
							id={id}
							category={category}
							slice={5}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default MovieDetail
