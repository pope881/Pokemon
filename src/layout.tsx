import { Outlet } from 'react-router-dom'
import { NavbarMenus } from './NavbarMenus'

export const Layout = () => {
	return (
		<>
			<NavbarMenus />
			<Outlet />
		</>
	)
}
