import { CatchingPokemon, DarkMode } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Navbar() {
	return (
		<nav className='navbar px-1'>
			<div className='navbar-brand'>
				<CatchingPokemon sx={{ fontSize: 32, mr: 1 }} />
				<Link to='/'>Pokédex App</Link>
			</div>
			<Link className='navbar-link' to='/favorites'>
				My Favorites
			</Link>
			<button
				className='mode-toggler'
				type='button'
				aria-label='Toggle Dark-Light Mode'
			>
				<DarkMode sx={{ fontSize: 32 }} />
			</button>
		</nav>
	)
}
