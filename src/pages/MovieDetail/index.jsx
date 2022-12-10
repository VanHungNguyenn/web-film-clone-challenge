import React from 'react'
import './MovieDetail.scss'

import { banner, poster } from '~/constants'
import MovieList from '~/components/MovieList'

const MovieDetail = () => {
	return (
		<>
			<div className='movieDetail'>
				<div
					className='movieDetail__background'
					style={{
						backgroundImage: `url(${banner})`,
					}}
				></div>
				<div className='movieDetail__wrapper wrapper'>
					<div className='movieDetail__poster'>
						<img src={poster} alt='poster' />
					</div>
					<div className='movieDetail__content'>
						<h1 className='movieDetail__title'>
							Avengers: Endgame
						</h1>
						<div class='movieDetail__details'>
							<div class='movieDetail__details--star'>
								<i class='fa-solid fa-star'></i>
								<span>8.8</span>
							</div>
							<div class='movieDetail__details--hd'>FullHD</div>
							<div class='movieDetail__details--year'>2019</div>
						</div>

						<div className='movieDetail__desc'>
							<span>Overview: </span> Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Harum maxime minus
							deserunt, repellendus natus assumenda iure libero
							esse sunt deleniti.
						</div>
						<div className='movieDetail__list'>
							<div className='movieDetail__item'>
								<span>Release date: </span> 2021-01-01
							</div>
							<div className='movieDetail__item'>
								<span>Runtime: </span> 120 min
							</div>
							<div className='movieDetail__item'>
								<span>Vote average: </span> 8.5
							</div>
							<div className='movieDetail__item'>
								<span>Casts: </span> Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Harum maxime minus
							</div>
						</div>
						<div className='movieDetail__tags'>
							<div className='movieDetail__tag'>Action</div>
							<div className='movieDetail__tag'>Adventure</div>
							<div className='movieDetail__tag'>Comedy</div>
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper movieDetail__trailers'>
				<div className='movieDetail__trailer'>
					<h3 className='movieDetail__trailer--title'>Trailer:</h3>
					<div className='movieDetail__trailer--video'>
						<iframe
							width='1000'
							height='500'
							src='https://www.youtube.com/embed/6ZfuNTqbHE8'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<MovieList title='You may also like' />
			</div>
		</>
	)
}

export default MovieDetail
