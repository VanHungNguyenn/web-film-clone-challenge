import React from 'react'
import { img404 } from '~/constants'
import { Link } from 'react-router-dom'

const Page404 = () => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					paddingTop: '5rem',
					maxWidth: '90%',
					width: '50rem',
					margin: '0 auto',
					paddingBottom: '5rem',
				}}
			>
				<img src={img404} alt='404' />
				<button
					style={{ marginTop: '10rem' }}
					className='button button--primary button--large'
				>
					<Link to='/'>Back to Homepage</Link>
				</button>
			</div>
		</>
	)
}

export default Page404
