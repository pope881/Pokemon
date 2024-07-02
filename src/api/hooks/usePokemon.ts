import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { pokeapi } from '../pokeapi'

export type NameUrl<T> = {
	name: T
	url: string
}

export enum StatName {
	hp = 'hp',
	attack = 'attack',
	defense = 'defense',
	specialAttack = 'special-attack',
	specialDefense = 'special-defense',
	speed = 'speed',
	accuracy = 'accuracy',
	evasion = 'evasion',
}

type Stat = {
	base_stat: number
	effort: number
	stat: NameUrl<StatName>
}

export enum TypeName {
	grass = 'grass',
	poison = 'poison',
	normal = 'normal',
	fighting = 'fighting',
	flying = 'flying',
	ground = 'ground',
	rock = 'rock',
	bug = 'bug',
	ghost = 'ghost',
	steel = 'steel',
	fire = 'fire',
	water = 'water',
	electric = 'electric',
	psychic = 'psychic',
	ice = 'ice',
	dragon = 'dragon',
	dark = 'dark',
	fairy = 'fairy',
	stellar = 'stellar',
	unknown = 'unknown',
	shadow = 'shadow',
}

type Type = {
	slot: number
	type: NameUrl<TypeName>
}

type Move = {
	move: NameUrl<string>
	version_group_details: Array<{
		level_learned_at: number
		move_learn_method: NameUrl<string>
		version_group: NameUrl<string>
	}>
}

type Pokemon = {
	name: string
	sprites: {
		back_default: string
		front_default: string
		back_shiny: string
		front_shiny: string
	}
	stats: Array<Stat>
	types: Array<Type>
	order: number
	moves: Array<Move>
}

export const usePokemon = (pokemonName: string) =>
	useQuery<Pokemon>({
		queryKey: ['pokemon', pokemonName],
		queryFn: () => pokeapi.get(`/pokemon/${pokemonName}/`).then(({ data }) => data),
		staleTime: 30 * 24 * 60 * 60 * 1000,
		placeholderData: keepPreviousData,
	})
