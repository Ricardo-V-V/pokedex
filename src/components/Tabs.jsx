import { useState } from 'react'

export default function Tabs({ moves }) {
	const [toggle, setToggle] = useState(1)
	function updateToggle(id) {
		setToggle(id)
	}

	return (
		<div className='tabs'>
			<ul className='tabs-nav'>
				<li
					className={`tabs-nav-link ${toggle === 1 ? 'tabs-nav-link-active' : ''}`}
					onClick={() => updateToggle(1)}
				>
					About
				</li>
				<li
					className={`tabs-nav-link ${toggle === 2 ? 'tabs-nav-link-active' : ''}`}
					onClick={() => updateToggle(2)}
				>
					Base Stats
				</li>
				<li
					className={`tabs-nav-link ${toggle === 3 ? 'tabs-nav-link-active' : ''}`}
					onClick={() => updateToggle(3)}
				>
					Evolution
				</li>
				<li
					className={`tabs-nav-link ${toggle === 4 ? 'tabs-nav-link-active' : ''}`}
					onClick={() => updateToggle(4)}
				>
					Moves
				</li>
			</ul>
			<div
				className={`tab-content ${toggle === 1 ? 'tab-content-show' : 'tab-content-hide'}`}
			>
				<p>Soy About</p>
			</div>
			<div
				className={`tab-content ${toggle === 2 ? 'tab-content-show' : 'tab-content-hide'}`}
			>
				<p>Soy Base Stats</p>
			</div>
			<div
				className={`tab-content ${toggle === 3 ? 'tab-content-show' : 'tab-content-hide'}`}
			>
				<p>Soy Evolution</p>
			</div>
			<div
				className={`tab-content ${toggle === 4 ? 'tab-content-show' : 'tab-content-hide'}`}
			>
				{moves && (
					<table>
						<thead>
							<tr>
								<th>Move</th>
								<th>Type</th>
								<th>Accuracy</th>
							</tr>
						</thead>
						<tbody>
							{moves.map(move => (
								<tr key={move.name}>
									<td>{move.name}</td>
									<td>{move.type}</td>
									<td>{move.accuracy || '—'}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	)
}
