import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { pokeapi } from '../pokeapi'
import { NameUrl, TypeName } from './usePokemon'

type FlavorTextEntry = {
	flavor_text: string
	language: NameUrl<string>
	version_group: NameUrl<string>
}

type Attack = {
	accuracy: number
	id: number
	name: string
	power: number
	pp: number
	priority: number
	type: NameUrl<TypeName>
	flavor_text_entries: Array<FlavorTextEntry>
}

export const useAttack = (attackName: string) =>
	useQuery<Attack>({
		queryKey: ['attack', attackName],
		queryFn: () => pokeapi.get(`/move/${attackName}`).then(({ data }) => data),
		staleTime: 30 * 24 * 60 * 60 * 1000,
		placeholderData: keepPreviousData,
	})
