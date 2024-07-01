import { useState } from 'react'
import { usePokemons } from './api/hooks/usePokemons'
import { CircularProgress, Pagination } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const Pokemons = () => {
	const [page, setPage] = useState(0)
	const { data: pokemons, isError, isFetching } = usePokemons(page)
	console.log(pokemons)

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
					<p className="text-3xl">List of pokemons:</p>
					<div className="p-10 space-y-4">
						{pokemons.results.map(pokemon => {
							const name = pokemon.name
							const capitalizedName = name[0].toUpperCase() + name.slice(1)
							return (
								<div
									key={pokemon.url}
									className="flex items-center justify-center rounded-lg text-lg px-4 py-2 text-black border-1 bg-red-300 hover:bg-red-400 transition duration-150 ease-out hover:ease-in hover:scale-110 ">
									<Link to={`/pokemon/${pokemon.name}`}>{capitalizedName}</Link>
								</div>
							)
						})}
					</div>
					<Pagination
						total={Math.ceil(pokemons.count / 20)}
						page={page + 1}
						onChange={newPage => setPage(newPage - 1)}
						showControls
					/>
					{isFetching && <CircularProgress color="success" label="Loading..." size="lg" />}
				</div>
			</>
		)
	}
}
