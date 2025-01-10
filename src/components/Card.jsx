import CardPill from './CardPill'

export default function Card({
	id = 11,
	name = 'Nombre',
	types = ['test1', 'test2'],
}) {
	const typeList = types.map(item => <CardPill key={item} type={item} />)

	const typeColor = 'fire'

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
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
