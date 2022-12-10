import React from 'react'
import './Title.scss'

const Title = ({ title }) => {
	return (
		<>
			<div className='title__wrapper'>
				<h2 className='title'>{title}</h2>
				<button className='movieList__button button button--large button--primary '>
					View more...
				</button>
			</div>
		</>
	)
}

export default Title
