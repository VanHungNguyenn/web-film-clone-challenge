import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Banner.scss'

import tmdbApi, { category, movieType } from '~/api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import { Autoplay, Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'

const Banner = () => {
	const [movieItems, setMovieItems] = useState([])

	const fetchMoviesList = async () => {
		try {
			const params = {
				page: 1,
			}

			const response = await tmdbApi.getMoviesList(movieType.popular, {
				params,
			})

			setMovieItems(response.results.slice(0, 4))
		} catch (error) {
			console.log('Failed to fetch movie list: ', error)
		}
	}

	useEffect(() => {
		fetchMoviesList()
	}, [])

	return (
		<div className='banner'>
			<div className='banner__wrapper'>
				<div className='banner__banner'>
					<Swiper
						spaceBetween={0}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						loop={true}
					>
						{movieItems.map((movieItem, index) => (
							<SwiperSlide key={index}>
								<SlideItem movieItem={movieItem} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

const SlideItem = ({ movieItem }) => {
	const background = apiConfig.originalImage(
		movieItem.backdrop_path
			? movieItem.backdrop_path
			: movieItem.poster_path
	)

	return (
		<div className='banner-slide'>
			<div className='banner__banner'>
				<img
					src={background}
					alt='banner'
					loading='lazy'
					className='fade-in'
				/>
			</div>
			<div className='banner__content'>
				<div className='banner__content--poster'>
					<img
						src={apiConfig.w500Image(movieItem.poster_path)}
						alt='poster'
						loading='lazy'
						className='fade-in'
					/>
				</div>

				<div className='banner__content--info'>
					<h3 className='banner__content--info-title'>
						<Link to={`${category.movie}/${movieItem.id}`}>
							{movieItem.title}
						</Link>
					</h3>
					<div className='banner__content--info-details'>
						{/* star and HD, FullHD */}
						<div className='banner__content--info-details--star'>
							<i className='fa-solid fa-star' />
							<span>{movieItem.vote_average}</span>
						</div>
						<div className='banner__content--info-details--hd'>
							<span>HD</span>
						</div>
						{/* year */}
						<div className='banner__content--info-details--year'>
							{movieItem.release_date}
						</div>
					</div>
					<p className='banner__content--info-description'>
						{movieItem.overview}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Banner
