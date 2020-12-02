<script>
	import Table from './Table.svelte';
	import TableFilter from './TableFilter.svelte';

	export let data;

	let stateName = '';
	let sortBy = 'abbrev';
	$: states = filterAndSort(data, stateName, sortBy);

	function filterAndSort(states, stateName, sortBy) {
		const filteredStates = states.filter(state => {
			return stateName === '' || state.name.toLowerCase().startsWith(stateName.toLowerCase())
		})

		if(sortBy !== 'name') {
			return filteredStates.sort((a,b) => {
				return +b[sortBy] - +a[sortBy];
			});
		}

		return filteredStates;
	}
</script>

<TableFilter bind:stateName bind:sortBy/>
<Table {states}/>