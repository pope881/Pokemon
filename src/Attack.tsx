import { useParams } from 'react-router-dom'

export const Attack = () => {
	const params = useParams()
	console.log(params)
	const name = params.move

	return <div>{name}</div>
}
