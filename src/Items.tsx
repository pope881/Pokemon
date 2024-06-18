const items = [
	{ name: 'one', id: 1 },
	{ name: 'two', id: 2 },
	{ name: 'three', id: 3 },
	{ name: 'four', id: 4 },
]

export const Items = () => {
	return (
		<>
			<div className="flex justify-center items-center h-44 bg-red-600">
				<ul>
					{items.map(item => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}
