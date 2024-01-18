import { cn } from '@/lib/utils'
import MenuItems from './components/menu-items'

export default function SideBar() {
	return (
		<div
			className={cn(
				'bottom-0 left-0 top-0 hidden w-20 bg-slate-300 transition-all duration-300 ease-in-out hover:w-48 dark:bg-slate-600 lg:grid',
			)}
		>
			<h1>hola</h1>
			<MenuItems />
		</div>
	)
}
