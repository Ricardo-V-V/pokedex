import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { Provider, Client, cacheExchange, fetchExchange } from 'urql'

const client = new Client({
	url: 'https://beta.pokeapi.co/graphql/v1beta',
	exchanges: [cacheExchange, fetchExchange],
})

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider value={client}>
			<App />
		</Provider>
	</StrictMode>
)
