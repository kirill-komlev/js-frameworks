import { NavLink } from 'react-router-dom'

import Button from '../Button/Button'

import logo from '../../../images/logo.svg'

export default function Header() {
	return (
		<>
			<header className='header'>
				<div className='header__inner container'>
					<NavLink
						className='header__logo'
						to='/'
						onClick={() => setHeaderModal(false)}
					>
						<img
							src={logo}
							alt=''
							className='logo logo__image'
						/>
						<p className='header__title'>JS Frameworks</p>
					</NavLink>
					<nav className='header__menu hidden-mobile'>
						<ul className='header__menu-list'>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/'
								>
									Главная
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/articles'
								>
									Все статьи
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}
