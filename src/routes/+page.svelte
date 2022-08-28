<script lang="ts">
import { beforeNavigate } from "$app/navigation";

  import Categoria from "$lib/components/Categoria.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import Titulo from "$lib/components/Titulo.svelte";
  import categorias from "$lib/json/categorias.json";

  beforeNavigate(()=>{
    
  })
  </script>

<svelte:head>
  <title>Alura Cook</title>
</svelte:head>

<div class="minha-lista-container">

</div>

<main>
  <Titulo tag={"h1"}>Ingredientes</Titulo>
  <div class="info">
    <p>Selecione abaixo os ingredientes que você deseja usar nesta refeição:</p>
    <p>*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p>
  </div>

  <ul class="categorias">
    {#each categorias as categoria (categoria.nome)}
      <li>
        <Categoria {categoria} />
      </li>
    {/each}
  </ul>
  <div class="buscar-receitas">
    <a href="/receitas">
      <Tag ativa={true} tamanho={"lg"}>Buscar Receitas</Tag>
    </a>
  </div>
</main>

<style>
  .minha-lista-container {
    margin-bottom: 2rem;
  }


  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }
  .categorias {
    margin-bottom: 4.6875rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  .buscar-receitas {
    display: flex;
    justify-content: center;
  }
</style>
