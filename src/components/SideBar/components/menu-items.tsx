import { Home, Link, Presentation } from 'lucide-react'
import { createElement } from 'react'

const links = [
	{
		name: 'Home',
		icon: createElement(Home),
	},
	{
		name: 'E-Commerce',
		icon: createElement(Presentation),
	},
] as const

export default function MenuItems() {
	return (
		<div>
			{links.map((link, i) => (
				<Link key={i} href="" className="flex items-center gap-2 p-3 ">
					{link.icon} {link.name}
				</Link>
			))}
		</div>
	)
}
