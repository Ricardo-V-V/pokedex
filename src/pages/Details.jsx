import DetailsHeader from '../components/DetailsHeader'
import Tabs from '../components/Tabs'
import { useQuery } from 'urql'
import { useParams } from 'react-router'

export default function Details() {
	const params = useParams()
	const id = params.id

	const POKEMON_QUERY = `{
  pokemon_v2_pokemon_by_pk(id: ${id}) {
    base_experience
    id
    name
    height
    pokemon_v2_pokemonmoves(distinct_on: move_id) {
      pokemon_v2_move {
        name
        accuracy
        pokemon_v2_type {
          name
        }
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}`

	const [result] = useQuery({ query: POKEMON_QUERY })
	const { data, fetching, error } = result

	if (fetching) return 'Loading...'
	if (error) return <pre>Error: {error.message}</pre>

	const types = data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemontypes.map(
		type => type.pokemon_v2_type.name
	)

	const moves = data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonmoves.map(
		move => {
			return {
				...move.pokemon_v2_move,
				type: move.pokemon_v2_move.pokemon_v2_type.name,
			}
		}
	)

	console.log(moves)
	return (
		<>
			<DetailsHeader
				id={id}
				name={data.pokemon_v2_pokemon_by_pk.name}
				types={types}
			/>
			<Tabs moves={moves} />
		</>
	)
}
