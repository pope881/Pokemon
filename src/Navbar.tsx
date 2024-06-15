import { Link } from 'react-router-dom'

type RouteLinkProps = {
	text: string
	to: string
}

const navlinks = [
	{ text: 'pokemons', to: '/pokemons' },
	{ text: 'attacks', to: '/attacks' },
	{ text: 'items', to: '/items' },
	{ text: 'my account', to: '/my-account' },
]

const RouteLink = (props: RouteLinkProps) => {
	return <Link to={props.to}>{props.text}</Link>
}

export const Navbar = () => {
	return (
		<>
			<nav className="flex px-4 bg-red-500 text-white items-center justify-between lg:hidden fixed bottom-0 left-0 w-screen">
				{navlinks.map(link => (
					<RouteLink {...link} key={link.to} />
				))}
			</nav>
		</>
	)
}
