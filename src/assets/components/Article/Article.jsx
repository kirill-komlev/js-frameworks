import { NavLink } from 'react-router-dom'

export default function Article({ className, imgSrc, title, text, id }) {
	return (
		<>
			<div className={`${className} article`}>
				<img
					className='article-img'
					src={imgSrc}
					alt=''
				/>
				<h4
					className='article__title'
					dangerouslySetInnerHTML={{ __html: title }}
				></h4>
				<div
					className='article__text'
					dangerouslySetInnerHTML={{ __html: text }}
				></div>
				<NavLink
					className='article__link'
					to={`/articles/${id}`}
				>
					Узнать больше
				</NavLink>
			</div>
		</>
	)
}
