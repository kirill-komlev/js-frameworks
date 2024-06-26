import Article from '../../components/Article/Article'

import { articles } from '../../../data'

export default function ArticlesPage() {
	return (
		<>
			<div className='articles-page articles-page-intro intro'>
				<div className='container intro__inner'>
					<h1 className='intro__title'>Все статьи</h1>
				</div>
			</div>
			<section className='articles-page'>
				<div className='container'>
					<div className='articles-section'>
						<Data />
					</div>
				</div>
			</section>
		</>
	)
}

function Data() {
	let listItems = []
	for (let i = 0; i < articles.length; i++) {
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

	return listItems
}
