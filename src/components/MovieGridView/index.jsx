import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import tmdbApi from '~/api/tmdbApi'
import MovieCard from '~/components/MovieCard'

const MovieGridView = ({ category }) => {
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState(0)

	const { keyword } = useParams()

	useEffect(() => {
		const getList = async () => {
			let response = null

			if (keyword === undefined) {
				const params = {}

				if (category === 'movie') {
					response = await tmdbApi.getMoviesList('upcoming', params)
				} else {
					response = await tmdbApi.getTvList('popular', params)
				}
			} else {
				const params = { query: keyword }

				response = await tmdbApi.search(category, params)
			}

			setItems(response.results)
			setTotalPage(response.total_pages)
		}

		getList()
	}, [category, keyword])

	const loadMore = async () => {
		let response = null

		if (keyword === undefined) {
			const params = { page: page + 1 }

			if (category === 'movie') {
				response = await tmdbApi.getMoviesList('upcoming', params)
			} else {
				response = await tmdbApi.getTvList('popular', params)
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
			<div className='catalog__gridview'>
				{items.map((item) => (
					<MovieCard key={item.id} movieItem={item} cate={category} />
				))}
			</div>
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
