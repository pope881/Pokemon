import { useParams } from 'react-router-dom'
import { StatName, TypeName, usePokemon } from './api/hooks/usePokemon'
import { CircularProgress, Link, Progress, baseStyles } from '@nextui-org/react'

export const Pokemon = () => {
	const { id } = useParams()
	const { data: pokemon, isFetching, isError } = usePokemon(id as string)
	if (isFetching) {
		return <CircularProgress />
	}

	if (!pokemon || isError) {
		return <div>Error occured</div>
	}
	const { name, order, types, moves, stats } = pokemon
	const biggestStat = Math.max(...stats.map(({ base_stat }) => base_stat))
	// Math.max(...[1,2,3,4,5,6,7])
	// Math.max(1,2,3,4,5,6,7)
	const capitalizedName = name[0].toUpperCase() + name.slice(1)
	const getTypeColor = (typeName: TypeName) => {
		switch (typeName) {
			case TypeName.grass: {
				return 'bg-green-600'
			}
			case TypeName.bug: {
				return 'bg-lime-900'
			}
			default: {
				return 'bg-slate-400'
			}
		}
	}

	const getStatColor = (statName: StatName) => {
		switch (statName) {
			default: {
				return 'bg-slate-400'
			}
		}
	}
	return (
		<div className="flex flex-col justify-center px-6">
			<div className="flex gap-4 items-center w-full">
				<img className="h-32" src={pokemon.sprites.front_default} />
				<div className="flex flex-col gap-2 w-full max-w-xs">
					<h1>{capitalizedName}</h1>
					<span>#{order}</span>
					{stats.map(({ stat, base_stat }) => (
						<div className="flex items-center gap-2">
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
