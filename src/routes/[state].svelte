<script context="module">
	import stateNames from "../data/stateNames.js";

	export async function preload(page, session) {
		const state = page.params['state'];

		if (stateNames.find(s => s.abbreviation === state) === undefined) {
			this.error(404, "State Not Found");
			return;
		}

		try {
			return { state: state };
		} catch(e) {
			this.error(500, e);
		}

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