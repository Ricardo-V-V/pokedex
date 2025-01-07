import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>Hello World!</main>
		</ThemeProvider>
	)
}
