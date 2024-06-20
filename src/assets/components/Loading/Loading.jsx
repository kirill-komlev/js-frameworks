import classes from './Loading.module.scss'

export default function Loading() {
	return (
		<>
			<main>
				<section className={classes.intro}>
					<span className={classes.loader}></span>
				</section>
			</main>
		</>
	)
}
