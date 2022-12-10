import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { banner, poster } from '~/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slide.scss'

import { Autoplay, Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'

const Slide = () => {
	return (
		<>
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
				<SwiperSlide>
					<div className='slide'>
						<div className='slide__banner'>
							<img src={banner} alt='logo' />
						</div>
						<div className='slide__content'>
							<div className='slide__content--poster'>
								<img src={poster} alt='poster' />
							</div>

							<div className='slide__content--info'>
								<h3 className='slide__content--info-title'>
									<Link to='/tv-show/1'>
										Avengers: Endgame
									</Link>
								</h3>
								<div className='slide__content--info-details'>
									{/* star and HD, FullHD */}
									<div className='slide__content--info-details--star'>
										<i className='fa-solid fa-star' />
										<span>8.8</span>
									</div>
									<div className='slide__content--info-details--hd'>
										FullHD
									</div>
									{/* year */}
									<div className='slide__content--info-details--year'>
										2019
									</div>
								</div>
								<p className='slide__content--info-description'>
									After the devastating events of Avengers:
									Infinity War (2018), the universe is in
									ruins. With the help of remaining allies,
									the Avengers assemble once more in order to
									reverse Thanos' actions and restore balance
									to the universe.
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slide
