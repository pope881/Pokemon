import { Link } from 'react-router-dom'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
} from '@nextui-org/react'
// import { SearchIcon } from './SearchIcon.jsx'

type RouteLinkProps = {
	text: string
	to: string
}

const navlinks = [
	{ text: 'Home', to: '/' },
	{ text: 'Pokemons', to: '/pokemons' },
	{ text: 'Attacks', to: '/attacks' },
	{ text: 'Items', to: '/items' },
	{ text: 'My account', to: '/my-account' },
]

const RouteLink = (props: RouteLinkProps) => {
	return <Link to={props.to}>{props.text}</Link>
}

export const NavbarMenu = () => {
	return (
		<>
			<nav className="flex text-lg bg-gradient-to-r from-violet-500 border-t-orange-500 px-4 bg-red-600 text-white items-center justify-between lg:hidden fixed bottom-0 left-0 w-screen h-[10vh]">
				{navlinks.map(link => (
					<RouteLink {...link} key={link.to} />
				))}
			</nav>

			<Navbar className="hidden lg:block" isBordered>
				<NavbarContent justify="start">
					<NavbarBrand className="mr-4">
						<p className="hidden sm:block font-bold text-inherit">Pokemon API</p>
					</NavbarBrand>
					<NavbarContent className="hidden sm:flex gap-3">
						<NavbarItem>
							<Link to="/" color="foreground">
								Home
							</Link>
						</NavbarItem>
						<NavbarItem isActive>
							<Link to="/pokemons" aria-current="page" color="secondary">
								Pokemons
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link to="/attacks" color="foreground">
								Attacks
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link to="/items" color="foreground">
								Items
							</Link>
						</NavbarItem>
					</NavbarContent>
				</NavbarContent>

				<NavbarContent as="div" className="items-center" justify="end">
					<Input
						classNames={{
							base: 'max-w-full sm:max-w-[10rem] h-10',
							mainWrapper: 'h-full',
							input: 'text-small',
							inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
						}}
						placeholder="Type to search..."
						size="sm"
						// startContent={<SearchIcon size={18} />}
						type="search"
					/>
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Avatar
								isBordered
								as="button"
								className="transition-transform"
								color="secondary"
								name="Jason Hughes"
								size="sm"
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							/>
						</DropdownTrigger>
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem key="profile" className="h-14 gap-2">
								<p className="font-semibold">Signed in as</p>
								<p className="font-semibold">zoey@example.com</p>
							</DropdownItem>
							<DropdownItem key="settings">My Settings</DropdownItem>
							<DropdownItem key="team_settings">Team Settings</DropdownItem>
							<DropdownItem key="analytics">Analytics</DropdownItem>
							<DropdownItem key="system">System</DropdownItem>
							<DropdownItem key="configurations">Configurations</DropdownItem>
							<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
							<DropdownItem key="logout" color="danger">
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarContent>
			</Navbar>
		</>
	)
}