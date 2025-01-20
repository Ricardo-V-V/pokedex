import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/details/:id' element={<Details />} />
					<Route path='*' element={<Home />} />
				</Route>
			</Routes>
		</Router>
	)
}
