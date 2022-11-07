<svelte:head>
  <title>Hacker News - Svelte - New</title>
</svelte:head>

<script>
	import { onMount } from "svelte";
  import UserSummary from "../lib/UserSummary.svelte";
	let users = [];

	onMount(async () => {
		const url = "https://reqres.in/api/users";
		const response = await fetch(url);

		if (response.ok) {
			const json = await response.json();
			users = json.data;
		} else {
			alert("HTTP-Error: " + response.status);
		}
	});
</script>

<h2>Users</h2>

{#each users as user}
  <div class="user-item-container">
		<UserSummary {user}/>
	</div>
{/each}

<style>
	.user-item-container {
		padding: .5rem;
	}
</style>
