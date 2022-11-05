<script>
  import Header from "./lib/Header.svelte";
  import New from "./pages/New.svelte";
  import Past from "./pages/Past.svelte";
  import CreateUser from "./pages/CreateUser.svelte";
  
  let currentPage = 'new';
</script>

<main>
  <h1>Hacker News - Svelte</h1>
  <Header bind:currentPage={currentPage}/>
  
  {#if currentPage === 'new'}
    <New />
  {:else if currentPage === 'past'}
    <Past />
  {:else if currentPage === 'create-user'}
    <CreateUser />
  {/if}
</main>

<style>
</style>
