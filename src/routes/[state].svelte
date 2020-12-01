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

<h1>State: {state}</h1>
<Stat/>
<Chart/>