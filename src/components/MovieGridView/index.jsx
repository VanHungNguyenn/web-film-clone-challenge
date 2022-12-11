import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import tmdbApi from '~/api/tmdbApi'
import MovieCard from '~/components/MovieCard'
import MovieCardListView from '~/components/MovieCardListView'
import Loading from '~/components/Loading'
import PullToRefresh from 'react-simple-pull-to-refresh'

const MovieGridView = ({ category }) => {
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState(0)
	const [loading, setLoading] = useState(false)
	const [view, setView] = useState(localStorage.getItem('view') || 'grid')
	const [tabBarMovies, setTabBarMovies] = useState('upcoming')
	const [tabBarTv, setTabBarTv] = useState('popular')

	const { keyword } = useParams()

	const getList = useCallback(async () => {
		try {
			let response = null

			setLoading(true)

			if (keyword === undefined) {
				const params = {}

				if (category === 'movie') {
					response = await tmdbApi.getMoviesList(tabBarMovies, {
						params,
					})
				} else {
					response = await tmdbApi.getTvList(tabBarTv, { params })
				}
			} else {
				const params = { query: keyword }

				response = await tmdbApi.search(category, params)
			}

			setItems(response.results)
			setTotalPage(response.total_pages)

			setLoading(false)
		} catch (error) {
			console.log('Failed to fetch movie list: ', error)
		}
	}, [category, keyword, tabBarMovies, tabBarTv])

	useEffect(() => {
		getList()
	}, [getList])

	const loadMore = async () => {
		let response = null

		if (keyword === undefined) {
			const params = { page: page + 1 }

			if (category === 'movie') {
				response = await tmdbApi.getMoviesList(tabBarMovies, { params })
			} else {
				response = await tmdbApi.getTvList(tabBarTv, { params })
			}
		} else {
			const params = { query: keyword, page: page + 1 }

			response = await tmdbApi.search(category, params)
		}

		setItems([...items, ...response.results])
		setPage(page + 1)
	}

	return (
		<>
			<MovieSearch category={category} key={keyword} />
			{/* gridview button and listview button */}
			<div className='catalog__view'>
				<button
					className={`catalog__view-button  ${
						view === 'grid' ? 'catalog__view-button--active' : ''
					}`}
					onClick={() => {
						setView('grid')
						localStorage.setItem('view', 'grid')
					}}
				>
					{/* font-awesome */}
					<i className='fas fa-th-large'></i>
				</button>
				<button
					className={`catalog__view-button ${
						view === 'list' ? 'catalog__view-button--active' : ''
					}`}
					onClick={() => {
						setView('list')
						localStorage.setItem('view', 'list')
					}}
				>
					<i className='fas fa-list'></i>
				</button>
			</div>
			{/* tab bar */}
			<div className='catalog__tab-bar'>
				{category === 'movie' ? (
					<>
						<button
							className={`catalog__tab-bar-button ${
								tabBarMovies === 'upcoming'
									? 'catalog__tab-bar-button--active'
									: ''
							}`}
							onClick={() => setTabBarMovies('upcoming')}
						>
							Upcoming
						</button>
						<button
							className={`catalog__tab-bar-button ${
								tabBarMovies === 'popular'
									? 'catalog__tab-bar-button--active'
									: ''
							}`}
							onClick={() => setTabBarMovies('popular')}
						>
							Popular
						</button>
						<button
							className={`catalog__tab-bar-button ${
								tabBarMovies === 'top_rated'
									? 'catalog__tab-bar-button--active'
									: ''
							}`}
							onClick={() => setTabBarMovies('top_rated')}
						>
							Top Rated
						</button>
					</>
				) : (
					<>
						<button
							className={`catalog__tab-bar-button ${
								tabBarTv === 'popular'
									? 'catalog__tab-bar-button--active'
									: ''
							}`}
							onClick={() => setTabBarTv('popular')}
						>
							Popular
						</button>
						<button
							className={`catalog__tab-bar-button ${
								tabBarTv === 'top_rated'
									? 'catalog__tab-bar-button--active'
									: ''
							}`}
							onClick={() => setTabBarTv('top_rated')}
						>
							Top Rated
						</button>
					</>
				)}
			</div>

			<PullToRefresh onRefresh={getList}>
				{items.length > 0 ? (
					view === 'grid' ? (
						<div className='catalog__gridview'>
							{items.map((item) => (
								<MovieCard
									key={item.id}
									movieItem={item}
									cate={category}
								/>
							))}
						</div>
					) : (
						<div className='catalog__listview'>
							{items.map((item) => (
								<MovieCardListView
									key={item.id}
									movieItem={item}
									cate={category}
								/>
							))}
						</div>
					)
				) : loading ? (
					<Loading />
				) : (
					''
				)}
			</PullToRefresh>
			{/* button loadmore */}
			{page < totalPage && (
				<button
					className='catalog__loadmore button button--large button--primary'
					onClick={loadMore}
				>
					Load more...
				</button>
			)}
		</>
	)
}

const MovieSearch = ({ category, keyword: key }) => {
	let navigate = useNavigate()

	const [keyword, setKeyword] = useState(key || '')

	const handleSearch = useCallback(() => {
		if (keyword.trim().length > 0) {
			navigate(`/${category}/search/${keyword}`)
		} else {
			navigate(`/${category}`)
		}
	}, [category, keyword, navigate])

	useEffect(() => {
		const enterEvent = (e) => {
			e.preventDefault()
			if (e.keyCode === 13) {
				handleSearch()
			}
		}

		document.addEventListener('keyup', enterEvent)

		return () => {
			document.removeEventListener('keyup', enterEvent)
		}
	}, [handleSearch, keyword])

	return (
		<div className='catalog__search'>
			<input
				type='text'
				placeholder='Search...'
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			{/* button */}
			<button
				className='catalog__button button button--large button--primary'
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	)
}

export default MovieGridView
