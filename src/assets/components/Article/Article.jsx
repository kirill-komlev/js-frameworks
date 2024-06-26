import { NavLink } from 'react-router-dom'

export default function Article({ imgSrc, title, date, id }) {
	return (
		<>
			<NavLink
				to={`/articles/${id}`}
				className='article__block'
			>
				<img
					className='article-img'
					src={imgSrc}
					alt=''
				/>
				<h5
					className='article__title'
					dangerouslySetInnerHTML={{ __html: title }}
				></h5>
				<small
					className='article__date'
					dangerouslySetInnerHTML={{ __html: date }}
				></small>
			</NavLink>
		</>
	)
}
