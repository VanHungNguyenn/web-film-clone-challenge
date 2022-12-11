import React from 'react'

import Header from '~/components/DefaultLayout/Header'
import Footer from '~/components/DefaultLayout/Footer'
import ScrollBtn from '~/components/DefaultLayout/ScrollBtn'

import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<div style={{ paddingTop: 'var(--height-header)' }}></div>
			<Outlet />
			<Footer />
			<ScrollBtn />
		</>
	)
}

export default DefaultLayout
