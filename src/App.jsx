import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Loading from './assets/components/Loading/Loading'
import Footer from './assets/components/Footer/Footer'

const HomePage = lazy(() => import('./assets/pages/HomePage/HomePage'))
const ArticlesPage = lazy(() => import('./assets/pages/ArticlesPage/ArticlesPage'))
const FullArticlePage = lazy(() => import('./assets/pages/FullArticlePage/FullArticlePage'))
const NewsPage = lazy(() => import('./assets/pages/NewsPage/NewsPage'))
const FullNewsPage = lazy(() => import('./assets/pages/FullNewsPage/FullNewsPage'))

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

export default function App() {
	return (
		<>
			<Header />
			<main>
				<ScrollToTop />
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
						path='/articles'
						element={
							<Suspense fallback={<Loading />}>
								<ArticlesPage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/articles/:id'
						element={
							<Suspense fallback={<Loading />}>
								<FullArticlePage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/news'
						element={
							<Suspense fallback={<Loading />}>
								<NewsPage />
							</Suspense>
						}
					/>

					<Route
						exact
						path='/news/:id'
						element={
							<Suspense fallback={<Loading />}>
								<FullNewsPage />
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
