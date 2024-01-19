'use client'

import { useSideBar } from '@/contexts/SideBarContext'
import { AlignLeft } from 'lucide-react'

export default function Header() {
	const { setIsOpen } = useSideBar()

	return (
		<div className="flex w-full py-3">
			<button onClick={() => setIsOpen(true)}>
				<AlignLeft className="lg:hidden" />
			</button>
			<h1>Financial</h1>
		</div>
	)
}
