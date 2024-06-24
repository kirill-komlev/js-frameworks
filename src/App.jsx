import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Loading from './assets/components/Loading/Loading'
import Footer from './assets/components/Footer/Footer'

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))
const ArticlePage = lazy(() => import('./assets/pages/ArticlePage/ArticlePage'))

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								<HomePage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/articles/:id'
						element={
							<Suspense fallback={<Loading />}>
								<ArticlePage />
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
			</main>
			<Footer />
		</>
	)
}
