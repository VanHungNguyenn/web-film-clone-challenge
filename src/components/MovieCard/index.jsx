import React from 'react'
import './MovieCard.scss'

import { Link } from 'react-router-dom'

const MovieCard = () => {
	return (
		<>
			<div className='movieCard'>
				<div className='movieCard__image'>
					<img
						src='https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg'
						alt='movie poster'
					/>
					<Link to='/movie/123'>
						<div className='movieCard__image--button'>
							<i className='fa-regular fa-circle-play'></i>
						</div>
					</Link>
				</div>
				<div className='movieCard__content'>
					<h3 className='movieCard__title'>
						<Link to='/movie/123'>Ava</Link>
					</h3>
					<div className='movieCard__infor'>
						<div className='movieCard__infor--star'>
							<i className='fa fa-star'></i>
							7.0
						</div>
						<div className='movieCard__infor--hd'>HD</div>
						<div className='movieCard__infor--year'>2020</div>
					</div>
					<div className='movieCard__button button button--100'>
						<i className='fa fa-play'></i>
						<Link to='/movie/123'>
							<span>Watch now</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieCard
