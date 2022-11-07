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
			console.debug({ createdUser });
			user = {};
			message = "Success! User created succesfully";
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

<h2 class="is-size-2">Create User</h2>

<div class="container is-max-desktop">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="field">
			<label class="label" for="name">Name</label>
			<div class="control">
				<input
					type="text"
					id="name"
					class="input"
					bind:value={user.name}
					required
				/>
			</div>
		</div>

		<div class="field">
			<label class="label">Job</label>
			<div class="control">
				<input type="text" class="input" bind:value={user.job} required />
			</div>
		</div>

		<button type="submit" class="button is-primary">Create</button>
	</form>

	{#if message}
		<div class="message is-success">
			<div class="message-body">
				{message}
			</div>
		</div>
	{/if}

	{#if loading}
		<div class="message is-dark">
			<div class="message-body">Loading..</div>
		</div>
	{/if}
</div>
