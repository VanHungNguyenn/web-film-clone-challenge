import React from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'
import { logo } from '~/constants'

const Header = () => {
	return (
		<header className='header'>
			<div className='wrapper header__wrapper'>
				<div className='header__logo'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/movie'>Movie</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/tv-show'>TV Show</Link>
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
		</header>
	)
}

export default Header
