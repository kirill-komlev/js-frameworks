import { NavLink } from 'react-router-dom'

import Article from '../../components/Article/Article'
import News from '../../components/News/News'

import { news, articles } from '../../../data'

export default function HomePage() {
	return (
		<>
			<div className='mainpage intro background-tint'>
				<div className='intro__inner container'>
					<h1 className='intro__title'>Всё о JavaScript фреймворках</h1>
					<h4 className='intro__subtitle}'>Обзоры, сравнения и рекомендации по выбору</h4>
				</div>
			</div>

			<section className='latest-news'>
				<div className='latest-news__inner container'>
					<h3>Последние новости</h3>
					<div className='news-section'>
						<NewsData />
					</div>
					<NavLink
						to='/news'
						className='button news__link'
					>
						Посмотреть все
					</NavLink>
				</div>
			</section>

			<section className='latest-articles'>
				<div className='latest-articles__inner container'>
					<h3>Последние статьи</h3>
					<div className='articles-section'>
						<ArticlesData />
					</div>
					<NavLink
						to='/articles'
						className='button articles__link'
					>
						Посмотреть все
					</NavLink>
				</div>
			</section>
		</>
	)
}

function ArticlesData() {
	let listItems = []
	for (let i = 0; i < articles.length; i++) {
		if (i >= 4) {
			return listItems
		} else {
			listItems.push(
				<Article
					key={i}
					imgSrc={articles[i].img}
					title={articles[i].title}
					date={articles[i].date}
					id={i}
				/>
			)
		}
	}
	return listItems
}

function NewsData() {
	let listItems = []
	for (let i = 0; i < news.length; i++) {
		if (i >= 3) {
			return listItems
		} else {
			listItems.push(
				<News
					key={i}
					imgSrc={news[i].img}
					title={news[i].title}
					date={news[i].date}
					id={i}
				/>
			)
		}
	}
}
