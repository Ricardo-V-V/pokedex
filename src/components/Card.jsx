import { Link } from 'react-router-dom'
import Pill from './Pill'

export default function Card({ id, name, types }) {
	const typeList = types.map(item => <Pill key={item} type={item} />)
	const typeColor = types[0]

	return (
		<Link className='card-link' to={`/details/${id}`}>
			<div className={`card background--${typeColor}`}>
				<div className='card-header'>
					<h5>{name}</h5>
					<span>#{id}</span>
				</div>
				<div className='card-body'>
					<div className='card-pills'>{typeList}</div>
					<div className='card-img'>
						<img
							alt={name}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}
