import { NavLink } from 'react-router-dom'

export default function News({ imgSrc, title, date, id }) {
	return (
		<>
			<NavLink
				to={`/news/${id}`}
				className='news-block background-tint'
			>
				<img
					className='news-img'
					src={imgSrc}
					alt=''
				/>

				<div className='news-text'>
					<small dangerouslySetInnerHTML={{ __html: date }}></small>
					<h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
				</div>
			</NavLink>
		</>
	)
}
