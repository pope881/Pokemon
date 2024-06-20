import { useParams } from 'react-router-dom'
import { usePokemon } from './api/hooks/usePokemon'
import { CircularProgress } from '@nextui-org/react'

export const Pokemon = () => {
	const { id, ...params } = useParams()
	console.log(params)
	const { data: pokemon, isFetching, isError } = usePokemon(id as string)

	if (isFetching) {
		return <CircularProgress />
	}

	if (!pokemon || isError) {
		return <div>Error occured</div>
	}

	return (
		<div>
			<span>{pokemon.name}</span>
			<img src={pokemon.sprites.front_default} />
		</div>
	)
}
