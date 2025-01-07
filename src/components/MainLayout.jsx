import { Outlet } from 'react-router-dom'

export default function MainLayout() {
	return (
		<>
			<h1>Aqui va el header</h1>
			<Outlet />
			<p>Footer</p>
		</>
	)
}
