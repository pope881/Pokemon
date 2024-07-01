import { useParams } from 'react-router-dom'
import { StatName, TypeName, usePokemon } from './api/hooks/usePokemon'
import { CircularProgress, Link, Progress } from '@nextui-org/react'

export const Pokemon = () => {
	const { id } = useParams()
	const { data: pokemon, isFetching, isError } = usePokemon(id as string)

	// console.log(pokemon)
	if (isFetching) {
		return (
			<div className="flex items-center justify-center">
				<CircularProgress className="mt-60" color="success" label="Loading..." size="lg" />
			</div>
		)
	}

	if (!pokemon || isError) {
		return <div>Error occured</div>
	}
	const { name, order, types, moves, stats, sprites } = pokemon
	const biggestStat = Math.max(...stats.map(({ base_stat }) => base_stat))
	console.log(biggestStat)
	console.log(stats)
	// Math.max(...[1,2,3,4,5,6,7])
	// Math.max(1,2,3,4,5,6,7)
	const capitalizedName = name[0].toUpperCase() + name.slice(1)
	const getTypeColor = (typeName: TypeName) => {
		switch (typeName) {
			case TypeName.dragon: {
				return 'bg-fuchsia-600'
			}
			case TypeName.electric: {
				return 'bg-teal-600'
			}
			case TypeName.grass: {
				return 'bg-green-600'
			}
			case TypeName.bug: {
				return 'bg-lime-900'
			}
			case TypeName.dark: {
				return 'bg-stone-800'
			}
			case TypeName.water: {
				return 'bg-sky-600'
			}
			case TypeName.fire: {
				return 'bg-orange-600'
			}
			case TypeName.psychic: {
				return 'bg-lime-400'
			}
			case TypeName.steel: {
				return 'bg-stone-400'
			}
			case TypeName.unknown: {
				return 'bg-indigo-400'
			}
			case TypeName.ice: {
				return 'bg-cyan-400'
			}
			case TypeName.ground: {
				return 'bg-yellow-950'
			}
			case TypeName.fairy: {
				return 'bg-pink-800'
			}
			case TypeName.poison: {
				return 'bg-rose-700'
			}
			case TypeName.rock: {
				return 'bg-stone-400'
			}
			case TypeName.fighting: {
				return 'bg-rose-500'
			}
			case TypeName.flying: {
				return 'bg-sky-400'
			}
			case TypeName.ghost: {
				return 'bg-violet-300'
			}
			case TypeName.normal: {
				return 'bg-violet-300'
			}
			case TypeName.shadow: {
				return 'bg-red-200'
			}
			case TypeName.stellar: {
				return 'bg-stone-600'
			}
			default: {
				return 'bg-slate-400'
			}
		}
	}

	const getStatColor = (statName: StatName) => {
		switch (statName) {
			case StatName.attack: {
				return 'bg-fuchsia-400'
			}
			case StatName.defense: {
				return 'bg-red-400'
			}
			case StatName.specialAttack: {
				return 'bg-orange-400'
			}
			case StatName.accuracy: {
				return 'bg-lime-400'
			}
			case StatName.hp: {
				return 'bg-green-400'
			}
			case StatName.evasion: {
				return 'bg-cyan-400'
			}
			case StatName.speed: {
				return 'bg-indigo-400'
			}
			case StatName.specialDefense: {
				return 'bg-rose-400'
			}
			default: {
				return 'bg-slate-400'
			}
		}
	}
	return (
		<div className="flex flex-col justify-center px-6    ">
			<div className="flex gap-4 items-center w-full">
				<img className="h-32" src={sprites.front_default} />
				<div className="flex flex-col gap-2 w-full max-w-xs">
					<div className="flex items-end gap-4">
						<h1 className="text-4xl">{capitalizedName}</h1>
						<span className="text-2xl">#{order}</span>
					</div>
					{stats.map(({ stat, base_stat }) => (
						<div key={stat.url} className="flex items-center gap-2 ">
							<span className="min-w-32 whitespace-nowrap text-right">{stat.name}</span>
							<Progress value={(base_stat / biggestStat) * 100} classNames={{ indicator: getStatColor(stat.name) }} />
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center gap-2">
				{types.map(({ type }) => (
					<div
						key={type.name}
						className={`${getTypeColor(
							type.name
						)} flex items-center justify-center rounded-lg text-lg px-4 py-2 text-white `}>
						{type.name}
					</div>
				))}
			</div>
			<div className="flex flex-col">
				<span>Possible moves:</span>
				<ol>
					{moves.map(({ move }) => (
						<li key={move.name}>
							<Link href={`/attack/${move.name}`}>{move.name}</Link>
						</li>
					))}
				</ol>
			</div>
			{/* <img className="h-32" src={pokemon.sprites.back_default} />
			<img className="h-32" src={pokemon.sprites.front_shiny} />
			<img className="h-32" src={pokemon.sprites.back_shiny} /> */}
			<div></div>
		</div>
	)
}
