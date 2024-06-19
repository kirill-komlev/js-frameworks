import classes from './HomePage.module.css'

export default function HomePage() {
	return (
		<>
			<main>
				<section className={classes.intro}>
					<div className={`${classes.intro__inner} container`}>
						<h1 className={classes.intro__title}>Title</h1>
						<h3 className={classes.intro__subtitle}>Subtitle</h3>
						<p className={classes.intro__text}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sed reiciendis debitis veniam vero voluptatum dolorem obcaecati nemo. Amet culpa aliquam eaque
							temporibus laborum maxime nobis fuga provident dolore expedita.
						</p>
					</div>
				</section>
			</main>
		</>
	)
}
