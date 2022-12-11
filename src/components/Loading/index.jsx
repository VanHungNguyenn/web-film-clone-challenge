import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '5rem',
			}}
		>
			<ReactLoading type='spin' color='#00acc1' height={50} width={50} />
		</div>
	)
}

export default Loading
