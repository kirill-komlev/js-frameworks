import { NavLink } from 'react-router-dom'

import logo from '../../../images/logo.svg'
import vk from '../../../images/vk.svg'
import telegram from '../../../images/telegram.svg'

export default function Footer() {
	return (
		<>
			<footer className='footer'>
				<section>
					<div className='container footer__inner'>
						<div className='footer__section'>
							<NavLink
								className='footer__logo'
								to='/'
							>
								<img
									src={logo}
									alt=''
									className='logo'
								/>
								JS Frameworks
							</NavLink>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam necessitatibus commodi repellendus hic et maiores eaque ab officiis, incidunt sit laborum ducimus
								molestiae consequuntur nostrum cupiditate harum culpa sed reprehenderit.
							</p>
						</div>

						<div className='footer__section'>
							<h4 className='footer__title'>Ссылки</h4>
							<nav className='footer__menu'>
								<ul className='footer__menu-list'>
									<li className='footer__menu-item'>
										<NavLink
											className='footer__menu-link'
											to='/news'
										>
											Новости
										</NavLink>
									</li>
									<li className='footer__menu-item'>
										<NavLink
											className='footer__menu-link'
											to='/articles'
										>
											Статьи
										</NavLink>
									</li>
									<li className='footer__menu-item'>
										<NavLink
											className='footer__menu-link'
											to='/video'
										>
											Видео
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>

						<div className='footer__section'>
							<h4 className='footer__title'>Контакты</h4>
							<p className='footer__text'>Email: js-frameworks@gmail.com</p>
							<div className='footer__contact-links'>
								<img
									className='link__logo'
									src={vk}
									alt=''
								/>
								<img
									className='link__logo'
									src={telegram}
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
			</footer>
		</>
	)
}
