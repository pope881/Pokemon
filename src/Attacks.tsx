const attacks = [
	{ name: 'wind', id: 1 },
	{ name: 'flame', id: 2 },
	{ name: 'water', id: 3 },
	{ name: 'air', id: 4 },
]

export const Attacks = () => {
	return (
		<>
			<div className="flex justify-center items-center h-44 ">
				<ul>
					{attacks.map(attack => (
						<li key={attack.id}>{attack.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}
