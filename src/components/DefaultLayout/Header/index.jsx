import React, { useState, useEffect } from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'
import { logo } from '~/constants'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setToggleMenu(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	// if click navbar, close menu
	const handleNavbarClick = () => {
		if (window.innerWidth < 768) {
			setToggleMenu(false)
		}
	}

	return (
		<header className='header'>
			<div className='wrapper header__wrapper'>
				<div className='header__logo'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<div className={`header__menu ${toggleMenu ? 'active' : ''}`}>
					<nav className='header__nav'>
						<ul className='header__nav-list'>
							<li
								className='header__nav-item'
								onClick={handleNavbarClick}
							>
								<Link to='/'>Home</Link>
							</li>
							<li
								className='header__nav-item'
								onClick={handleNavbarClick}
							>
								<Link to='/movie'>Movie</Link>
							</li>
							<li
								className='header__nav-item'
								onClick={handleNavbarClick}
							>
								<Link to='/tv'>TV Show</Link>
							</li>
						</ul>
					</nav>
					{/* buttons */}
					<div className='header__buttons'>
						<button className='button button--large button--transparent'>
							Login
						</button>
						<button className='button button--large button--primary'>
							Sign Up
						</button>
					</div>
				</div>
				<div className='header__bar' onClick={handleToggleMenu}>
					{toggleMenu ? (
						<i className='fas fa-times'></i>
					) : (
						<i className='fas fa-bars'></i>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
