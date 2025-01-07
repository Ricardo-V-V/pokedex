import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function MainLayout() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<Outlet />
			<p>Footer</p>
		</>
	)
}
