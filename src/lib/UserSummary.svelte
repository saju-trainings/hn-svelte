<script>
	export let user;
</script>

<div>
	<span>{user.id}</span>
	<span>{user.email}</span>
	<span>{user.first_name}</span>
	<span>{user.last_name} comments</span>
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
