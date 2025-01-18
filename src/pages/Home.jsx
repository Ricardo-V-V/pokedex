import SearchFilter from '../components/SearchFilter'
import Cards from '../components/Cards'
import Card from '../components/Card'
import { useQuery } from 'urql'

const POKEMONS_QUERY = `
			 {
				pokemon_v2_pokemon(limit: 50) {
					id
					name
					pokemon_v2_pokemontypes {
						pokemon_v2_type {
							name
						}
					}
				}
			}
 `

export default function Home() {
	const [result] = useQuery({ query: POKEMONS_QUERY })
	const { data, fetching, error } = result

	if (fetching) return 'Loading...'
	if (error) return <pre>Error: {error.message}</pre>

	return (
		<>
			<h1>Pokédex</h1>
			<SearchFilter />
			<Cards>
				{data.pokemon_v2_pokemon.map(item => {
					// Extract type names into an array
					const types = item.pokemon_v2_pokemontypes.map(
						type => type.pokemon_v2_type.name
					)
					return (
						<Card
							key={item.id}
							id={item.id}
							name={item.name}
							types={types} // Pass the processed types
						/>
					)
				})}
			</Cards>
		</>
	)
}
