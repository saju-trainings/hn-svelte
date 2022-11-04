<script>
  import Header from "./lib/Header.svelte";
  import New from "./pages/New.svelte";
    import Past from "./pages/Past.svelte";
  
  let page = 'new';
</script>

<main>
  <h1>Hacker News - Svelte</h1>
  <Header bind:page={page}/>
  
  {#if page === 'new'}
    <New />
  {:else if page === 'past'}
    <Past />
  {/if}
</main>

<style>
</style>
