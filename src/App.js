import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '~/components/DefaultLayout'
import Page404 from '~/components/Page404'
import Homepage from '~/pages/Homepage'
import Catalog from '~/pages/Catalog'
import MovieDetail from '~/pages/MovieDetail'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route path='/' element={<Homepage />} />
						<Route path='/movie' element={<Catalog />} />
						<Route path='/tv' element={<Catalog />} />
						<Route
							path='/movie/search/:keyword'
							element={<Catalog />}
						/>
						<Route
							path='/tv/search/:keyword'
							element={<Catalog />}
						/>
						<Route path='/movie/:id' element={<MovieDetail />} />
						<Route path='/tv/:id' element={<MovieDetail />} />
						<Route path='*' element={<Page404 />} />
					</Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
