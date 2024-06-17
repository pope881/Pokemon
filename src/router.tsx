import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ index: true, element: <div>defddddd</div> }],
	},
])
