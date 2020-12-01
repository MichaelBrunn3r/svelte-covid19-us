<script context="module">
	import requests from '../data/requests.js';

	export async function preload() {
		try {
			const usStats = await requests.usStats();
			return { usStats };
		} catch (e) {}
	}
</script>

<script>
	import Stat from '../components/Stat.svelte';
	import Chart from '../components/Chart.svelte';
	import TableContainer from '../components/TableContainer.svelte';

	export let usStats;
</script>

<svelte:head>
	<title>Covid-19 US Tracker</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 US</h1>
	</div>
</div>

<Stat/>
<Chart/>
<TableContainer/>