import { Link } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Button,
} from '@nextui-org/react'

const menuItems = ['Home', 'Pokemons', 'Attacks', 'Items', 'My account', 'Log Out']
const menuItemsLinks = ['/', '/pokemons', '/attacks', '/items', '/my-account', 'Log Out']

export const NavbarMenus = () => {
	return (
		<>
			<Navbar className="h-[10vh] " disableAnimation isBordered>
				<NavbarContent className="sm:hidden" justify="start">
					<NavbarMenuToggle />
				</NavbarContent>

				<NavbarContent className="sm:hidden pr-3" justify="center">
					<NavbarBrand>
						<p className="font-bold text-inherit">ACME</p>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarBrand>
						<Link to="/" aria-current="page" color="warning">
							<p className="font-bold text-inherit mr-10">PokeApi</p>
						</Link>
					</NavbarBrand>

					<NavbarItem isActive>
						<Link to="/pokemons" aria-current="page" color="warning">
							Pokemons
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" to="/attacks">
							Attacs
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" to="/items">
							Items
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" to="/my-account">
							My account
						</Link>
					</NavbarItem>
				</NavbarContent>

				<NavbarContent justify="end">
					<NavbarItem className="hidden lg:flex">
						<Link to="/">Login</Link>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} color="warning" to="/" variant="flat">
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>

				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								className="w-full"
								color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
								to={`${menuItemsLinks[index]}`}
								size="lg">
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</>
	)
}
