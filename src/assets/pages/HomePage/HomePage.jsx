import introBg from '../../../images/intro-bg.jpg'

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

				<section className='popular-blogs'>
					<div className='popular-blogs__inner container'>
						<h3>Последние блоги</h3>
						<div className='popular-blogs blogs-section'>
							<div className='popular-blogs blog'>
								<img
									className='blog-img'
									src={introBg}
									alt=''
								/>
								<h4 className='blog__title'>Lorem ipsum dolor sit amet sit amet sit amet</h4>
								<p className='blog__text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem! Quam beatae sunt, minus magni eveniet repudiandae ex facere mollitia sit. Magnam a
									quaerat odio atque quisquam? Earum, officia assumenda?
								</p>
								<a
									className='blog__link'
									href=''
								>
									Узнать больше
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
