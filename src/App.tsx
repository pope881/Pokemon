import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
	return (
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	)
}

export default App
