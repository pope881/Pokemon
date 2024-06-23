import { useParams } from 'react-router-dom'
import { usePokemon } from './api/hooks/usePokemon'
import { CircularProgress } from '@nextui-org/react'

export const Pokemon = () => {
	const { id } = useParams()
	const { data: pokemon, isFetching, isError } = usePokemon(id as string)
	if (isFetching) {
		return <CircularProgress />
	}

	if (!pokemon || isError) {
		return <div>Error occured</div>
	}
	const str = pokemon.name
	const modStr = str[0].toUpperCase() + str.slice(1)
	return (
		<div className="flex flex-col justify-center items-center  mt-10 ">
			<p>{modStr}</p>
			<img className="h-32" src={pokemon.sprites.front_default} />
			<img className="h-32" src={pokemon.sprites.back_default} />
			<img className="h-32" src={pokemon.sprites.front_shiny} />
			<img className="h-32" src={pokemon.sprites.back_shiny} />
			<div></div>
		</div>
	)
}
