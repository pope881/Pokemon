import { NameUrl, TypeName } from './api/hooks/usePokemon'

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

type NatureTypesProps = {
	types: Array<NameUrl<TypeName>>
}

export const NatureTypes = ({ types }: NatureTypesProps) => {
	return (
		<div className="flex items-center gap-2">
			{types.map(type => (
				<div
					key={type.name}
					className={`${getTypeColor(
						type.name
					)} flex items-center justify-center rounded-lg text-lg px-4 py-2 text-white `}>
					{type.name}
				</div>
			))}
		</div>
	)
}
