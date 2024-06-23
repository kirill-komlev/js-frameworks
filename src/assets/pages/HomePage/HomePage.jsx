import { NavLink } from 'react-router-dom'

import introBg from '../../../images/intro-bg.jpg'

import Article from '../../components/Article/Article'

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

				<section className='latest-news'>
					<div className='latest-news__inner container'></div>
				</section>

				<section className='latest-articles'>
					<div className='latest-articles__inner container'>
						<h3>Последние статьи</h3>
						<div className='articles-section'>
							<Data />
						</div>
						<NavLink
							to='/articles'
							className='button articles__link'
						>
							Посмотреть все
						</NavLink>
					</div>
				</section>
			</main>
		</>
	)
}

function Data() {
	// let listItems = articles.map(info => (
	// 	<div className='popular-articles article'>
	// 		<img
	// 			className='article-img'
	// 			src={introBg}
	// 			alt=''
	// 		/>
	// 		<h4 className='article__title'>{info.title}</h4>
	// 		<p className='article__text'>{info.text}</p>
	// 		<a
	// 			className='article__link'
	// 			href=''
	// 		>
	// 			Узнать больше
	// 		</a>
	// 	</div>
	// ))

	let listItems = []
	for (let i = 0; i < articles.length; i++) {
		if (i >= 3) {
			return listItems
		} else {
			listItems.push(
				<Article
					key={i}
					imgSrc={articles[i].img}
					title={articles[i].title}
					text={articles[i].text}
					id={i}
				/>
			)
		}
	}
	return listItems
}
