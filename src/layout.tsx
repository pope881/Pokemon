import { Outlet } from 'react-router-dom'
import { NavbarMenu } from './NavbarMenu'

export const Layout = () => {
	return (
		<div>
			<NavbarMenu />
			<Outlet />
		</div>
	)
}
