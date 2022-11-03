<script>
	import { onMount } from "svelte";
	import NewsItemSummary from "../lib/NewsItemSummary.svelte";
	let items = [];

	onMount(async () => {
		const url = "https://api.hackerwebapp.com/news";
		const response = await fetch(url);

		if (response.ok) {
			items = await response.json();
			console.debug(items);
		} else {
			alert("HTTP-Error: " + response.status);
		}
	});
</script>

<h2>Newest</h2>

{#each items as item}
	<NewsItemSummary {item}/>
{/each}
