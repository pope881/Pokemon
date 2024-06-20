import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { pokeapi } from '../pokeapi'
import { Page } from '../types'

type BasicPokemon = {
	name: string
	url: string
}

export const usePokemons = (page: number) =>
	useQuery<Page<BasicPokemon[]>>({
		queryKey: ['pokemons', page],
		queryFn: () =>
			pokeapi
				.get(`/pokemon`, {
					params: {
						offset: page * 20,
					},
				})
				.then(({ data }) => data),
		staleTime: 30 * 24 * 60 * 60 * 1000,
		placeholderData: keepPreviousData,
	})
