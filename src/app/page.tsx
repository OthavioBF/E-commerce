import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import LineChart from '@/components/LineChart'
import { Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Home() {
	const weekDays = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI']
	const chartValues = ['50k', '40k', '30k', '20k', '10k', '0k']

	const tableData = [
		{
			METHOD: 'PayPal',
			CREATED: '#nZ8wy',
			TOTAL: '$678.5',
			STATUS: 'Pending',
		},
		{
			METHOD: 'Card',
			CREATED: '#ZrANL',
			TOTAL: '$165.58',
			STATUS: 'Shipped',
		},
		{
			METHOD: 'Skrill',
			CREATED: '#XIA1e',
			TOTAL: '$463.25',
			STATUS: 'Confirmed',
		},
		{
			METHOD: 'Visa Card',
			CREATED: '#CVaZE',
			TOTAL: '$363.25',
			STATUS: 'Rejected',
		},
	] as const

	const topSellers = [
		{
			AMOUNT: '$350K',
			NAME: 'Gage Paquette',
			COUNT: '13,440',
			IMAGE_URL: 'https://github.com/shadcn.png',
		},
		{
			AMOUNT: '$148K',
			NAME: 'Lara Harvey',
			COUNT: '10,240',
			IMAGE_URL: 'https://github.com/shadcn.png',
		},
		{
			AMOUNT: '$148K',
			NAME: 'Evan Scott',
			COUNT: '10,240',
			IMAGE_URL: 'https://github.com/shadcn.png',
		},
		{
			AMOUNT: '$148K',
			NAME: 'Benja Johnston',
			COUNT: '10,240',
			IMAGE_URL: 'https://github.com/shadcn.png',
		},
	] as const

	const productsData = [
		{
			PRODUCT_NAME: 'Apple Watch',
			PRICE: '$1,799',
			SOLD: '2,389 pcs',
			SALES: '$17,689',
		},
		{
			PRODUCT_NAME: 'Nike Shoes',
			PRICE: '$739',
			SOLD: '6,698 pcs',
			SALES: '$62,397',
		},
		{
			PRODUCT_NAME: 'Ribbon Glass',
			PRICE: '$245',
			SOLD: '300 pcs',
			SALES: '$7,658',
		},
		{
			PRODUCT_NAME: 'Apple Watch',
			PRICE: '$139',
			SOLD: '2,389 pcs',
			SALES: '$6,658',
		},
	] as const

	return (
		<div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-12">
			<Card className="grid lg:lg:col-span-3">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
						1,352{' '}
						<span className="rounded-full bg-slate-200 p-1 font-light text-slate-400 dark:bg-zinc-600 dark:text-violet-400">
							+12.5%
						</span>
					</CardTitle>
					<CardDescription>Daily visitors</CardDescription>
				</CardHeader>
				<CardFooter className="mt-auto grid grid-cols-4">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="" alt="@shadcn" />
						<AvatarFallback>+ 2</AvatarFallback>
					</Avatar>
				</CardFooter>
			</Card>

			<Card className="grid lg:col-span-3">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
						$51,352{' '}
						<span className="rounded-full bg-green-100 p-1 font-light text-green-500 dark:bg-zinc-600 ">
							+12.5%
						</span>
					</CardTitle>
					<CardDescription>Average Daily Sales</CardDescription>
				</CardHeader>
				<CardFooter className=" mt-auto grid grid-cols-7 grid-rows-4 gap-2">
					{Array.from({ length: 7 }).map((_, i) => (
						<div
							key={i}
							className={cn(
								'row-span-3 h-full rounded-t-full bg-slate-300  even:row-span-4 even:bg-violet-500',
							)}
						/>
					))}
				</CardFooter>
			</Card>

			<Card className="grid lg:col-span-3">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
						1,352{' '}
						<span className="rounded-full bg-red-100 p-1 font-light text-red-300 dark:bg-zinc-600">
							-2.5%
						</span>
					</CardTitle>
					<CardDescription>Order This Month</CardDescription>
				</CardHeader>
				<CardFooter className="mt-auto grid gap-2">
					<div className="flex justify-between">
						<span className="text-card-foreground">1,500 to Goal</span>
						<span className="text-muted-foreground">80%</span>
					</div>
					<Progress value={80} barColor="bg-teal-500" />
				</CardFooter>
			</Card>

			<Card className="grid lg:col-span-3">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-xl lg:text-2xl">
						$20,360{' '}
						<span className="rounded-full bg-red-100 p-1 font-light text-red-300 dark:bg-zinc-600">
							-2.5%
						</span>
					</CardTitle>
					<CardDescription>Monthly Earnings</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="mt-auto grid gap-2">
					<div className="flex justify-between">
						<span className="text-xs text-card-foreground">1,500 to Goal</span>
						<span className="text-xs text-muted-foreground">80%</span>
					</div>
					<Progress value={80} barColor="bg-violet-500" />
				</CardFooter>
			</Card>

			<Card className="lg:col-span-8">
				<CardHeader>
					<CardTitle>Sales</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="relative mb-2 ml-4 h-36 pl-4">
						<ul className="relative h-full">
							{chartValues.map((value, i) => (
								<li
									key={i}
									className={cn('relative', 'border-t border-dashed')}
									style={{ height: `${100 / (chartValues.length - 1)}%` }}
								>
									<span className="absolute -left-7 -top-3 text-sm text-muted-foreground">
										{value}
									</span>
								</li>
							))}
						</ul>

						<div className="ml-6 flex w-[90%] justify-between">
							{weekDays.map((day, i) => (
								<div
									key={i}
									className="group flex justify-center text-sm text-muted-foreground"
								>
									<div
										className={cn(
											'absolute bottom-0 w-4 rounded-t-full bg-slate-500 group-even:bg-violet-500',
										)}
										style={{ height: `${i + 1}0%` }}
									/>
									<span>{day}</span>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="lg:col-span-4">
				<CardHeader>
					<CardTitle>Pie Chart</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>

			<Card className="lg:col-span-8">
				<CardHeader>
					<CardTitle>Recent Orders</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">METHOD</TableHead>
								<TableHead>CREATED</TableHead>
								<TableHead>TOTAL</TableHead>
								<TableHead className="text-right">STATUS</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{tableData.map((row, i) => (
								<TableRow key={i}>
									<TableCell className="font-medium">{row.METHOD}</TableCell>
									<TableCell>{row.CREATED}</TableCell>
									<TableCell>{row.TOTAL}</TableCell>
									<TableCell className="text-right">
										<Badge
											className={cn('bg-primary/10 dark:bg-primary/20', {
												'bg-amber-100 text-amber-600': row.STATUS === 'Pending',
												'bg-teal-100 text-teal-600': row.STATUS === 'Shipped',
												'bg-violet-100 text-violet-600':
													row.STATUS === 'Confirmed',
												'bg-red-100 text-red-700': row.STATUS === 'Rejected',
											})}
										>
											{row.STATUS}
										</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<Card className="lg:col-span-4">
				<CardHeader>
					<CardTitle>Top Seller</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
						<span>Profile</span>
						<span>Items Solid</span>
					</div>
					<div className="grid gap-2">
						{topSellers.map((topSeller, i) => (
							<div key={i} className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<Avatar>
										<AvatarImage src={topSeller.IMAGE_URL} alt="@shadcn" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<div className="flex flex-col">
										<span className="text-muted-foreground">
											{topSeller.AMOUNT}
										</span>
										<strong className="text-foreground">
											{topSeller.NAME}
										</strong>
									</div>
								</div>
								<span className="text-muted-foreground">{topSeller.COUNT}</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card className="lg:col-span-4">
				<CardHeader>
					<CardTitle>50.56%</CardTitle>
					<CardDescription>Returning Rate</CardDescription>
				</CardHeader>
				<CardContent>
					<Suspense fallback="Loading...">
						{typeof window !== undefined && <LineChart />}
					</Suspense>
				</CardContent>
			</Card>

			<Card className="lg:col-span-8">
				<CardHeader className="flex-row items-center justify-between">
					<CardTitle>Top Products</CardTitle>
					<Input placeholder="Search Products..." icon={<Search />} />
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">PRODUCT NAME</TableHead>
								<TableHead className="text-right">PRICE</TableHead>
								<TableHead className="text-right">SOLD</TableHead>
								<TableHead className="text-right">SALES</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{productsData.map((row, i) => (
								<TableRow key={i}>
									<TableCell className="font-medium">
										{row.PRODUCT_NAME}
									</TableCell>
									<TableCell className="text-right">{row.PRICE}</TableCell>
									<TableCell className="text-right">{row.SOLD}</TableCell>
									<TableCell className="text-right">{row.SALES}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}
