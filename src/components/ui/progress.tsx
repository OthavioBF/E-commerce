'use client'

import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

type ProgressProps = {
	barColor: string
} & ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
		ref?: ForwardedRef<HTMLDivElement>
	}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	({ className, barColor, value, ...props }, ref) => (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
				className,
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className={cn(
					'h-full w-full flex-1 bg-primary transition-all',
					barColor,
				)}
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
