import News from '../../components/News/News'

import { news } from '../../../data'

export default function NewsPage() {
	return (
		<>
			<div className='news-page articles-page-intro intro'>
				<div className='container intro__inner'>
					<h1 className='intro__title'>Все новости</h1>
				</div>
			</div>
			<section className='news-page'>
				<div className='container'>
					<div className='news-section'>
						<Data />
					</div>
				</div>
			</section>
		</>
	)
}

function Data() {
	let listItems = []
	for (let i = 0; i < news.length; i++) {
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
	return listItems
}
