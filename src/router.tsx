import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './Home'
import { Pokemons } from './Pokemons'
import { Attacks } from './Attacks'
import { Items } from './Items'
import { MyAccount } from './MyAccount'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/pokemons', element: <Pokemons /> },
			{ path: '/attacks', element: <Attacks /> },
			{ path: '/items', element: <Items /> },
			{ path: '/my-account', element: <MyAccount /> },
		],
	},
])
