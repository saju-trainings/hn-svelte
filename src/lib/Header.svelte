<script>
	import page from "page";
	import { onMount } from "svelte";

	export let currentPage = "new";

	function init() {
		page("/", () => {
			currentPage = "new";
		});
		page("/past", () => {
			currentPage = "past";
		});
		page("/comments", () => {
			currentPage = "comments";
		});
		page("/ask", () => {
			currentPage = "ask";
		});
		page("/create-user", () => {
			currentPage = "create-user";
		});
		page("/users", () => {
			currentPage = "users";
		});
		page("/users/:id", () => {
			currentPage = "user";
		});
		page();
	}

	onMount(() => {
		init();
	});
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<h1>Hacker News - Svelte</h1>
		</a>
		<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
	</div>
	<div class="navbar-menu">
		<div class="navbar-end">
			<a href="/"class="navbar-item">new</a>
			<a href="/past" class="navbar-item">past</a>
			<a href="/create-user" class="navbar-item">create user</a>
			<a href="/users" class="navbar-item">users</a>
		</div>
	</div>
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
