import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

import { logo } from '~/constants'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper footer__wrapper'>
				<div className='footer__logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='footer__nav'>
					<ul className='footer__nav-list'>
						<li className='footer__nav-item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='footer__nav-item'>
							<Link to='/movie'>Movie</Link>
						</li>
						<li className='footer__nav-item'>
							<Link to='/tv-show'>TV Show</Link>
						</li>
					</ul>
				</div>

				<div className='footer__about'>
					<p>
						SFilm is a Free Movies streaming site with zero ads. We
						let you watch movies online without having to register
						or paying, with over 10000 movies and TV-Series. You can
						also Download full movies from MoviesCloud and watch it
						later if you want.
					</p>
				</div>
				<div className='footer__social'>
					<ul className='footer__social-list'>
						<li className='footer__social-item'>
							<a href='https://www.facebook.com/'>
								<i className='fab fa-facebook-f'></i>
							</a>
						</li>
						<li className='footer__social-item'>
							<a href='https://www.linkedin.com/'>
								{/* linkedIn */}
								<i className='fab fa-linkedin'></i>
							</a>
						</li>
						<li className='footer__social-item'>
							<a href='https://github.com'>
								{/* github */}
								<i className='fab fa-github'></i>
							</a>
						</li>
					</ul>
				</div>
				{/* copyright */}
				<div className='footer__copy'>
					<p>
						&copy; 2022 <span>VanHungNguyen</span>. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
