import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='main-layout px-1'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
