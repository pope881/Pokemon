import { useParams } from 'react-router-dom'
import { useAttack } from './api/hooks/useAttack'
import { CircularProgress } from '@nextui-org/react'
import { NatureTypes } from './NatureTypes'

export const Attack = () => {
	const params = useParams()
	const attackName = params.move

	const { data: attack, isFetching, isError } = useAttack(attackName as string)

	console.log(attack)

	if (isFetching) {
		return (
			<div className="flex items-center justify-center">
				<CircularProgress className="mt-60" color="success" label="Loading..." size="lg" />
			</div>
		)
	}

	if (!attack || isError) {
		return <div>Error occured</div>
	}

	const { accuracy, id, name, power, pp, priority, type } = attack

	return (
		<div className="flex flex-col justify-center px-6">
			<h1 className="text-4xl">{name}</h1>
			<span className="text-2xl">id: {id}</span>
			<div className="flex flex-col gap-1 ">
				<span>Stats:</span>
				<span className="ml-2">Accuracy: {accuracy}</span>
				<span className="ml-2">Priority: {priority}</span>
				<span className="ml-2">Power Points: {pp}</span>
				<span className="ml-2">Power: {power}</span>
			</div>
			<NatureTypes types={[type]} />
		</div>
	)
}
