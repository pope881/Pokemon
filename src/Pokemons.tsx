const pokemnos = [
	{ name: 'pika', id: 1 },
	{ name: 'mika', id: 2 },
	{ name: 'lika', id: 3 },
	{ name: 'zika', id: 4 },
]

export const Pokemons = () => {
	return (
		<>
			<div className="flex justify-center items-center h-44 bg-red-600">
				<ul>
					{pokemnos.map(pokemon => (
						<li key={pokemon.id}>{pokemon.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}
