import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { pokeapi } from '../pokeapi'

type Page<T> = {
	count: number
	next: null | string
	previous: null | string
	results: T
}

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
						// limit: 100,
					},
				})
				.then(({ data }) => data),
		staleTime: 30 * 24 * 60 * 60 * 1000,
		placeholderData: keepPreviousData,
	})
