<script>
	import page from "page";
  import { onMount } from "svelte";

	export let currentPage = "new";

	function init() {
		page("/", () => { currentPage = 'new' });
		page("/past", () => { currentPage = 'past' });
		page("/comments", () => { currentPage = 'comments' });
		page("/ask", () => { currentPaeg = 'ask' });
		page();
	}
	
	onMount(() => {
		init();
	});
</script>

<nav>
	<a href="/">new</a>
	<a href="/past">past</a>
	<span on:click={() => (currentPage = "comments")}>comments</span>
	<span on:click={() => (currentPage = "ask")}>ask</span>
</nav>

<style>
	nav {
		background-color: lightblue;
		padding: 0.5rem;
	}

	span {
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
