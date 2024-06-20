import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient()

	return (
		<NextUIProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</NextUIProvider>
	)
}

export default App
