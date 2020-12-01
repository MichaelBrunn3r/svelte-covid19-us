<script context="module">
	export async function preload(page, session) {
		return { state: page.params['state'] };
	}
</script>

<script>
	import Stat from '../components/Stat.svelte';
	import Chart from '../components/Chart.svelte';
	import TableContainer from '../components/TableContainer.svelte';

	export let state;
</script>

<svelte:head>
	<title>Covid-19 - {state}</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - {state}</h1>
	</div>
</div>

<Stat/>
<Chart/>