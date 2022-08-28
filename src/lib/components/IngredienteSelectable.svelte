<script lang="ts">
  import Tag from "./Tag.svelte";
  import { minhaLista } from "$lib/stores/minhaLista";

  export let ingrediente: string;
  $:selecionado = $minhaLista.includes(ingrediente)

  function onClick() {
    if (!selecionado) {
      minhaLista.adicionarIngrediente(ingrediente)
    } else {
      minhaLista.removeIngrediente(ingrediente)
    }
  }
</script>

<button on:click={onClick}>
  <Tag ativa={selecionado}>
    {ingrediente}
  </Tag>
</button>

<style>
  button {
    cursor: pointer;
  }
</style>
