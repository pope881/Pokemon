import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Button,
	Link,
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
						<p className="font-bold text-inherit">PokeApi</p>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarBrand>
						<Link
							href="/"
							aria-current="page"
							color="foreground"
							className="font-bold text-inherit mr-10"
							underline="active">
							PokeApi
						</Link>
					</NavbarBrand>

					<NavbarItem>
						<Link href="/pokemons" aria-current="page" color="foreground" underline="active">
							Pokemons
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/attacks">
							Attacks
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/items">
							Items
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/my-account">
							My account
						</Link>
					</NavbarItem>
				</NavbarContent>

				<NavbarContent justify="end">
					<NavbarItem className="hidden lg:flex">
						<Link href="/">Login</Link>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} color="warning" href="/" variant="flat">
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>

				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link className="w-full mt-5" color="secondary" href={`${menuItemsLinks[index]}`} size="lg">
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</>
	)
}
