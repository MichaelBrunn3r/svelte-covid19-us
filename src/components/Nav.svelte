<script>
	export let segment;
	let isOpen = false;

	function toggeleNav() {
		isOpen = !isOpen;
	}
</script>

<style>
	@media(min-width: 1024px) {
		nav {
			border-bottom: solid gray 1px;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item" >
			<img src="logo-480.png" alt="Virus">
		</a>
		<span class="navbar-burger" aria-label="menu" aria-expanded="false" on:click={toggeleNav} class:is-active={isOpen}>
			<span aria-hidden="true"/>
			<span aria-hidden="true"/>
			<span aria-hidden="true"/>
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a href="/" class="navbar-item" class:is-active={segment == undefined}>Home</a>
			<a href="/about" class="navbar-item" class:is-active={segment == 'about'}>About</a>
		</div>
	</div>
</nav>