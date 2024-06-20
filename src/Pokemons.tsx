import { useState } from 'react'
import { usePokemons } from './api/hooks/usePokemons'
import { CircularProgress, Pagination } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const Pokemons = () => {
	const [page, setPage] = useState(0)
	const { data: pokemons, isError, isFetching } = usePokemons(page)

	if (isError) {
		return <p>Error loading pokemons</p>
	}

	if (pokemons) {
		return (
			<>
				<div className="flex flex-col justify-center items-center bg-red-600">
					<ul>
						{pokemons.results.map(pokemon => (
							<li key={pokemon.url}>
								<Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
							</li>
						))}
					</ul>
					<Pagination
						total={Math.ceil(pokemons.count / 20)}
						page={page + 1}
						onChange={newPage => setPage(newPage - 1)}
						showControls
					/>
					{isFetching && <CircularProgress />}
				</div>
			</>
		)
	}
}
