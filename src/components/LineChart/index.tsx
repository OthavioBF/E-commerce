'use client'
import ApexCharts from 'react-apexcharts'

export default function LineChart() {
	const chartConfig = {
		series: [
			{
				name: 'Returning',

				data: [400, 300, 100, 90, 290, 190],
			},
			{
				name: 'New',
				data: [200, 100, 500, 400, 160, 90],
			},
		],
		options: {
			chart: {
				height: 200,
				type: 'line',
				toolbar: 'false',
			},
			stroke: {
				width: 2,
				curve: 'smooth',
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'Jun'],
				tickAmount: 10,
			},
			colors: ['#14b8a6', '#8b5cf6'],

			yaxis: {
				min: 0,
				max: 500,
			},
		},
	}

	return (
		<div>
			<div id="chart">
				<ApexCharts
					options={chartConfig.options}
					series={chartConfig.series}
					type="line"
					height={350}
				/>
			</div>
			<div id="html-dist"></div>
		</div>
	)
}
