import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useScrollbarSize from 'react-scrollbar-size'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

import logo from '../../../images/logo.svg'

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)
	const { height, width } = useScrollbarSize()

	function openModal() {
		let pagePosition = window.scrollY
		let modal = document.getElementById('modal')

		document.body.classList.add('modal-open')
		document.body.style.marginRight = width + 'px'

		modal.style.top = pagePosition + 'px'
	}

	function closeModal() {
		document.body.classList.remove('modal-open')
		document.body.style.marginRight = 0

		modal.style.top = 0
	}

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
									to='/news'
								>
									Новости
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/articles'
								>
									Статьи
								</NavLink>
							</li>
							<li className='header__menu-item'>
								<NavLink
									className='header__menu-link'
									to='/video'
								>
									Видео
								</NavLink>
							</li>
						</ul>
					</nav>
					<Button
						className='header__burger-button button__burger-menu burger-button visible-mobile'
						onClick={() => {
							setHeaderModal(true)
							openModal()
						}}
					/>
				</div>

				<Modal
					className='mobile-overlay visible-mobile'
					open={headerModal}
				>
					<div className='mobile-overlay__close-button-wrapper'>
						<Button
							className='mobile-overlay__close-button cross-button'
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						/>
					</div>
					<div className='mobile-overlay__body'>
						<ul className='mobile-overlay__body-list'>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Главная
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/news'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Новости
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/articles'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Статьи
								</NavLink>
							</li>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-link'
									to='/video'
									onClick={() => {
										setHeaderModal(false)
										closeModal()
									}}
								>
									Видео
								</NavLink>
							</li>
						</ul>
					</div>
				</Modal>
			</header>
		</>
	)
}
