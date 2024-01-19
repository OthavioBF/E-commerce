import { createElement, MouseEvent } from 'react'
import { Home, Link, Presentation } from 'lucide-react'
import { cn } from '@/lib/utils'

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

const menuData = [
	{ label: 'Menu 1' },
	{
		label: 'Menu 2',
		submenu: [{ label: 'Sub Menu 1' }, { label: 'Sub Menu 2' }],
	},
	{
		label: 'Menu 3',
		submenu: [
			{ label: 'Sub Menu 1' },
			{ label: 'Sub Menu 2' },
			{ label: 'Sub Menu 3' },
			{
				label: 'Sub Menu 4',
				submenu: [
					{
						label: 'Sub sub menu 1',
					},
					{ label: 'Sub sub menu 2' },
				],
			},
		],
	},
	{
		label: 'Menu 4',
		submenu: [{ label: 'Sub Menu 1' }, { label: 'Sub Menu 2' }],
	},
]

type SubMenuProps = {
	label: string
	submenu?: SubMenuProps[]
}

export default function MenuItems() {
	const toggleSubMenu = (e: MouseEvent<HTMLLIElement>) => {
		const liElement = e.target as HTMLLIElement
		const submenu = liElement.querySelector('ul')

		if (!submenu) return

		if (submenu.style.display === 'none' || !submenu.style.display) {
			submenu.style.display = 'block'
		} else {
			submenu.style.display = 'none'
		}
	}

	const renderSubMenu = (subMenu: SubMenuProps[]) => {
		return (
			<ul className={cn('hidden')}>
				{subMenu.map((subItem, index) => (
					<li key={index} onClick={toggleSubMenu}>
						{subItem.label}
						{subItem.submenu && renderSubMenu(subItem.submenu)}
					</li>
				))}
			</ul>
		)
	}

	return (
		<ul className="">
			{menuData.map((item, index) => (
				<li key={index} onClick={toggleSubMenu}>
					{item.label}
					{item.submenu && renderSubMenu(item.submenu)}
				</li>
			))}
		</ul>
	)
}
