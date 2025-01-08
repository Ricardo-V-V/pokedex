import SearchIcon from '@mui/icons-material/Search'

export default function SearchFilter() {
	return (
		<div className='searchfilter'>
			<h2>What Pokemon are you looking for?</h2>
			<form className='searchfilter-form px-1'>
				<SearchIcon sx={{ fontSize: 32 }} />
				<input
					className='searchfilter-input'
					placeholder='Search Pokemon, type or number'
					maxLength='64'
					type='search'
					value=''
				/>
			</form>
		</div>
	)
}
