<script>
	import format from '../data/format.js';
	export let states;
</script>

<style>
	table {
		width: 100%;
	}

	.section {
		padding: 0.5 rem 1.5rem;
	}
</style>

<div class="section">
	<div class="container">
		<table class="table is-bordered is-striped">
			<thead>
				<tr>
					<th>State</th>
					<th>Cases</th>
					<th>Deaths</th>
					<th>Total Tested</th>
				</tr>
			</thead>
			<tbody>
				{#each states as state (state.abbrev)}
					<tr>
						<td>
						<a href="{state.abbrev}">
							{state.name}
						</a>
						</td>
						<td>{format.number(state.cases)}</td>
						<td>{format.number(state.deaths)}</td>
						<td>{format.number(state.tested)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>