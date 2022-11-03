<script>
	export let item;
</script>

<div>
	<a class="title" href={item.url}>{item.title}</a>
	<span class="domain">({item.domain})</span>
</div>

<style>
	.title {
		font-size: medium;
	}

	.domain {
		font-size: smaller;
		color: grey;
	}
</style>
