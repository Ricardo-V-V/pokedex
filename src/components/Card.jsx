import CardPill from './CardPill'

export default function Card({
	id = 0,
	name = 'Nombre',
	types = ['tipo1', 'tipo2'],
}) {
	const typeList = types.map(item => <CardPill key={item} type={item} />)

	const typeColor = types[0]

	return (
		<>
			<div className={`card card--${typeColor}`}>
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
		</>
	)
}
