import { useState } from 'react'
import { usePokemons } from './api/hooks/usePokemons'
import { CircularProgress, Pagination } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const Pokemons = () => {
	const [page, setPage] = useState(0)
	const { data: pokemons, isError, isFetching } = usePokemons(page)
	// console.log(pokemons)
	// console.log(pokemons?.results)
	// console.log(pokemons?.count)
	// console.log(pokemons?.previous)
	// console.log(pokemons?.results)

	if (isError) {
		return <p>Error loading pokemons</p>
	}

	if (pokemons) {
		return (
			<>
				<div className="flex flex-col justify-center items-center p-5">
					<ul className="p-10">
						{pokemons.results.map(pokemon => {
							const str = pokemon.name
							const modStr = str[0].toUpperCase() + str.slice(1)
							return (
								<li key={pokemon.url}>
									<Link to={`/pokemon/${pokemon.name}`}>{modStr}</Link>
								</li>
							)
						})}
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
