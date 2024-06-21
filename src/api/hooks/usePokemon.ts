import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { pokeapi } from '../pokeapi'

type Pokemon = {
	name: string
	sprites: {
		back_default: string
		front_default: string
		back_shiny: string
		front_shiny: string
	}
}

export const usePokemon = (pokemonName: string) =>
	useQuery<Pokemon>({
		queryKey: ['pokemon', pokemonName],
		queryFn: () => pokeapi.get(`/pokemon/${pokemonName}/`).then(({ data }) => data),
		staleTime: 30 * 24 * 60 * 60 * 1000,
		placeholderData: keepPreviousData,
	})
