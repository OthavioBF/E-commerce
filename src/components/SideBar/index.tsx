'use client'

import { MouseEvent, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import MenuItems from './components/menu-items'
import { useSideBar } from '@/contexts/SideBarContext'

export default function SideBar() {
	const { isOpen, setIsOpen } = useSideBar()

	const ref = useRef<HTMLDivElement>(null!)

	// useEffect(() => {
	// 	console.log('isOpen', isOpen)

	// 	const handleClickOutside = (e: Event) => {
	// 		if (isOpen && !ref.current.contains(e.target as Node)) {
	// 			setIsOpen(false)
	// 		}
	// 	}

	// 	window.addEventListener('click', handleClickOutside)

	// 	return () => window.removeEventListener('click', handleClickOutside)
	// }, [ref])

	return (
		<div
			ref={ref}
			className={cn(
				'fixed bottom-0 left-0 top-0 hidden w-36 -translate-x-full bg-slate-500 opacity-0 transition-all duration-300 hover:w-48',
				{
					'opacity-1  z-10 block w-48 translate-x-0': isOpen,
				},
			)}
		>
			<MenuItems />
		</div>
	)
}
