import React from 'react'
import './MovieCard.scss'
import apiConfig from '~/api/apiConfig'
import { Link } from 'react-router-dom'
import { noImage } from '~/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MovieCard = ({ movieItem, cate }) => {
	return (
		<>
			{(
				<div className='movieCard'>
					<div className='movieCard__image fade-in'>
						<LazyLoadImage
							src={
								movieItem?.poster_path === null
									? noImage
									: apiConfig.w500Image(
											movieItem?.poster_path
									  )
							}
							alt='movie poster'
						/>

						<Link to={`/${cate}/${movieItem?.id}`}>
							<div className='movieCard__image--button'>
								<i className='fa-regular fa-circle-play'></i>
							</div>
						</Link>
					</div>

					<div className='movieCard__content'>
						<h3 className='movieCard__title'>
							<Link to={`/${cate}/${movieItem.id}`}>
								{movieItem?.title || movieItem?.name}
							</Link>
						</h3>
						<div className='movieCard__infor'>
							<div className='movieCard__infor--star'>
								<i className='fa fa-star'></i>
								<span>{movieItem?.vote_average}</span>
							</div>
							<div className='movieCard__infor--hd'>HD</div>
							<div className='movieCard__infor--year'>
								{movieItem?.release_date?.slice(0, 4) ||
									movieItem?.first_air_date?.slice(0, 4)}
							</div>
						</div>
						<div className='movieCard__button button button--100'>
							<i className='fa fa-play'></i>
							<Link to={`/${cate}/${movieItem?.id}`}>
								<span>Watch now</span>
							</Link>
						</div>
					</div>
				</div>
			) || <Skeleton height={300} />}
		</>
	)
}

export default MovieCard
