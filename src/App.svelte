<script>
  import Header from "./lib/Header.svelte";
  import New from "./pages/New.svelte";
  import Past from "./pages/Past.svelte";
  import CreateUser from "./pages/CreateUser.svelte";
  import Users from "./pages/Users.svelte";
  import User from "./pages/User.svelte";
  
  let currentPage = 'new';
  let id;
</script>

<main>
  <Header bind:currentPage={currentPage} bind:id={id}/>
  
  {#if currentPage === 'new'}
    <New />
  {:else if currentPage === 'past'}
    <Past />
  {:else if currentPage === 'create-user'}
    <CreateUser />
  {:else if currentPage === 'users'}
    <Users />
  {:else if currentPage === 'user'}
    <User {id} />
  {/if}
</main>

<style>
</style>
