<script>
	import { onMount } from "svelte";

	let user = {};
	let message;
	let loading;

	async function createUser() {
		loading = true;
		const url = "https://reqres.in/api/users";
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			const createdUser = await response.json();
			console.debug({createdUser})
			user = {};
			message = 'Success! User created succesfully';
		} else {
			alert("HTTP-Error: " + response.status);
		}

		loading = false;
	}

	async function handleSubmit(e) {
		// e.preventDefault();
		console.debug("submit the data..", user);
		await createUser();
	}
</script>

<svelte:head>
	<title>Hacker News - Svelte - Create User</title>
</svelte:head>

<h2>Create User</h2>

<form on:submit|preventDefault={handleSubmit}>
	Name:
	<input type="text" bind:value={user.name} required />

	Job:
	<input type="text" bind:value={user.job} required />

	<button type="submit">Create</button>
</form>

{#if message}
	<div class="message">{message}</div>
{/if}

{#if loading}
	<div class="message">loading</div>
{/if}

<style>
	.message {
		background: green;
		color: white;
		padding: .5rem;
		margin: .5rem 0;
	}
</style>