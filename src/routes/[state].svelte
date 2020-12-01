<script context="module">
	export async function preload(page, session) {
		return { state: page.params['state'] };
	}
</script>

<script>
	export let state;
</script>

<h1>{state}</h1>