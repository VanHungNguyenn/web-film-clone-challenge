import React from 'react'
import './Title.scss'
import { Link } from 'react-router-dom'

const Title = ({ title, cate, type }) => {
	if (cate === 'tv') {
		cate = 'tv-show'
	}

	return (
		<>
			<div className='title__wrapper'>
				<h2 className='title'>{title}</h2>
				{type !== 'similar' && (
					<button className='movieList__button button button--large button--primary '>
						<Link to={`/${cate}`}>View more...</Link>
					</button>
				)}
			</div>
		</>
	)
}

export default Title
