import React, { useState, useEffect, useRef } from 'react'
import tmdbApi from '~/api/tmdbApi'

const VideoList = ({ id, category }) => {
	const [listVideo, setListVideo] = useState([])

	useEffect(() => {
		const fetchVideoList = async () => {
			try {
				const response = await tmdbApi.getVideos(category, id)
				setListVideo(response.results.slice(0, 3))
			} catch (error) {
				console.log('Failed to fetch video list: ', error)
			}
		}

		fetchVideoList()
	}, [id, category])

	return (
		<>
			<div className='wrapper movieDetail__trailers'>
				{listVideo.map((video, index) => {
					return <Video key={index} video={video} />
				})}
			</div>
		</>
	)
}

const Video = ({ video }) => {
	const iframeRef = useRef(null)

	useEffect(() => {
		const height = iframeRef.current.offsetWidth * 0.5625 + 'px'
		iframeRef.current.style.height = height
	}, [])

	return (
		<div className='movieDetail__trailer'>
			<h3 className='movieDetail__trailer--title'>
				{video.name} - {video.type}
			</h3>

			<div className='movieDetail__trailer--video'>
				<iframe
					width='1000'
					ref={iframeRef}
					src={`https://www.youtube.com/embed/${video.key}`}
					title='video'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}

export default VideoList
