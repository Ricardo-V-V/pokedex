import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Pill from '../components/Pill'

export default function DetailsHeader({ id, name, types }) {
	const typeList = types.map(item => <Pill key={item} type={item} />)
	const typeColor = types[0]

	return (
		<div className={`details-header background--${typeColor}`}>
			<div className='details-title'>
				<h1>
					{name} #{id}
				</h1>
				<button
					className='details-favorite'
					type='button'
					aria-label='Toggle Favorite'
				>
					<FavoriteBorderIcon sx={{ fontSize: 32 }} />
				</button>
			</div>
			<div className='details-pills'>{typeList}</div>
			<div className='details-img'>
				<img
					alt={name}
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
				/>
			</div>
		</div>
	)
}
