import SearchFilter from '../components/SearchFilter'
import Cards from '../components/Cards'
import Card from '../components/Card'

export default function Home() {
	return (
		<>
			<h1>Pokédex</h1>
			<SearchFilter />
			<Cards>
				<Card />
				<Card />
				<Card />
				<Card />
			</Cards>
		</>
	)
}
