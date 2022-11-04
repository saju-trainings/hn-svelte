<svelte:head>
  <title>Hacker News - Svelte - New</title>
</svelte:head>

<script>
	import { onMount } from "svelte";
	import NewsItemSummary from "../lib/NewsItemSummary.svelte";
	let items = [];

	onMount(async () => {
		const url = "https://api.hackerwebapp.com/news";
		const response = await fetch(url);

		if (response.ok) {
			items = await response.json();
		} else {
			alert("HTTP-Error: " + response.status);
		}
	});
</script>

<h2>Newest</h2>

{#each items as item}
  <div class="news-item-container">
		<NewsItemSummary {item}/>
	</div>
{/each}

<style>
	.news-item-container {
		padding: .5rem;
	}
</style>
