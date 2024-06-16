import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// const Home = lazy(() => import('./assets/pages/Home/Home'))

export default function App() {
	return (
		<>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>

				<Route
					exact
					path='*'
					element={
						<Suspense fallback={<Loading />}>
							<Error />
						</Suspense>
					}
				/>
			</Routes>
		</>
	)
}
