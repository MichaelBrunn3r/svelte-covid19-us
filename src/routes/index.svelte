<script context="module">
	import requests from '../data/requests.js';

	export async function preload() {
		try {
			const usStats = await requests.usStats();
			const historic = await requests.historicUS();
			return { usStats, historic };
		} catch (e) {
			this.error(500, e);
			return;
		}
	}
</script>

<script>
	import Stat from '../components/Stat.svelte';
	import Chart from '../components/Chart.svelte';
	import TableContainer from '../components/TableContainer.svelte';
	import About from './about.svelte';
	import Nav from '../components/Nav.svelte';

	export let usStats;
	export let historic;
</script>

<svelte:head>
	<title>Covid-19 US Tracker</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 US</h1>
	</div>
</div>

<Stat {...usStats}/>
<Chart historicData={historic} title="US Convid-19"/>
<TableContainer/>