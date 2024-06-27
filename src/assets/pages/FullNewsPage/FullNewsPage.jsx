import { news } from '../../../data'

import { useParams } from 'react-router-dom'

export default function FullNewsPage() {
	const param = useParams()

	let data = news[param.id]

	return (
		<>
			<div className='full-news-page intro intro--small background-tint'>
				<img
					className='intro--small intro-img'
					src={data.img}
					alt=''
				/>
				<div className='intro__inner container'>
					<h2 className='intro__title'>{data.title}</h2>
					<small className='intro__date'>{data.date}</small>
				</div>
			</div>
			<section>
				<div className='main-full-news__inner container'>
					<div dangerouslySetInnerHTML={{ __html: data.text }} />
				</div>
			</section>
		</>
	)
}
