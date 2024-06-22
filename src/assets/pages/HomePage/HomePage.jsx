import { NavLink } from 'react-router-dom'

import introBg from '../../../images/intro-bg.jpg'

import { articles } from '../../../data'

export default function HomePage() {
	return (
		<>
			<main>
				<div className='mainpage intro background-tint'>
					<div className='intro__inner container'>
						<h1 className='intro__title'>Всё о JavaScript фреймворках</h1>
						<h4 className='intro__subtitle}'>Обзоры, сравнения и рекомендации по выбору</h4>
						{/* <p className='intro__text'>Изучайте лучшие инструменты для разработки веб-приложений с помощью наших статей и обзоров</p> */}
					</div>
				</div>

				<section className='last-news'>
					<div className='last-news__inner container'></div>
				</section>

				<section className='popular-articles'>
					<div className='popular-articles__inner container'>
						<h3>Последние статьи</h3>
						<div className='popular-articles articles-section'>
							<Data></Data>

							<div className='popular-articles article'>
								<img
									className='article-img'
									src={introBg}
									alt=''
								/>
								<h4 className='article__title'>Lorem ipsum dolor sit amet sit amet sit amet</h4>
								<p className='article__text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem! Quam beatae sunt, minus magni eveniet repudiandae ex facere mollitia sit. Magnam a
									quaerat odio atque quisquam? Earum, officia assumenda?
								</p>
								<a
									className='article__link'
									href=''
								>
									Узнать больше
								</a>
							</div>

							<div className='popular-articles article'>
								<img
									className='article-img'
									src={introBg}
									alt=''
								/>
								<h4 className='article__title'>Lorem ipsum dolor sit amet sit amet sit amet</h4>
								<p className='article__text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem! Quam beatae sunt, minus magni eveniet repudiandae ex facere mollitia sit. Magnam a
									quaerat odio atque quisquam? Earum, officia assumenda?
								</p>
								<a
									className='article__link'
									href=''
								>
									Узнать больше
								</a>
							</div>
						</div>
						<button className='button popular-articles__button'>
							<NavLink
								to='/article'
								className='popular-articles__link'
							>
								Посмотреть все
							</NavLink>
						</button>
					</div>
				</section>
			</main>
		</>
	)
}

function Data() {
	let listItems = articles.map(info => (
		<div className='popular-articles article'>
			<img
				className='article-img'
				src={introBg}
				alt=''
			/>
			<h4 className='article__title'>{info.title}</h4>
			<p className='article__text'>{info.text}</p>
			<a
				className='article__link'
				href=''
			>
				Узнать больше
			</a>
		</div>
	))
	return listItems
}
