<script lang="ts">
import type IReceita from "$lib/interfaces/IReceita";
import Card from "./Card.svelte";
  export let receita:IReceita;
</script>

<Card>
    <img class="receita-img" src="/imagens/receitas/{receita.imagem}" alt={receita.nome} />
    <div class="receita-info">
      <h3 class="receita-nome">{receita.nome}</h3>
    </div>
</Card>

<style>
  .receita-img {
    width: 100%;
    height: 150px;
  }

  .receita-nome {
    font-size: 1.125rem;
  }

  .receita-info {
    padding: 0.75rem 0.875rem;
  }
</style>
