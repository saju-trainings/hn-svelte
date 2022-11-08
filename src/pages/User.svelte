<script>
  import { onMount } from "svelte";

  export let id;
	
	let user;

  onMount(async () => {
		const url = `https://reqres.in/api/users/${id}`;
		const response = await fetch(url);

		if (response.ok) {
			const json = await response.json();
			user = json.data;
		} else {
			alert("HTTP-Error: " + response.status);
		}
  })
</script>

<h1 class="is-size-1">User</h1>

{#if user}
	<div>id: {user.id}</div>
	<div>email: {user.email}</div>
	<div>first name: {user.first_name}</div>
	<div>last name: {user.last_name}</div>
	<img src={user.avatar} alt="avatar"/>
{/if}