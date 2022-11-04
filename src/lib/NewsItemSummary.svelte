<script>
	export let item;
</script>

<div>
	<a class="title" href={item.url}>{item.title}</a>
	<span class="domain">({item.domain})</span>
</div>
<div>
	<span>{item.points}</span>
	<span>by {item.user}</span>
	<span>by {item.time_ago}</span>
	<span>by {item.comments_count} comments</span>
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
