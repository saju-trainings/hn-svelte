<script>
	import page from "page";
  import { onMount } from "svelte";

	export let currentPage = "new";

	function init() {
		page("/", () => { currentPage = 'new' });
		page("/past", () => { currentPage = 'past' });
		page("/comments", () => { currentPage = 'comments' });
		page("/ask", () => { currentPage = 'ask' });
		page("/create-user", () => { currentPage = 'create-user' });
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
	<a href="/create-user">create user</a>
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
