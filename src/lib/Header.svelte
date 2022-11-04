<script>
	export let page = 'new';
	
</script>

<nav>
	<span on:click={() => page = 'new'}>new</span>
	<span on:click={() => page = 'past'}>past</span>
	<span on:click={() => page = 'comments'}>comments</span>
	<span on:click={() => page = 'ask'}>ask</span>
</nav>

<style>
	nav {
		background-color: lightblue;
		padding: .5rem;
	}
	
	span {
		padding: 0.5rem;
		cursor: pointer;
	}
</style>