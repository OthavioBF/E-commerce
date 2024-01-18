import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	icon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, icon, type, ...props }, ref) => {
		return (
			<div className="flex items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 shadow-sm">
				{icon && icon}
				<input
					type={type}
					className={cn(
						'flex h-9 w-full bg-transparent text-sm outline-none transition-colors placeholder:text-muted-foreground',
						'file:border-0 file:text-sm file:font-medium',
						'disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...props}
				/>
			</div>
		)
	},
)
Input.displayName = 'Input'

export { Input }
