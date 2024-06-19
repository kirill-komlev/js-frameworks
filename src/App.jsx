import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Header from './assets/components/Header/Header'

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<HomePage />
						</Suspense>
					}
				/>

				{/* <Route
					exact
					path='*'
					element={
						<Suspense fallback={<Loading />}>
							<Error />
						</Suspense>
					}
				/> */}
			</Routes>
		</>
	)
}
