import { articles } from '../../../data'

import { useParams } from 'react-router-dom'

export default function ArticlePage() {
	const param = useParams()

	let data = articles[param.id]

	return (
		<>
			<div className='full-article-page intro intro--small background-tint'>
				<img
					className='intro--small intro-img'
					src={data.img}
					alt=''
				/>
				<div className='intro__inner container'>
					<h2 className='intro__title'>{data.title}</h2>
				</div>
			</div>
			<section>
				<div className='main-full-article__inner container'>
					<div dangerouslySetInnerHTML={{ __html: data.text }} />
				</div>
			</section>
		</>
	)
}
