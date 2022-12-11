import React from 'react'
import './MovieCardListView.scss'
import apiConfig from '~/api/apiConfig'
import { Link } from 'react-router-dom'
import { noImage } from '~/constants'

const MovieCardListView = ({ movieItem, cate }) => {
	return (
		<>
			<div className='movieCardListView'>
				<div className='movieCardListView__image'>
					<Link to={`/${cate}/${movieItem.id}`}>
						<img
							src={
								movieItem?.poster_path === null
									? noImage
									: apiConfig.w500Image(
											movieItem?.poster_path
									  )
							}
							alt='movie poster'
							className='fade-in'
						/>
					</Link>
				</div>
				<div className='movieCardListView__content'>
					<h3 className='movieCardListView__title'>
						<Link to={`/${cate}/${movieItem.id}`}>
							{movieItem?.title || movieItem?.name}
						</Link>
					</h3>
					<div className='movieCardListView__infor'>
						<div className='movieCardListView__infor--star'>
							<i className='fa fa-star'></i>
							<span>{movieItem?.vote_average}</span>
						</div>
						<div className='movieCardListView__infor--hd'>HD</div>
						<div className='movieCardListView__infor--year'>
							{movieItem?.release_date?.slice(0, 4) ||
								movieItem?.first_air_date?.slice(0, 4)}
						</div>
					</div>
					<div className='movieCardListView__desc'>
						{movieItem?.overview}
					</div>
					<Link to={`/${cate}/${movieItem?.id}`}>
						<div className='button button--100'>
							<i className='fa fa-play'></i>
							<span>Watch now</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default MovieCardListView
