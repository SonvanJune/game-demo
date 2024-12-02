<script>
  export let label;
  export let handleCheck = () => {};
  export let disabled;
</script>

{#if disabled == false}
  <button on:click={handleCheck}>{label}</button>
{:else}
  <button on:click={handleCheck} disabled>{label}</button>
{/if}
