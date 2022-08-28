<script>
  import { quadIn } from "svelte/easing";
  import { minhaLista } from "$lib/stores/minhaLista";
  import { fade } from "svelte/transition";
  import Cabecalho from "$lib/components/Cabecalho.svelte";
  import MinhaLista from "$lib/components/MinhaLista.svelte";
  import Rodape from "$lib/components/Rodape.svelte";
</script>

<div class="container-principal">
  <Cabecalho />
  <div class="estilo-principal">
    {#if $minhaLista.length}
      <div transition:fade={{ delay: 0, duration: 350, easing: quadIn }}>
        <MinhaLista />
        <div class="divisoria" />
      </div>
    {/if}
    <slot />
  </div>

  <Rodape />
</div>

<style>

.divisoria {
    width: 40vw;
    height: 2px;
    background-color: var(--verde);
    margin: 0 auto;
  }
  .container-principal {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .estilo-principal {
    text-align: center;
    padding: 0 5vw 3.375rem;
    flex: 1;
  }
</style>
